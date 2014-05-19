
describe('isLeapYear', function () {
  it("checks to see year is a leap year", function () {
    isLeapYear(2016).should.be.true
  })
  it("checks to see year is a leap year", function () {
    isLeapYear(2015).should.be.false
  })
  it("checks to see year is a leap year", function () {
    isLeapYear(1900).should.be.false
  })
  it("checks to see year is a leap year", function () {
    isLeapYear(2000).should.be.true
  })
})