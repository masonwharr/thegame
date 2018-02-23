$(document).ready(function() {
  var items = ["Potato", "Tomato", "Strawberry", "Pencil", "Blueberry", "Raspberry", "Lettuce", "Steak"];
  var moves = [];
  var star = $('<span>' + '&#9733' + '</span>');
  var cards = 8
  var starItem = star[0].innerHTML;
  items = shuffle(items)
  console.log(items);
  var clicked = document.getElementsByClassName('cardClicked');
  var amount = clicked.length;

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  // Timer that starts on first click.
  var timer;

  function startTimer() {
    clearInterval(timer);
    var mins = 0;
    var secs = 0;
    timer = window.setInterval(function() {
      secs = secs + 1;
      if (secs == 59) {
        mins = mins + 1;
        secs = 0;
      }
      $('.countUp').html('<p>' + 'Timer: ' + mins + ':' + secs + '</p>');
    }, 1000);
  };
  function restart(){
  cards = 8;
    $('.card').remove();
    $('.card').css("pointer-events", "auto");
    var cardsArray = [];
    $('.cardClicked').removeClass("cardClicked");
    moves = [];
    moves.length = 0;
    $('.movesBlock').html('<p class="movesText">' + 'Moves: ' + moves.length + '</p>');
    $('.rating').html('Rating:' + starItem + starItem + starItem);
    // Reshuffles on restart.
    for (i = 0; i < items.length; i++) {
      $('<div class="card"/>').html('<span class="cardText">' + items[i] + '</span>').appendTo('.board');
    };
    items = shuffle(items);
    for (i = 0; i < items.length; i++) {
      $('<div class="card"/>').html('<span class="cardText">' + items[i] + '</span>').appendTo('.board');
    };
  };
  // Reset function for timer.
  function resetTimer() {
    clearInterval(timer);
    var mins = 0;
    var secs = 0;
    $('.countUp').html('<p>' + 'Timer: ' + mins + ':' + secs + '</p>');
  };
  for (i = 0; i < items.length; i++) {
    $('<div class="card"/>').html('<span class="cardText">' + items[i] + '</span>').appendTo('.board');
  };
  items = shuffle(items);
  for (i = 0; i < items.length; i++) {
    $('<div class="card"/>').html('<span class="cardText">' + items[i] + '</span>').appendTo('.board');
  };
  $(document).on('click', '.card', function() {
    var clicked = document.getElementsByClassName('cardClicked');
    var amount = clicked.length;
    // Makes it so you don't double start timer.
    if (moves.length < 1 && amount == 0) {
      startTimer()
    }
    $(this).find("span").toggleClass("cardText");
    $(this).toggleClass("cardClicked");
    $(this).css("pointer-events", "none");
    var clicked = document.getElementsByClassName('cardClicked');
  });
  $(document).on('click', '.card', function() {
    var clicked = document.getElementsByClassName('cardClicked');
    var amount = clicked.length;
    var cardsArray = [];
    // Checks if the amount of cards clicked is 2.
    if (amount == 2) {
      $('.card').css("pointer-events", "none");
      $('.cardClicked').each(function() {
        cardsArray.push($(this));
      });
      // Check if they are the same card.
      if (cardsArray[1][0].textContent == cardsArray[0][0].textContent) {
        cards = cards - 1;
        if (cards == 0) {
          if (moves.length <= 10) {
      var score = ('Rating: ' + starItem + starItem + starItem);
    } else if (moves.length <= 14) {
      var score = ('Rating: ' + starItem + starItem);
    } else {
      var score = ('Rating: ' + starItem);
    }
    var rightScore = moves.length + 1;

          if (window.confirm('Congrats. You won! ' + 'Moves:' + rightScore + '  ' + score + '  ' + $('.countUp')[0].innerText + 'Click Ok to restart or no to cancel')){
              setTimeout(function() {
          resetTimer();
restart();
  }, 1000);
          }
        }
        $(".cardClicked").addClass('cardRight');
        $('.cardClicked').removeClass("cardClicked");
        $('.card').css("pointer-events", "auto");
        moves.push($('l'));
        $('.movesBlock').html('<p class="movesText">' + 'Moves: ' + moves.length + '</p>');
        // Empties array.
        var cardsArray = [];
        // Checks if they are not equal.
      } else if (cardsArray[1][0].textContent !== cardsArray[0][0].textContent) {
        moves.push($('l'));
        $('.movesBlock').html('<p class="movesText">' + 'Moves: ' + moves.length + '</p>');
        setTimeout(function() {
          $('.cardClicked').find("span").addClass("cardText");
          $('.cardClicked').removeClass("cardClicked");
          $('.card').css("pointer-events", "auto");
        }, 700);
        var cardsArray = [];
      }
    }
  });
  $('.card').click(function() {
    var clicked = document.getElementsByClassName('cardClicked');
    var amount = clicked.length;
    // Decides amount of stars based on moves.
    if (moves.length <= 10) {
      $('.rating').html('Rating:' + starItem + starItem + starItem);
    } else if (moves.length <= 14) {
      $('.rating').html('Rating:' + starItem + starItem);
    } else {
      $('.rating').html('Rating:' + starItem);
    }
  });
  $('.movesBlock').html('<p class="movesText">' + 'Moves: ' + moves.length + '</p>');
  
  // Restart button.
  $('.restart').click(function() {
resetTimer();
restart();
  });
});
