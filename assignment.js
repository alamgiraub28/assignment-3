
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
    if(storieds <=10 ){
        var feetCount= storieds * 15;
        var totalBricks =feetCount * 1000;
        return totalBricks;
    }
    else if(storieds > 10 && storieds <= 20){
        var feetCount=storieds * 12;
        var totalBricks=feetCount * 1000;
        return totalBricks;
    }
    else if(storieds >20){
        var feetCount=storieds * 10;
        var totalBricks=feetCount * 1000;
        return totalBricks;
    }
    else {
        console.log("Invalid Input");
    }
    return totalBricks;
}

var totalBricks = brickCalculator(19);
console.log(totalBricks);

//tinyFriend
function tinyFriend(name){
var smallestName = name[0];
for(var i =0; i < name.length; i++){
    var currentName = name[i];
    if (smallestName.length > currentName.length){
        smallestName = currentName;
        }
    }
    return smallestName;
}

var smallestName = tinyFriend(['alamgir', 'bilkisGP', 'tanny', 'hossainin']);
console.log(smallestName);
