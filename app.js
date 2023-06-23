let amount = prompt("Enter your amount")
let notes = [5000,1000,500,100,50,20,10,5,2,1]
let count ;
let lastvalue ;
for ( let i = 0; i <= 9; i++){
    count = Math.floor(amount / notes[i])
    amount = amount % notes[i]
     document.write( notes[i] + " " + " = " + " " + count)
       document.write("<br>")
}