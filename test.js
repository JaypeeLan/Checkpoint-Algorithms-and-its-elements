function analyzeSentence(sentence) {
  if (sentence[sentence.length - 1] !== '.') return;
  var charCount = 0;
  var wordCount = 0;
  var vowelCount = 0;

  var vowels = 'aeiouAEIOU';
  var inWord = false;

  for (var i = 0; i < sentence.length; i++) {
    var ch = sentence[i];
    charCount++;

    if (vowels.indexOf(ch) !== -1) {
      vowelCount++;
    }

    if (ch !== ' ' && !inWord) {
      wordCount++;
      inWord = true;
    } else if (ch === ' ') {
      inWord = false;
    }
  }

  console.log('Length of sentence: ' + charCount);
  console.log('Number of words: ' + wordCount);
  console.log('Number of vowels: ' + vowelCount);
}

console.log(analyzeSentence('Enter a sentence ending with a period'));
