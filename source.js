const firebaseConfig = {
    apiKey: "AIzaSyAVgOjxn4Na0LQcW4jDqpgxzATlw_h--2U",
    authDomain: "paragraphsplice.firebaseapp.com",
    projectId: "paragraphsplice",
    storageBucket: "paragraphsplice.appspot.com",
    messagingSenderId: "857108829918",
    appId: "1:857108829918:web:a3f12539ff986ee11ad44f",
    measurementId: "G-QXYNYLBK9L"
};

function pagePrepare() {
    document.getElementById("mainBox").style.display = "block";
    document.getElementById("postBox").style.display = "none";
    document.getElementById("inputBox").value = '';
}
/*

function upgradedProcessSelection(){
    let str = document.getElementById("inputBox").value;
    let paragraphArray = str.split("\n");

    let count = paragraphArray.length;
    paragraphArray = _.without(paragraphArray, "");

    import winkNLP from 'wink-nlp';
    import its from 'wink-nlp/src/its.js';

    //const winkNLP = require( 'wink-nlp' );
    // Load "its" helper to extract item properties.
    //const its = require( 'wink-nlp/src/its.js' );
    // Load english language model — light version.
    const model = require( 'wink-eng-lite-model' );
    // Instantiate winkNLP.
    const nlp = winkNLP( model );
    let colorIterator = 0;
    let endHTML = "";
    let endCSV = "";
    for (let i = 0; i < count; i++){
        let paragraph = paragraphArray[i];
        const doc = nlp.readDoc(paragraph)
        const sentences = doc.sentences().out()
        let n = sentences.length;
        for(let j = 0; i < n; j++){
            let currentSentence = sentences[j]
            if (colorIterator % 2 == 0){
                endCSV += currentSentence + ",";
                endHTML += "<p style='color: #037188'>" + currentSentence + "</p>"
                count++;
            } else {
                endCSV += currentSentence + ",";
                endHTML += "<p style= 'color: #988900' >" + currentSentence + "</p>"
                count++;
            }
        }
        endHTML += "<hr>";
        endCSV += " ,";
    }
    document.getElementById("result").innerHTML = endHTML;
    hideShow("mainBox");
    hideShow("postBox");
}
*/

function processSelection() {
    let str = document.getElementById("inputBox").value;
    let paragraphArray = str.split("\n");
    paragraphArray = _.without(paragraphArray, "");
    console.log(paragraphArray);
    let re = /\b(\w\.\w\.)|([.?!])\s+(?=[A-Za-z])/g;

    let i;
    let endHTML = "";
    let endCSV = "";
    let count = 0;
    for (i in paragraphArray) {
        let sentences = paragraphArray[i].replace(re, "$1|").split("|");
        sentences = _.without(sentences, "");
        let j;
        let numSentence = 0;
        let allSentences = [];
        for (j in sentences) {
            if (allSentences.length === numSentence) {
                allSentences.push("");
            }
            let current = sentences[j];
            let last6 = current.slice(current.length - 6);
            let last4 = current.slice(current.length - 4);
            let last3 = current.slice(current.length - 3);
            let tripleAb = /[A-Za-z][.][A-Za-z][.][A-Za-z][.]/g;
            let doubleAb = /[A-Za-z][.][A-Za-z][.]/g;
            let shortHand = /[A-Za-z][A-Za-z][.]/g;
            if (tripleAb.test(last6)) {
                console.log(current)
                allSentences[numSentence] += current;
                allSentences[numSentence] += " ";
            } else if (doubleAb.test(last4)) {
                console.log(current);
                allSentences[numSentence] += current;
                allSentences[numSentence] += " ";
            } else if (shortHand.test(last3)) {
                if (last3 === "ex." || last3 === "EX." || last3 === "eg." || last3 === "ie.") {
                    console.log(current)
                    allSentences[numSentence] += current;
                    allSentences[numSentence] += " ";
                } else {
                    console.log(current);
                    allSentences[numSentence] += current;
                    numSentence++;
                }
            } else {
                console.log(current);
                allSentences[numSentence] += current;
                numSentence++;
            }
        }
        let k;
        for (k in allSentences) {
            if (count % 2 === 0) {
                endCSV += allSentences[k] + ",";
                endHTML += "<p style='color: #037188'>" + allSentences[k] + "</p>"
                count++;
            } else {
                endCSV += allSentences[k] + ",";
                endHTML += "<p style= 'color: #988900' >" + allSentences[k] + "</p>"
                count++;
            }
        }
        endHTML += "<hr>";
        endCSV += " ,";
    }
    document.getElementById("result").innerHTML = endHTML;
    hideShow("mainBox");
    hideShow("postBox");
}

function processSelectionDoc() {
    processSelection();
    exportHTML();
}

function exportHTML() {
    let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header + "<div style='font-family: sans-serif'>" + document.getElementById("result").innerHTML + "</div>" + footer;

    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'document.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

function backButton() {
    hideShow("postBox");
    hideShow("mainBox");
}

function hideShow(divName) {
    let x = document.getElementById(divName);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
