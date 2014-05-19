function isValidTriangle(side1, side2, side3) {

  var longestSide = Math.max(side1, side2, side3);
  var remainingSides = side1 + side2 + side3 - longestSide;
  return longestSide <= remainingSides;
}

function triangleType (side1,side2,side3){
  if (isValidTriangle) {

    if (side1 === side2 && side1 === side3){
      return "equilateral";
    }
    else if (side1 === side2 || side2 === side3 || side3 === side1){
      return "isoscelese";
    }
    else {
      return "scalene";
    }
  }
}
$(function()  {
  $("form#sideInput").submit(function() {

    var num1 = $("input#sideOne").val();
    var num2 = $("input#sideTwo").val();
    var num3 = $("input#sideThree").val();
    if(!$.isNumeric($('input#sideOne' && 'input#sideTwo' && 'input#sideThree').val())) {
      alert("What kinda triangle is that?");
      return false;
    } 
    var answer = triangleType(num1,num2,num3);
    $(".correctAnswer").empty().append(answer); 
    $(".hiding").show();
    return false;
  })
})