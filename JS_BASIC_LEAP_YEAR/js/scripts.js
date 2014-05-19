
function isLeapYear(year) {

	if (year % 100 === 0 && year % 400 === 0) {
	  return true
  } else if (year % 4 === 0 && year % 100 === 0) {
  	return false
	} else if (year % 4 === 0 ) {
	  return true
	} else if (year % 100 === 0) {
	  return false
	} else {
		return false
	}
}


$(function() {
	$("form#leapYear").submit(function() {
  	var inputYear = $('input#year').val();
    $("#answer").show();
    var response = isLeapYear(inputYear);
    if (response === false) {
    	$("#answer").empty().append("NO");
    } else {
    	$("#answer").empty().append("YES");
    }
    $('input#year').val("");
    return false;
  }); 
});







