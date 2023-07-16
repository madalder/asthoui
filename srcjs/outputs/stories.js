import $ from 'jquery';
import 'shiny';

const createCards = (cards) => {
  return cards.map(c => createCard(c)).join("");
}

const createCard = (card) => {
  return `<li class="story bg-white">${card.content}</li>`
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
    window.addEventListener('resize', function(event) {
      resize(el);
    }, true);


    $(el).on("click", function(){
      var prependList = function() {
        if( $('.story').hasClass('activeNow') ) {
          var $slicedCard = $('.story').slice(lastCard).removeClass('transformThis activeNow');
          $(el).find('ul').prepend($slicedCard);
        }
      }

      $(el).find('li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
      setTimeout(function(){prependList(); }, 150);
    });
  }
});

Shiny.outputBindings.register(storiesBinding, "asthoui.storiesBinding");

const resize = (el) => {
  let w = $(el).width();
  $(el).find(".stories-list").width(w - 12 + "px");
}
