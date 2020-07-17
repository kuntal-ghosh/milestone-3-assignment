// feetTOMile

// a function to calculate mile from feet
function feetToMile(feet)
{

    if(feet==undefined && feet==null && isNaN(feet)){
        return "please enter a number"
    }
    const mile=feet/5280;
    return mile;
}

const result=feetToMile("f")
console.log(result);


// woodCalculator
function woodCalculator(chair,table,bed)
{
    let woodNeededForChair=chair*1;
    let woodNeededForTable=table*3;
    let woodNeededForBed=bed*5;

    const totalWoodNeeded=woodNeededForBed+woodNeededForChair+woodNeededForTable;

    return totalWoodNeeded;

}

console.log(woodCalculator(2,3,4));

