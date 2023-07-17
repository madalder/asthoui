import $ from 'jquery';
import 'shiny';

const createCards = (cards) => {
  return cards.map(c => createCard(c)).join("");
}

const createCard = (card) => {
  return `<div class="story bg-white">${card.content}</div>`
}

let storiesBinding = new Shiny.OutputBinding();

$.extend(storiesBinding, {
  find: (scope) => {
    return $(scope).find(".stories-container");
  },
  getId: (el) => {
    return el.id;
  },
  renderValue: (el, data) => {
    $(el).find(".stories-list").html(createCards(data));

    var $story = $('.story');
    var lastCard = $(".story-list .story").length - 1;

    resize(el);
    window.addEventListener('resize', (e) => {
      resize(el);
    }, true);

    $(el).off("click");

    $(el).on("click", (e) => {
      console.log(e);
      var prependList = function() {
        if($(el).find('.story').hasClass('activeNow') ) {
          var $slicedCard = $('.story').slice(lastCard).removeClass('transformThis activeNow');
          $(el).find('.stories-list').prepend($slicedCard);
        }
      }

      $(el).find('.story').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
      setTimeout(function(){prependList(); }, 150);
    });
  }
});

Shiny.outputBindings.register(storiesBinding, "asthoui.storiesBinding");

const resize = (el) => {
  let w = $(el).width();
  $(el).find(".stories-list").width(w - 12 + "px");
}
