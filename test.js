var obfuscate = require('./obfuscate.js')
var assert = require('assert');

function testBool(input, expected) {
  var obj = {test:input};
  var obfj = obfuscate(obj);
  assert.equal(expected, obfj.test);
}

describe('Test', function() {
  /*
  describe('#bool()', function() {
    it('true', function() {
      testBool(true, false);
    });
    it('false', function() {
      testBool(false, true);
    });
  });

  function testNumber(input) {
    var obj = {test:input};
    var digits = obj.test.toString().length;
    var obfj = obfuscate(obj);
    var obfdigits = obfj.test.toString().length;
    assert.equal(digits, obfdigits);
    assert.notEqual(input, obfj.test);
  }

  describe('#number()', function() {
    it('one', function() {
      testNumber(1);
    });
    it('two', function() {
      testNumber(12);
    });
    it('ten', function() {
      testNumber(1234567890);
    });
    it('twenty', function() {
      testNumber(12345678901234567890);
    });
  });

  function testString(input) {
    var obj = {test:input};
    var digits = obj.test.length;
    var obfj = obfuscate(obj);
    var obfdigits = obfj.test.length;
    assert.equal(digits, obfdigits);
    assert.notEqual(input, obfj.test);
  }

  describe('#string()', function() {
    it('one', function() {
      testString('a');
    });
    it('two', function() {
      testString('ab');
    });
    it('ten', function() {
      testString('abcdefghij');
    });
    it('twenty', function() {
      testString('abcdefghijabcdefghij');
    });
    it('ONE', function() {
      testString('A');
    });
    it('TWO', function() {
      testString('AB');
    });
    it('TEN', function() {
      testString('ABCDEFGHIJ');
    });
    it('TWENTY', function() {
      testString('ABCDEFGHIJABCDEFGHIJ');
    });
    it('TwO', function() {
      testString('Ab');
    });
    it('TeN', function() {
      testString('AbCdEfGhIj');
    });
    it('TwEnTy', function() {
      testString('AbCdEfGhIjAbCdEfGhIj');
    });
    it('1', function() {
      testString('1');
    });
    it('2', function() {
      testString('12');
    });
    it('10', function() {
      testString('1234567890');
    });
    it('20', function() {
      testString('12345678901234567890');
    });
    it('TwEnTy20', function() {
      testString('Ab1dEf2hIjA3344Gh0Ij');
    });
    it('TwEnTy20Symbol', function() {
      testString('Ab1-DEf+2hI=jA3_344 Gh0$Ij^');
    });
    it('Name', function() {
      testString('John Smith');
    });
    it('Phone', function() {
      testString('1-800-867-5309');
    });
    it('SSN', function() {
      testString('123-45-6789');
    });
  });

  describe('#Multiples', function() {
    it('Multiple', function() {
      var obj = {testBool:true, testNumber: 123456, testString: 'Smith'};
      var obfj = obfuscate(obj);
      var digitstestString = obj.testString.length;
      assert.equal(false, obfj.testBool);
      var digitstestNumber = obj.testNumber.toString().length;
      var obfdigitstestNumber = obfj.testNumber.toString().length;
      assert.equal(digitstestNumber, obfdigitstestNumber);
      assert.notEqual(123456, obfj.testNumber);
      var obfdigitstestString = obfj.testString.length;
      assert.equal(digitstestString, obfdigitstestString);
      assert.notEqual('Smith', obfj.testString);
    });
  });
  */
  describe('#Objects', function() {
    it('Object', function() {
      var obj = {testBool:{testbool:true}};
      var obfj = obfuscate(obj);
      assert.equal(false, obfj.testBool.testbool);
    });
    it('RecurseObject', function() {
      var obj = {testBool:{testbool:true}};
      obj.testBool.testRecurse = obj;
      console.log('obj');
      console.log(obj);
      var obfj = obfuscate(obj);
      console.log('obfj');
      console.log(obfj);
      assert.equal(false, obfj.testBool.testbool);
    });
  });
});
