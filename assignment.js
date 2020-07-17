
//feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result= feetToMile(20000);
console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCubicFeet=chair * 10;
    var tableCubicFeet=table * 20;
    var bedCubicFeet=bed * 30;
    var totalCubicFeet=chairCubicFeet + tableCubicFeet + bedCubicFeet;
    return totalCubicFeet;
}

var woodResult = woodCalculator(20, 5, 10);
console.log(woodResult);

//brickCalculator
function brickCalculator(storieds){
    if(storieds<=10){
        var feetCount=storieds * 15;
        var totalBricks=feetCount * 1000;
        console.log(totalBricks);
    }
    else if(storieds<=20){
        var feetCount=storieds * 12;
        var totalBricks=feetCount * 1000;
        console.log(totalBricks);
    }
    else if(storieds<=50){
        var feetCount=storieds * 10;
        var totalBricks=feetCount * 1000;
        console.log(totalBricks);
    }
    else {
        console.log("Invalid Input");
    }
    return totalBricks;
}

var totalBricks = brickCalculator(22);
console.log(totalBricks);

//tinyFriend
function tinyFriend(name){
var smallestName = name[0];
for(var i =0; i < name.length; i++){
    var currentName = name[i];
    if (currentName > smallestName){
        smallestName = currentName;
        }
    }
    return smallestName;
}

var smallestName = tinyFriend(['alamgir', 'neelaGP', 'tanny', 'hossain']);
console.log(smallestName);