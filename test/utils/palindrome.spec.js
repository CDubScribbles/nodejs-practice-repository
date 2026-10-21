/**
 * Author: Clifford Smith
 * Date: 10/20/2026
 * File: palindrome.spec.js
 * Description: This script tests the isPalindrome function.
 */
'use strict';

const { isPalindrome } = require('../../src/utils/palindrome'); // Import the isPalindrome function from the palindrome.js file

// The describe() function is a test suite that contains one or more tests
describe('palindrome.js', () => {

  // The it() function is a test spec that contains one or more expectations
  it('should return true for a palindrome, ignoring case, spaces, and punctuation', () => {
    expect(isPalindrome('racecar')).toBe(true); // A simple palindrome
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true); // A phrase that is a palindrome once cleaned
  });

  // The it() function is a test spec that contains one or more expectations
  it('should return false when the string is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false); // The reverse of hello is olleh, so the result is false
  });

  // The it() function is a test spec that contains one or more expectations
  it('should throw an error when the input is not a string', () => {
    // Call the isPalindrome function with a number and expect it to throw an error
    expect(() => isPalindrome(12321)).toThrow('Input must be a string');
  });
});
