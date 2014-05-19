describe('convertTens', function() {
  it("returns the words value for all numerical inputs equal to or less than 99", function() {
  convertTens(56).should.equal("fifty six");
  });
});  

describe("convertHundreds", function() {
  it("returns the word value for all numerical inputs equal to or less than 999", function() {
  	convertHundreds(234).should.equal("two hundred thirty four");
  });
}); 

describe("convertThousands", function() {
  it("returns the word value for all numerical inputs equal to or less than 9999", function(){
  	convertThousands(4567).should.equal("four thousand five hundred sixty seven");
  });
    it("returns the word value for all numerical inputs equal to or less than 9999", function(){
  	convertThousands(345670).should.equal("three hundred forty five thousand six hundred seventy  ");
  });
});

describe("convertMillions", function() {
	it("returns the word value for all numberical inputs equal to or less than 999,999,999", function() {
		convertMillions(345678953).should.equal("three hundred forty five million six hundred seventy eight thousand nine hundred fifty three");
	});
});

describe("convertBillions", function() {
	it("returns the word value for all numberical inputs equal to or less than 999,999,999,999", function() {
		convertBillions(398745678953).should.equal("three hundred ninety eight billion seven hundred forty five million six hundred seventy eight thousand nine hundred fifty three");
	});
});

describe("convertTrillions", function() {
	it("returns the word value for all numberical inputs equal to or less than 999,999,999,999,999", function() {
		convertTrillions(999398745678953).should.equal("nine hundred ninety nine trillion three hundred ninety eight billion seven hundred forty five million six hundred seventy eight thousand nine hundred fifty three");
	});
});

describe('invalid', function() {
  it("does not allow non intergers and negative numbers to be input", function() {
  invalid(1000000000000000000).should.equal("I can't count that high!!");
  });
});  
