describe('isValidTriangle', function () {
   it("checks to see if one side of a triangle is greater than or equal to the other two side of that triangle", function() {
      isValidTriangle(2,2,8).should.be.false;
   });

   it("checks to see if one side of a triangle is not greater than or equal to the other two side of that triangle", function() {
      isValidTriangle(3,4,5).should.be.true;
   });
});

describe('triangleType',function (){
  it("checks the triangle type", function() {
    triangleType(2,2,2).should.equal("equilateral");
  });
  it("checks the triangle type", function() {
    triangleType(4,4,8).should.equal("isoscelese");
  });
  it("checks the triangle type", function() {
    triangleType(3,4,5).should.equal("scalene");
  });
});  



//*describe('isEquilateral', function () {
  //it("true if all sides are equal", function() {
  //   isEquilateral(6,6,6).should.be.true;
 // });

 // it("is false if all sides are different", function() {
 //    isEquilateral(3,4,5).should.be.false;
 // });
//});

//describe ('isoscelese', function(){
 // it ("it checks to see if two sides are equal", function() {
 //   isoscelese(4,4,8).should.be.true;
 // });
//});

//describe ('scalene', function(){ 
 // it ("it checks to see if two sides are not equal", function() {
 //   scalene(4,4,8).should.be.false;
 // });
//});

