
function isLetterVowel(letter)  { 
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {

    return true; 
    } else { 
      return false;
    } 
}

function pigTranslateWord(englishWord) {
  
  var firstLetter = englishWord.charAt(0);
  var secondLetter = englishWord.charAt(1);


    if (englishWord.charAt(0) === 'q' && englishWord.charAt(1) === 'u') {
      return englishWord.slice(2) + englishWord.charAt(0) + englishWord.charAt(1) + 'ay';
    } else if (isLetterVowel(firstLetter) === false && isLetterVowel(secondLetter) === false) {
    return englishWord.slice(2) + englishWord.charAt(0) + englishWord.charAt(1) + 'ay';

    } else if (isLetterVowel(firstLetter)) {

    return englishWord + 'ay'; 
    } else { 
      return englishWord.slice(1) + englishWord.charAt(0) + 'ay';
    }
   
}

function splitString(string) {
  return string.split(" ");
}

function pigTranslate(phrase) {
  var words = splitString(phrase);
  var translatedArray = [];
  words.forEach(function(loopWords){
    var translateWords = pigTranslateWord(loopWords);  
    translatedArray.push(translateWords);    
  });
  var pigLatin = translatedArray.join(" ");
  return pigLatin;
}


$(function()  {
  $("form#englishToLatin").submit(function() {
  if ($('input#englishToLatinForm').val() === '') {
      alert("Nice try!!");
      return false;
     }
    var englishText = $("input#englishToLatinForm").val();
    var finalTranslation = pigTranslate(englishText);
    $('.translation').empty().append(finalTranslation);
    return false;
  });
});







 