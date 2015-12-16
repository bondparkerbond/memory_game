var first_card = 9;
$(document).ready(function(){
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  randarr = shuffle(arr);
  console.log(arr);


  $('#front1:first-child').html("<h4 class='center-align'>" + randarr[0] + "</h4>");
  $('#front2:first-child').html("<h4 class='center-align'>" + randarr[1] + "</h4>");
  $('#front3:first-child').html("<h4 class='center-align'>" + randarr[2] + "</h4>");
  $('#front4:first-child').html("<h4 class='center-align'>" + randarr[3] + "</h4>");
  $('#front5:first-child').html("<h4 class='center-align'>" + randarr[4] + "</h4>");
  $('#front6:first-child').html("<h4 class='center-align'>" + randarr[5] + "</h4>");
  $('#front7:first-child').html("<h4 class='center-align'>" + randarr[6] + "</h4>");
  $('#front8:first-child').html("<h4 class='center-align'>" + randarr[7] + "</h4>");
  $('#front9:first-child').html("<h4 class='center-align'>" + randarr[8] + "</h4>");
  $('#front10:first-child').html("<h4 class='center-align'>" + randarr[9] + "</h4>");
  $('#front11:first-child').html("<h4 class='center-align'>" + randarr[10] + "</h4>");
  $('#front12:first-child').html("<h4 class='center-align'>" + randarr[11] + "</h4>");
  $('#front13:first-child').html("<h4 class='center-align'>" + randarr[12] + "</h4>");
  $('#front14:first-child').html("<h4 class='center-align'>" + randarr[13] + "</h4>");
  $('#front15:first-child').html("<h4 class='center-align'>" + randarr[14] + "</h4>");
  $('#front16:first-child').html("<h4 class='center-align'>" + randarr[15] + "</h4>");



  // arrtest = [1, 2, 3, 4];
  // if (arrtest[1]==2){
  //   $('#front2:first-child').html("<h4 class='center-align'>2</h4>");
  //   Materialize.toast('2 = 2', 1500);
  // };


  //onclick function add flip class and then check to see if cards are the same
  // function selectCard() {
  //  // we do nothing if there are already two cards flipped.
  //  if ($(".card-flipped").size() > 1) {
  //   return;
  //  }
  //  $(this).addClass("card-flipped");
  // // check the pattern of both flipped card 0.7s later.
  //  if ($(".card-flipped").size() == 2) {
  //   setTimeout(checkPattern,700);
  //  }
  // }

  // if // 2 or more cards, make error, flip cards back over
  // else if //if 1 card already selected
  //   //do click action, compare 2 cards, if equal remove them
  //   // if not the same flip them back over
  // else // if no cards flipped over, flip over card
  //      // store value to compare?
  function compare(){
    if(first_card == 9){

    }
    else{

    }
  }

  var counter = 0;
  $( ".card" ).click(function() {
    // if (($('.card').val())/2 == $('.front').val()){
    // ($('.card').css('display'))
    counter += 1
    if (counter == 2){
      console.log(counter);
      Materialize.toast('Checking for pairs!', 1500);
      compare();
      counter = 0
    }else{
      Materialize.toast('Storing Value', 1500);
      first_card = randarr[9]
    }
  });

  // Need to change below to not function on click
  // but to activate when two cards are not a pair
  // solves edge case of clicking on same card twice
  $('#front1').click(function(){
    $('#front1').hide();
    $('#back1').show();
  });
  $('#front2').click(function(){
    $('#front2').hide();
    $('#back2').show();
  });
  $('#front3').click(function(){
    $('#front3').hide();
    $('#back3').show();
  });
  $('#front4').click(function(){
    $('#front4').hide();
    $('#back4').show();
  });
  $('#front5').click(function(){
    $('#front5').hide();
    $('#back5').show();
  });
  $('#front6').click(function(){
    $('#front6').hide();
    $('#back6').show();
  });
  $('#front7').click(function(){
    $('#front7').hide();
    $('#back7').show();
  });
  $('#front8').click(function(){
    $('#front8').hide();
    $('#back8').show();
  });
  $('#front9').click(function(){
    $('#front9').hide();
    $('#back9').show();
  });
  $('#front10').click(function(){
    $('#front10').hide();
    $('#back10').show();
  });
  $('#front11').click(function(){
    $('#front11').hide();
    $('#back11').show();
  });
  $('#front12').click(function(){
    $('#front12').hide();
    $('#back12').show();
  });
  $('#front13').click(function(){
    $('#front13').hide();
    $('#back13').show();
  });
  $('#front14').click(function(){
    $('#front14').hide();
    $('#back14').show();
  });
  $('#front15').click(function(){
    $('#front15').hide();
    $('#back15').show();
  });
  $('#front16').click(function(){
    $('#front16').hide();
    $('#back16').show();
  });

  $('#back1').click(function(){
    // $('#front1:first-child').innerHTML = arr[0];
    var one = $('#front1:first-child').text();
    Materialize.toast(one, 1500);
    console.log(one);
    $('#front1').show();
    $('#back1').hide();
  });
  $('#back2').click(function(){
    $('#front2').show();
    $('#back2').hide();
  });
  $('#back3').click(function(){
    $('#front3').show();
    $('#back3').hide();
  });
  $('#back4').click(function(){
    $('#front4').show();
    $('#back4').hide();
  });
  $('#back5').click(function(){
    $('#front5').show();
    $('#back5').hide();
  });
  $('#back6').click(function(){
    $('#front6').show();
    $('#back6').hide();
  });
  $('#back7').click(function(){
    $('#front7').show();
    $('#back7').hide();
  });
  $('#back8').click(function(){
    $('#front8').show();
    $('#back8').hide();
  });
  $('#back9').click(function(){
    $('#front9').show();
    $('#back9').hide();
  });
  $('#back10').click(function(){
    $('#front10').show();
    $('#back10').hide();
  });
  $('#back11').click(function(){
    $('#front11').show();
    $('#back11').hide();
  });
  $('#back12').click(function(){
    $('#front12').show();
    $('#back12').hide();
  });
  $('#back13').click(function(){
    $('#front13').show();
    $('#back13').hide();
  });
  $('#back14').click(function(){
    $('#front14').show();
    $('#back14').hide();
  });
  $('#back15').click(function(){
    $('#front15').show();
    $('#back15').hide();
  });
  $('#back16').click(function(){
    $('#front16').show();
    $('#back16').hide();
  });
});
