'use strict';

function thousands_separators(num) {

    var splitedNum = num.toString().split('.');

    var countedIntegerPart = bulidIntegerPArt(splitedNum);
    var allSplitedNum = buildSplitedNum(splitedNum, countedIntegerPart);

    return allSplitedNum;

}
function bulidIntegerPArt(splitedNum) {

    var splitedIntegerPart = splitedNum[0].split('');

    var i = 0;
    var j = 0;

    var integerArray = [];
    for (var k = splitedIntegerPart.length - 1; k >= 0; k--) {
        if (i % 3 === 0 && i != 0) {
            integerArray[j] = ',';
            j++;
        }
        i++;
        integerArray[j] = splitedIntegerPart[k];
        j++;
    }

    var n = 0;
    var countedIntegerNum = [];
    for (var m = integerArray.length - 1; m >= 0; m--) {
        countedIntegerNum[n] = integerArray[m];
        n++;
    }

    return countedIntegerNum;
}

function buildSplitedNum(splitedNum, numbersArray) {

    var resultNum = '';

    for (var i = 0; i < numbersArray.length; i++) {
        resultNum += numbersArray[i];
    }
    if (splitedNum.length != 1) {
        resultNum += '.' + splitedNum[1];
    }

    return resultNum;
}


module.exports = thousands_separators;
