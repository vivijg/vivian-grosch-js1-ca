
const replaceWord = document.querySelector(".content");

function updateAbout() {

    const changeDoc = replaceWord.innerHTML.replace(/the/g, "replaced").replace(/The/g, "Replaced");
    
  
    replaceWord.innerHTML = changeDoc;
    console.dir(changeDoc) 
}

setTimeout(updateAbout, 4000);