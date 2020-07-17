// feetTOMile


// a function to calculate mile from feet
function feetToMile(feet)
{

    if(feet==undefined && feet==null && feet<0){
        return "please enter valid feet number to convert in mile"
    }
    const mile=feet/5280;
    return mile;
}

const result=feetToMile("200000")
console.log(result);


// woodCalculator

// a function to calculate ttal number of woods needed
function woodCalculator(chair,table,bed)
{

    if((chair==undefined && chair==null) || 
    (table==undefined && table==null) || 
    (bed==undefined && bed==null) ){
        return "please enter valid number of chair, table and bed"
    }

    let woodNeededForChair=chair*1;
    let woodNeededForTable=table*3;
    let woodNeededForBed=bed*5;

    const totalWoodNeeded=woodNeededForBed+woodNeededForChair+woodNeededForTable;

    return totalWoodNeeded;

}

console.log(woodCalculator(1,2,3));



// brickCalculator

// this function will calculate number of bricks needed


function brickCalculator(numberOfFloors){

    

    const bricksPerSquare=1000;
    let totalBricksNeeded=0;

    if(numberOfFloors!=undefined && numberOfFloors!=null && numberOfFloors>=0)
    {
    


    for (let i = 1; i <= numberOfFloors; i++) {
        if(i<=10){
            totalBricksNeeded=totalBricksNeeded+15*bricksPerSquare;
        }
        else if(i>10 && i<=20){
            totalBricksNeeded=totalBricksNeeded+12*bricksPerSquare;

        }

        else
        {
            totalBricksNeeded=totalBricksNeeded+10*bricksPerSquare;


        }
        }
    }
    else
    return "Please provide a valid floor number";


    return totalBricksNeeded;

}

let totalBricksNeeded=brickCalculator(4);
console.log(`${totalBricksNeeded}`);


// tinyFriend

// a function that will find a friend in a array where friend name's length is the lowest

function tinyFriend(){

    const friendsArray=["Arnob","Aryan","Saabir","Kuntal","Kunal","Nita"];

    let tinyFriend=friendsArray[0];

    for (let i = 0; i < friendsArray.length; i++) {
        let tinyFriendNameLength=tinyFriend.length;
        let friend = friendsArray[i];
        let friendNameLength = friendsArray[i].length;
        if(friendNameLength<tinyFriendNameLength)
            tinyFriend=friend;
        
        
    }

    return tinyFriend;

}

let tinyFriendName=tinyFriend();

console.log(tinyFriendName);