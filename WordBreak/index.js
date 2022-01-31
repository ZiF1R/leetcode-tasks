/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  let table = Array(s.length + 1).fill(false);
  table[0] = true;
  
  for (let i = 0; i < s.length + 1; i++) {
      if (table[i]) {
          for (let word of wordDict) {
              if (s.slice(i, i + word.length) === word) {
                table[i + word.length] = true;
              }
          }
      }
  }
  
  return table[s.length];
};