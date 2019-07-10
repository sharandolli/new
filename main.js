let buyitems = () =>{
    console.clear();
    let mobileprice = 10000,bill1=0,bill2=0,billamt=0;
    let accessories = 2000;
    let tax = 0.18,count=0;
    let totalmobprice = (tax * mobileprice) + mobileprice;
    let totalaccessprice = (tax * accessories) + accessories;

    let balance = document.getElementById("bal").value;

    if(balance=="" || balance.match(/[!@#$%^&*]/))
    {
        console.log("Enter valid bank balance");
    }
    let totalitems = totalaccessprice+totalmobprice;
if(totalitems <= balance)
 {
    while(totalitems <= balance)
    {
        balance = balance - totalmobprice;
        bill1 += totalmobprice;
        balance = balance - totalaccessprice;
        count++;
        bill2 += totalaccessprice;    
 
    } billamt = bill1+bill2;

    console.log("You can buy "+count +" Mobiles From your bank balance");
    console.log("You can buy "+count +" Accessories From your bank balance");
    console.log(`Total bill amount: \u20B9 ${billamt}`);
    console.log(`Your remaining balance is: \u20B9 ${balance.toFixed(2)}`);

  }else if(totalitems > balance && balance !="") console.log("You should have minimum balance of ₹14160 to buy items.");

}  
