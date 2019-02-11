const fs = require('fs');

function dayOnePartOne() {

    fs.readFile('./input.txt', (err,data) => {
        if (err){
            console.log("You have an error! Sorry.")
        }
        const freqChanges = data.toString();
        const changesArray = freqChanges.split('\n');
        let newFreq = 0;
        for(let i = 0; i < changesArray.length; i++){
            let plusMinus = changesArray[i].substr(0,1);
            let change = Number(changesArray[i].substr(1));
            if (plusMinus === "+"){
                newFreq = newFreq + change;
            } else {
                newFreq = newFreq - change;
            }
        }
        console.log("The new frequency is:",newFreq);
    })
}

function dayOnePartTwo(){
    fs.readFile('./input.txt', (err,data) => {
        if (err){
            console.log("You have an error! Sorry.");
        }
        const freqChanges = data.toString();
        const changesArray = freqChanges.split('\n');
        let freqList = [0];
        let newFreq = 0;
        let duplicateValue = [];
        let isMatch = false;
        while (isMatch == false){
            for(let i = 0; i < changesArray.length; i++){
                let plusMinus = changesArray[i].substr(0,1);
                let change = Number(changesArray[i].substr(1));
                if (plusMinus === "+"){
                    newFreq = newFreq + change;
                    freqList.push(newFreq);
                } else {
                    newFreq = newFreq - change;
                    freqList.push(newFreq);
                }
            }
            for (let a = 0; a < freqList.length; a++){
                for (let b = a+1; b < freqList.length; b++){
                    //console.log(freqList[a],freqList[b]);
                    if (freqList[a] === freqList[b]){
                        console.log("Hello World");
                        console.log(freqList[a]);
                        duplicateValue.push(freqlist[a]);
                        console.log(duplicateValue);
                        isMatch = true;
                        break;
                    }
                }
                //break;
                if (isMatch) {break;}
            }
        }
        //console.log(freqList);
        console.log("The first frequency I come to more than once is:",duplicateValue);
    })
}

//dayOnePartOne();
dayOnePartTwo();