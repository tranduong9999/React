function hasUniqueChars(word: string): boolean {
    const seen = new Set();
    for (const char of word) {
      if (seen.has(char)) return false;
      seen.add(char);
    }
    return true;
  }
  
  function findLongestUniqueWord(sentence: string): string {
    const words = sentence.split(" ");
    let longest = "";
  
    for (const word of words) {
      if (hasUniqueChars(word) && word.length > longest.length) {
        longest = word;
      }
    }
  
    return longest;
  }
  
  // Test
  const input = "hello world apple banana orange pumpkin cucumber";
  const output = findLongestUniqueWord(input);
  console.log("Từ dài nhất không có ký tự trùng:", output);
  