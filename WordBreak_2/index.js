/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
 var wordBreak = function(s, wordDict) {
  let table = Array(s.length + 1).fill().map(arr => Array());

  table[0].push("");
  for (let i = 0; i < s.length + 1; i++) {
      if (table[i].length > 0) {
          for (let word of wordDict) {
              if (s.slice(i, i + word.length) === word) {
                  let newCombination =
                      table[i].map(combination => `${combination} ${word}`.trim());
                  table[i + word.length].push(...newCombination);
              }
          }
      }
  }

  return table[s.length];
};