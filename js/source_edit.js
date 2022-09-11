
/* import _, { map } from 'underscore'; */
import { map, reduce, somethingElse } from 'underscore'
const _ = require('./underscore');

function wish(name) {
    console.log("Hello, "+name+"!")
}

function processSelection(str) {
    //let str = document.getElementById("inputBox").value;
    let paragraphArray = str.split("\n");
    paragraphArray = _.without(paragraphArray, "");
    console.log(paragraphArray);
    let re = /\b(\w\.\w\.)|([.?!])\s+(?=[A-Za-z])/g;

    let i;
    let endHTML = "";
    let endCSV = "";
    let count = 0;
	let allSentences2 = [];
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
			allSentences2.push(allSentences[k]);
        }
        endHTML += "<hr>";
        endCSV += " ,";
    }
	return allSentences2
}


