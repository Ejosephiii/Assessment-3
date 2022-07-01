let btnOne = document.querySelector("#color")

let btnTwo = document.querySelector("#place")

let btnThree = document.querySelector("#ritual")

btnOne.addEventListener("click",() => {
    window.alert("MY FAVORITE COLOR IS BLUE!")
    console.log("Blue")
} )

btnTwo.addEventListener("click",() => {
    window.alert("MY FAVORTIE PLACE IS MY GAMING DESK!")
    console.log("Gaming desk")
} )

btnThree.addEventListener("click",() => {
    window.alert("MY RITUAL IS COFFEE, NICTONE, CODE!")
    console.log("Ritual")
} )
