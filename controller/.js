function findInterest(no_of_loans){
    let myloans = []
    for(i=1;i<=no_of_loans;i++){
        let principle =prompt(`enter the principleamount ${i}`)
        let interest = prompt(`enter the interestpercentage`)
        let duration = prompt(`enter the duration`)
        myloans.push({"principleamount":principle,"interestpercentage":interest,"duration":duration})
    }
    let totalPrice=0
    for(i=0;i<myloans.length;i++){
        return totalPrice +=(myloans[i].principleamount*myloans[i].interestpercentage*myloans[i].duration)/100
    }
}
console.log(findInterest(2))