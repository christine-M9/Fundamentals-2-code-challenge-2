// funtion input bills returning tips
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

console.log(calcTip(555)); 
// array bills with test data
const bills = [125, 555, 44];
// array called tips containing tip value
let tip1 = calcTip(bills[0]);
let tip2 = calcTip(bills[1]);
let tip3 = calcTip(bills[2]);

