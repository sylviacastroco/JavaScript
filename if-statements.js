function slufigy(sentence, lowercase) {
  if (lowercase) {
    return sentence.replace(/\s/g, '-').toLowerCase();
  } else {
    return sentence.replace(/\s/g, '-');
  }
}
