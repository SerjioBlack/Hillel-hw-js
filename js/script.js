'use strict';

function analyzeText(text) {
  const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

  const words = cleanedText.split(/\s+/);

  const uniqueWordsSet = new Set(words);

  const uniqueWordsArray = Array.from(uniqueWordsSet);

  return {
    uniqueWordsCount: uniqueWordsArray.length,
    uniqueWords: uniqueWordsArray
  };
}

const text = "Це - рядок тексту. Рядок має унікальні слова: привіт, Привіт, світ, світ.";
const result = analyzeText(text);
console.log(result.uniqueWordsCount);
console.log(result.uniqueWords);