/*
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. 

Test Cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'
*/

const toEmoticon = emoticon => {
  switch (emoticon) {
    case 'shrug':
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
};

console.log(toEmoticon('whatever'));
// Should print  '|_(* ~ *)_|'

console.log(toEmoticon('shrug'));
// Should print |_{"}_|
