var buttonPercent = document.querySelectorAll(".btn");

var custom = document.querySelector(".btn-custom").value;
var btn = document.querySelector('.btn-reset');

btn.addEventListener("click", () => {
    var x = document.querySelector('.total-zero').innerHTML = "0.00";
    var z = document.querySelector('.tip-o').innerHTML = "0.00";

})


document.addEventListener('keydown', function(event) {
    if(event.keyCode === 13){
        
        
        var number_people = document.querySelector(".people-inputs-field");
        var custom = document.querySelector(".btn-custom");
        var bill = document.getElementById("bill-value");
        var amount = parseFloat(custom.value * bill.value)/100;
        var x = document.querySelector(".tip-o");
        x.innerHTML = amount;
       document.addEventListener('keydown', function(event) {
           if(event.keyCode === 13) {
            var custom = document.querySelector(".btn-custom");
            var bill = document.getElementById("bill-value").value;
            var z = document.querySelector(".total-zero");
            var amount = parseFloat(custom.value * bill)/100;
            var x = document.querySelector(".tip-o");
            var number_people = document.querySelector(".people-inputs-field").value;
            var divide1 = amount / number_people;
            x.innerHTML = divide1.toFixed(2);
            tipValue = parseFloat(divide1 * bill);
            z.innerHTML = tipValue.toFixed(1); 
           }
       })
        
    }
})

buttonPercent.forEach((btn) => {
    btn.addEventListener('click', clickEvent)
});
function clickEvent(event) {
    buttonPercent.forEach((btn) => {
        if(event.target.value == btn.value){
            var number_people = document.querySelector(".people-inputs-field").value;
            var bill = document.getElementById("bill-value").value;
            var z = document.querySelector(".total-zero");
            var x = document.querySelector(".tip-o");
            var totals = ((parseFloat(btn.value) * bill)/100);
            x.innerHTML = totals;
            console.log(x.innerHTML = totals);
            console.log(parseFloat( totals / number_people))
                if(number_people == 0){
                    var error = document.querySelector('.error');
                    error.style.display = "inline-block";
                  }
                  document.addEventListener('keydown', function(event) {
                    if(event.keyCode === 13) {
                        error.style.display = "none";
                        var number_people = document.querySelector(".people-inputs-field");
                        var bill = document.getElementById("bill-value").value;
                        var x = document.querySelector(".tip-o");
                        var z = document.querySelector(".total-zero");
                        var totals = ((parseFloat(btn.value) * bill)/100);
                        var divide = parseFloat(totals / number_people.value);
                        x.innerHTML = divide.toFixed(2);
                        tipValue = parseFloat(divide * bill);
                        z.innerHTML = tipValue.toFixed(1);
               
                }
            })
           
        }
      
    })
}
// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 13){
//         var number_people = document.querySelector(".people-inputs-field").value;
//         number_people = 1;

//     }
// })
