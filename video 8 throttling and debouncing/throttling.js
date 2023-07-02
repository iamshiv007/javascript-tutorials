console.log("Hello Hello Mic testing")

let time = false

const paymentBtn = document.getElementsByClassName("paymentBtn")[0]

paymentBtn.addEventListener("click", paymentFun)

function paymentFun() {

    if (time) return
    time = true
    console.log("Payment Successfull")

    setTimeout(() => {
        time = false
    }, 3000);
}