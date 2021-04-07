var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png" ];

var oneVisable = false;
var turnCounter = 0;
var visable_nr;
var lock = false;
var pairsLeft = 6;

startGame();



function startGame() {
  //cards = cards.sort((a, b) => 0.5 - Math.random());

  oneVisable = false;
  turnCounter = 0;
  lock = false;
  pairsLeft = 6;


  c = new Array(12);
  for (let i = 0; i < 12; i++){
    $('.score').before('<div class="card" id="c' + i + '"></div>');
    c[i] = document.getElementById('c'+i);
    c[i].addEventListener("click", function() { revealCard(i); });
  }
  $('.score').html('Turn conter: ' + turnCounter);

}



function revealCard(nr) {

  var opacityValue = $('#c'+nr).css('opacity');

  if(opacityValue != 0 && lock == false && nr != visable_nr){
    lock = true;
    var obraz = "url(img/" + cards[nr] + ")";

    $('#c'+nr).css('background-image', obraz);
    $('#c'+nr).addClass('cardA');
    $('#c'+nr).removeClass('card');

    if(oneVisable == false){
      //first card
      oneVisable = true;
      visable_nr = nr;
      lock = false;

    }
    else {
      //secound card
      if(cards[visable_nr] == cards[nr]){
        //alert('traf');
        setTimeout(function() { hide2Cards(nr, visable_nr) }, 500);

      }
      else {
        //alert('pudło');
        setTimeout(function() { restore2Cards(nr, visable_nr) }, 1000);
      }

      oneVisable = false;
      turnCounter++;
      $('.score').html('Turn conter: ' + turnCounter);
    }
  }
}




function hide2Cards(nr1,nr2) {
  $('#c'+nr1).css('opacity', '0');
  $('#c'+nr2).css('opacity', '0');

  pairsLeft--;
  if(pairsLeft == 0){
    $('#c0').before('<h1>You win!!! <br> Done in ' +turnCounter + 'turns.</h1>');
    $('#c0').before('<div  id="restart">RESTART</div>');
    //$('#restart').css('cursor', 'pointer');
    document.getElementById('restart').addEventListener("click", function() { restartGame(); });

  }

  function restartGame() {
    $('.board div:not(.score)').remove();
    $('.board h1').remove();
    startGame();
  }

  lock = false;

}

function restore2Cards(nr1,nr2) {
  $("#c"+nr1).css('background-image', 'url(img/karta.png)');
  $("#c"+nr1).addClass('card');
  $("#c"+nr1).removeClass('cardA');


  $("#c"+nr2).css('background-image', 'url(img/karta.png)');
  $("#c"+nr2).addClass('card');
  $("#c"+nr2).removeClass('cardA');

  lock = false;
}
