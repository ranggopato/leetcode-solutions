var lengthOfLongestSubstring = function (s) {
  const re = /\w/g;
  let word = s.match(re);
  let dif = [];
  let text = [];

  for (i = 0; i < word.length; i++) {
    if (!dif.includes(word[i])) {
      dif.push(word[i]);
    } else {
      text.push(dif);
      dif = [];
      dif.push(word[i]);
    }
  }
  console.log(text);
};

lengthOfLongestSubstring("pwwkew");
