var rows = 16;
var colums = 16;
var $row = $("<div />", {class: 'row'});
var $square = $("<div />", {class: 'square'});

$(document).ready(function() {
  $('body').append('<div id="wrapper"></div>');
    for (var i = 0; i < colums; i++) {
      $row.append($square.clone());
    };

    for(var i = 0; i <rows; i++) {
      $("#wrapper").append($row.clone());
    };
  console.log("Grid complete")
});
