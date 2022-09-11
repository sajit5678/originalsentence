const http = require('http');
var _ = require('underscore');


function processSelection(str) {
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


var server = http.createServer(function(request, response) {
	if (request.method == 'POST') {
			var body = '';
			request.on('data', function (data) {
				body += data;
			});
			request.on('end', function () {
				try {
					var post = JSON.parse(body);
					// deal_with_post_data(request,post);
					let str = post["text"];
					let paragraphArray = processSelection(str)
					console.log(paragraphArray);
					response.setHeader('Content-Type', 'application/json');
					response.end(JSON.stringify({ sentences: paragraphArray}));



					/* console.log(post["text"]); // <--- here I just output the parsed JSON */
					/* response.writeHead(200, {"Content-Type": "text/plain"}); */
					/* response.setHeader('Content-Type', 'application/json'); */
					/* response.json({"foo": "bar"}); */
					/* response.end(JSON.stringify({ sentences: paragraphArray })); */
					/* return; */
				}catch (err){
				  response.writeHead(500, {"Content-Type": "text/plain"});
				  response.write("Bad Post Data.  Is your data a proper JSON?\n");
				  response.end();
				  return;
				}
			});
		}
		
	else{
		let str = "Sajit is sa food boy in the hut. They are the one on the best par. Once they come i am done";
		let paragraphArray = processSelection(str)
		console.log(paragraphArray);
	   response.end('Hello World\n');
	}
	}
	



);
server.listen(3000);
console.log("server started")