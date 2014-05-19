function factor(number) {
  var result = 1;
  for (var i = number; i > 0; i--) {
    result = (i)*result;
  }
  return result;
}

$(function() {
  $("form#factor").submit(function() {
    var number = $("input#integer").val()

    if (!$.isNumeric(number) || number < 0 || number % 1 > 0) {   
      $("#result").hide();
      alert("That is not an integer");
    } else {
      $("#usernumber").empty().append(number)
      $("#answer").empty().append(factor(number));
      $("#result").show();
    }
    $("#integer").val('');
    return false;
  });
});