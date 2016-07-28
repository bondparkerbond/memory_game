var compareArray = []
var cardOneId = "";
var cardTwoId = "";
var totalMatches = 0;
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
  // remake the HTML based on new numbers
  for (var i = 0; i < arr.length; i++){
    if(i<9){
      var el = '#front0' + (i+1).toString() + ':first-child'
      $(el).html("<h4 class='center-align'>" + randarr[i] + "</h4>");
    } else {
      var el = '#front' + (i+1).toString() + ':first-child'
      $(el).html("<h4 class='center-align'>" + randarr[i] + "</h4>");
    }
  }

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
    if(compareArray[0] === compareArray[1] && compareArray[1] ) {
      totalMatches += 1
      setTimeout(function () {
        if(totalMatches === 8) {
          Materialize.toast('Congragulations, you won!', 3000);
        } else {
          Materialize.toast('Its a match!', 1500);
        }
      }, 150);
    }
    else{
      var idOneNum = cardOneId.slice(-2);
      var idTwoNum = cardTwoId.slice(-2);

      setTimeout(function () {
        Materialize.toast('Not a match', 1500);
      }, 200);
        
      setTimeout(function () {
        $(`#front${idOneNum}`).hide();
        $(`#back${idOneNum}`).show();
        $(`#front${idTwoNum}`).hide();
        $(`#back${idTwoNum}`).show();
      }, 1200);
      // $('#front1').click(function(){
      //   $('#front1').hide();
      //   $('#back1').show();
      // });
      // $('#front2').click(function(){
      //   $('#front2').hide();
      //   $('#back2').show();
      // });
      // $('#front3').click(function(){
      //   $('#front3').hide();
      //   $('#back3').show();
      // });
      // $('#front4').click(function(){
      //   $('#front4').hide();
      //   $('#back4').show();
      // });
      // $('#front5').click(function(){
      //   $('#front5').hide();
      //   $('#back5').show();
      // });
      // $('#front6').click(function(){
      //   $('#front6').hide();
      //   $('#back6').show();
      // });
      // $('#front7').click(function(){
      //   $('#front7').hide();
      //   $('#back7').show();
      // });
      // $('#front8').click(function(){
      //   $('#front8').hide();
      //   $('#back8').show();
      // });
      // $('#front9').click(function(){
      //   $('#front9').hide();
      //   $('#back9').show();
      // });
      // $('#front10').click(function(){
      //   $('#front10').hide();
      //   $('#back10').show();
      // });
      // $('#front11').click(function(){
      //   $('#front11').hide();
      //   $('#back11').show();
      // });
      // $('#front12').click(function(){
      //   $('#front12').hide();
      //   $('#back12').show();
      // });
      // $('#front13').click(function(){
      //   $('#front13').hide();
      //   $('#back13').show();
      // });
      // $('#front14').click(function(){
      //   $('#front14').hide();
      //   $('#back14').show();
      // });
      // $('#front15').click(function(){
      //   $('#front15').hide();
      //   $('#back15').show();
      // });
      // $('#front16').click(function(){
      //   $('#front16').hide();
      //   $('#back16').show();
      // });
    }
    console.log(compareArray);
    compareArray = [];
    console.log(compareArray);
  }

  // Need to change below to not function on click
  // but to activate when two cards are not a pair
  // solves edge case of clicking on same card twice

  $('#back01').click(function(){
    var oneOne = $('#front01:first-child').text();
    // Materialize.toast(oneOne, 1500);
    compareArray.push(oneOne);
    console.log(compareArray)
    $('#front01').show();
    $('#back01').hide();
  });
  $('#back02').click(function(){
    var oneTwo = $('#front02:first-child').text();
    compareArray.push(oneTwo);
    console.log(compareArray);
    $('#front02').show();
    $('#back02').hide();
  });
  $('#back03').click(function(){
    var oneThree = $('#front03:first-child').text();
    compareArray.push(oneThree);
    console.log(compareArray);
    $('#front03').show();
    $('#back03').hide();
  });
  $('#back04').click(function(){
    var oneFour = $('#front04:first-child').text();
    compareArray.push(oneFour);
    console.log(compareArray);
    $('#front04').show();
    $('#back04').hide();
  });
  $('#back05').click(function(){
    var twoOne = $('#front05:first-child').text();
    compareArray.push(twoOne);
    console.log(compareArray);
    $('#front05').show();
    $('#back05').hide();
  });
  $('#back06').click(function(){
    var twoTwo = $('#front06:first-child').text();
    compareArray.push(twoTwo);
    console.log(compareArray);
    $('#front06').show();
    $('#back06').hide();
  });
  $('#back07').click(function(){
    var twoThree = $('#front07:first-child').text();
    compareArray.push(twoThree);
    console.log(compareArray);
    $('#front07').show();
    $('#back07').hide();
  });
  $('#back08').click(function(){
    var twoFour = $('#front08:first-child').text();
    compareArray.push(twoFour);
    console.log(compareArray);
    $('#front08').show();
    $('#back08').hide();
  });

  $('#back09').click(function(){
    var threeOne = $('#front09:first-child').text();
    compareArray.push(threeOne);
    console.log(compareArray);
    $('#front09').show();
    $('#back09').hide();
  });
  $('#back10').click(function(){
    var threeTwo = $('#front10:first-child').text();
    compareArray.push(threeTwo);
    console.log(compareArray);
    $('#front10').show();
    $('#back10').hide();
  });
  $('#back11').click(function(){
    var threeThree = $('#front11:first-child').text();
    compareArray.push(threeThree);
    console.log(compareArray);
    $('#front11').show();
    $('#back11').hide();
  });
  $('#back12').click(function(){
    var threeFour = $('#front12:first-child').text();
    compareArray.push(threeFour);
    console.log(compareArray);
    $('#front12').show();
    $('#back12').hide();
  });
  $('#back13').click(function(){
    var fourOne = $('#front13:first-child').text();
    compareArray.push(fourOne);
    console.log(compareArray);
    $('#front13').show();
    $('#back13').hide();
  });
  $('#back14').click(function(){
    var fourTwo = $('#front14:first-child').text();
    compareArray.push(fourTwo);
    console.log(compareArray);
    $('#front14').show();
    $('#back14').hide();
  });
  $('#back15').click(function(){
    var fourThree = $('#front15:first-child').text();
    compareArray.push(fourThree);
    console.log(compareArray);
    $('#front15').show();
    $('#back15').hide();
  });
  $('#back16').click(function(){
    var fourFour = $('#front16:first-child').text();
    compareArray.push(fourFour);
    console.log(compareArray);
    $('#front16').show();
    $('#back16').hide();
  });

  var counter = 0;
  $( ".back" ).click(function() {
    // if (($('.card').val())/2 == $('.front').val()){
    // ($('.card').css('display'))
    counter += 1
    if (counter == 2){
      // Materialize.toast('Checking for pairs!', 1000);
      cardTwoId = this.id
      compare();
      counter = 0
    }else{
      cardOneId = this.id 
      // Materialize.toast('Storing Value', 1500);
    }
  });

});

