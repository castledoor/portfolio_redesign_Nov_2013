var ones = [

  " ",
  "one", 
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
]

var tens = [
   " ",
   " ",
   "twenty", 
   "thirty",
   "forty",
   "fifty",
   "sixty",
   "seventy",
   "eighty",
   "ninety",
]

var teens = [

  "ten",
   "eleven",
   "twelve",
   "thirteen",
   "fourteen",
   "fifteen",
   "sixteen",
   "seventeen",
   "eighteen",
   "nineteen", 
]

// function convert_trillions(num) {
//   if (num >= 1000000000000) {
//     return convert_trillions(Math.floor(num/1000000000000)) + " trillion " + 
//   }
// }
 

function convertTens (number) {
  if (number < 10) {
    return ones[number];
  } else if  (number >=10 && number < 20) {
    return teens[number - 10]; 
  } else { 
    return  tens[Math.floor(number/10)] + " " + ones[number % 10];
 }
}

function convertHundreds (number) {
  if (number > 99) {
    return ones[Math.floor(number/100)] + " <strong>hundred</strong> " + convertTens(number%100); 
  } else { 
    return convertTens(number);
  }
}

function convertThousands (number) {
  if (number >= 1000) {
    return convertHundreds(Math.floor(number/1000)) + " <strong>thousand</strong> " + convertHundreds(number%1000);
  } else {
    return convertHundreds(number);
  }  
}

function convertMillions (number) {
  if (number >= 1000000) {
    return convertMillions(Math.floor(number/1000000)) + " <strong>million</strong> " + convertThousands(number % 1000000);
  } else {
    return convertThousands(number);
  }
}

function convertBillions(number) {
  if (number >= 1000000000) {
    return convertBillions(Math.floor(number/1000000000)) + " <strong>billion</strong> " + convertMillions (number % 1000000000);
  } else {
    return convertMillions(number);
  }
}

function convertTrillions(number) {
  if (number >= 1000000000000) {
    return convertTrillions(Math.floor(number/1000000000000)) + " <strong>trillion</strong> " + convertBillions (number % 1000000000000);
  } else {
    return convertBillions(number);
  }  
}

function convert(number) {
  if (number === 0)
    return "zero";
  else 
    return convertTrillions(number);
}

// function invalid(number) {
//   if (number < 0) {
//     return "Please enter a  positive number"
//   } else if { (number >= 1000000000000000000)
//     return "I can't count that high!!"
//   } else { (number = !isNumeric(number))
//     return "Please enter numbers only!"
//   }
// } 
// $(function() {
//   $("form#numberWords").submit(function() {
//     if($('input#number').val() === '') {
//       return invalid(numbers)
//     }
//     var numbers = $("input#number").val();
//     $("input#number").val();
//     var finalNumbers = convert(numbers);
//     $("#result").empty().append(finalNumbers);
//     $("input#numbers").val("")
//     return false
//   });

// });

$(function()  {

var number;




  $("form#numberWords").submit(function() {
    var inputNumber = $("input#number").val();
    $("#result").show();
    $("#usernumber").empty().append(inputNumber);
    convert($("input#number").val());
    var answer = convert($("input#number").val());
    $('#answer').empty().append(answer);

    $("input#number").val("");

    return false;
  });

});
  
