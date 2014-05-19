describe('isLetterVowel', function() {
  it('returns true if letter is a vowel', function() {
    isLetterVowel('h').should.equal(false);
  });
});

describe('pigTranslateWord', function() {
  it('takes any word that starts with a vowel ay at the end', function() {
    pigTranslateWord('apple').should.equal('appleay');
  });
  it('takes any word that starts with a consonant and moves first letter to the end and adds "ay"', function() {
    pigTranslateWord('happy').should.equal('appyhay');
  });
  it('takes any word starting with multiple consonants and moves the first 2 letters to the end and adds "ay"', function() {
    pigTranslateWord('break').should.equal('eakbray');
  });
  it('takes a word that starts with qu and moves the first 2 letter to the end and add "ay"',function() {
   pigTranslateWord('queen').should.equal('eenquay');
 });
});

describe('splitString', function() {
  it('seperates sentences into individual words', function() {
    splitString('we love eating quietly').should.eql(["we", "love", "eating", "quietly"]);
  });
});


describe('pigTranslate', function() {
  it('translates english sentences and individual words into pig latin array', function() {
    pigTranslate('we love eating quietly').should.equal('eway ovelay eatingay ietlyquay');
  });
});

