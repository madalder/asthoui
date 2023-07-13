import $ from 'jquery';
import 'shiny';

const createCards = (cards) => {
  return cards.map(c => createCard(c)).join("");
}

const createCard = (card) => {
  return `<li class="story bg-success">${card.content}</li>`
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
    console.log(data);
    $(el).find(".stories-list").html(createCards(data));

    var $story = $('.story');
    var lastCard = $(".story-list .story").length - 1;

    $('.next').on("click", function(){
      var prependList = function() {
        if( $('.story').hasClass('activeNow') ) {
          var $slicedCard = $('.story').slice(lastCard).removeClass('transformThis activeNow');
          $(el).find('ul').prepend($slicedCard);
        }
      }

      $(el).find('li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
      setTimeout(function(){prependList(); }, 150);
    });

    $('.prev').on("click", function() {
      var appendToList = function() {
        if( $('.story').hasClass('activeNow') ) {
          var $slicedCard = $('.story').slice(0, 1).addClass('transformPrev');
          $('.story-list').append($slicedCard);
        }}

        $(el).find('li').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
      setTimeout(function(){appendToList();}, 150);
    });
  }
});

Shiny.outputBindings.register(storiesBinding, "asthoui.storiesBinding");

