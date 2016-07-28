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
    }
    compareArray = [];
  }

  $('#back01').click(function(){
    var oneOne = $('#front01:first-child').text();
    compareArray.push(oneOne);
    $('#front01').show();
    $('#back01').hide();
  });
  $('#back02').click(function(){
    var oneTwo = $('#front02:first-child').text();
    compareArray.push(oneTwo);
    $('#front02').show();
    $('#back02').hide();
  });
  $('#back03').click(function(){
    var oneThree = $('#front03:first-child').text();
    compareArray.push(oneThree);
    $('#front03').show();
    $('#back03').hide();
  });
  $('#back04').click(function(){
    var oneFour = $('#front04:first-child').text();
    compareArray.push(oneFour);
    $('#front04').show();
    $('#back04').hide();
  });
  $('#back05').click(function(){
    var twoOne = $('#front05:first-child').text();
    compareArray.push(twoOne);
    $('#front05').show();
    $('#back05').hide();
  });
  $('#back06').click(function(){
    var twoTwo = $('#front06:first-child').text();
    compareArray.push(twoTwo);
    $('#front06').show();
    $('#back06').hide();
  });
  $('#back07').click(function(){
    var twoThree = $('#front07:first-child').text();
    compareArray.push(twoThree);
    $('#front07').show();
    $('#back07').hide();
  });
  $('#back08').click(function(){
    var twoFour = $('#front08:first-child').text();
    compareArray.push(twoFour);
    $('#front08').show();
    $('#back08').hide();
  });

  $('#back09').click(function(){
    var threeOne = $('#front09:first-child').text();
    compareArray.push(threeOne);
    $('#front09').show();
    $('#back09').hide();
  });
  $('#back10').click(function(){
    var threeTwo = $('#front10:first-child').text();
    compareArray.push(threeTwo);
    $('#front10').show();
    $('#back10').hide();
  });
  $('#back11').click(function(){
    var threeThree = $('#front11:first-child').text();
    compareArray.push(threeThree);
    $('#front11').show();
    $('#back11').hide();
  });
  $('#back12').click(function(){
    var threeFour = $('#front12:first-child').text();
    compareArray.push(threeFour);
    $('#front12').show();
    $('#back12').hide();
  });
  $('#back13').click(function(){
    var fourOne = $('#front13:first-child').text();
    compareArray.push(fourOne);
    $('#front13').show();
    $('#back13').hide();
  });
  $('#back14').click(function(){
    var fourTwo = $('#front14:first-child').text();
    compareArray.push(fourTwo);
    $('#front14').show();
    $('#back14').hide();
  });
  $('#back15').click(function(){
    var fourThree = $('#front15:first-child').text();
    compareArray.push(fourThree);
    $('#front15').show();
    $('#back15').hide();
  });
  $('#back16').click(function(){
    var fourFour = $('#front16:first-child').text();
    compareArray.push(fourFour);
    $('#front16').show();
    $('#back16').hide();
  });

  var counter = 0;
  $( ".back" ).click(function() {
    counter += 1
    if (counter == 2){
      cardTwoId = this.id
      compare();
      counter = 0
    }else{
      cardOneId = this.id
    }
  });

});
