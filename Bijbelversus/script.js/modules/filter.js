const chapterFilter = document.getElementById("chapter");
const verseFilter = document.getElementById("verse");




const filterBibleQuotes = () => {
  
    const selectedChapter  =  chapterFilter. value;
    const selectedVerse    =  verseFilter.value;
  
    const filteredQuotes = bibleQuotes.filter((quote) => {
      return quote.chapter === selectedChapter && quote.verse === selectedVerse;
    });
    currentIndex = 0 ;
    displayBibleQuote(filteredQuotes[currentIndex]);
  };
  
  chapterFilter.addEventListener("change", filterBibleQuotes);
  verseFilter.addEventListener("change", filterBibleQuotes);

  
  