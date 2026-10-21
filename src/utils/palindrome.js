/**
 * Author: Clifford Smith
 * Date: 10/20/2026
 * File: palindrome.js
 * Description: This script checks whether a string is a palindrome
 */
'use strict';

// The isPalindrome function returns true if a string reads the same forward and backward
function isPalindrome(str) {

  // If the argument is not a string, throw an error
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Remove everything except letters and numbers, then convert to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned string
  const reversed = cleaned.split('').reverse().join('');

  // The string is a palindrome if the cleaned string matches its reverse
  return cleaned === reversed;
}

module.exports = { isPalindrome }; // Export the isPalindrome function for use in other scripts
