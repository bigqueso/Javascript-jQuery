
$(document).ready(function() {
  var gridSize = 16
  var squareSize = 768 / gridSize

  $('body').append('<div id ="wrapper"></div>');
  $('#wrapper').css({'text-align': 'center'})
  $('#wrapper').append('<button type="button">New Grid</button>');
  $('button').css({
    width: '71px',
    'margin': '0px auto 10px auto',
  });
  $('#wrapper').append('<div id ="grid"></div>');
  $('#grid').height('768px').width('768px');
  $('#grid').css({
    margin: '0px auto',
    border: '1px solid'});

    for (var i = 0; i < gridSize * gridSize; i++) {
          $('#grid').append('<div class = "square"></div>')
        };
  $('.square').height(squareSize).width(squareSize);
  $('.square').css({
    'vertical-align': 'top',
    display: 'inline-block',
    'background-color': 'white',
  });


    $(".square").hover(function() {
       $(this).css("background-color","orange");
    });

  console.log("Grid complete")

  $('button').click(function() {
    $('.square').remove();

    var gridSize = prompt("choode a number between 1 and 32!");
    var squareSize = 768 / gridSize

    if (gridSize >= 1 && gridSize <= 32) {
      for (var i = 0; i < gridSize * gridSize; i++) {
            $('#grid').append('<div class = "square"></div>')
          };
    } else {
      return alert('That was not 1-32... Click "New Grid" and try again.')
    };

    $('.square').height(squareSize).width(squareSize);
    $('.square').css({
      'vertical-align': 'top',
      display: 'inline-block',
      'background-color': 'white',
    });

    $(".square").hover(function() {
       $(this).css("background-color","orange");
    });


  });
});
