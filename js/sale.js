let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
console.log(cards);
for (let index = 0; index < cards.length; index++) { // Removed semicolon and fixed loop condition
  const card = cards[index];
  // console.log(card);
  card.addEventListener("click", function () {
    // console.log("clicked");
    const title = card.querySelector("h2").innerText;
    
    const price = parseFloat(card.querySelector("p").innerText);
    // console.log(title, price);
const titleContainer = document.getElementById("title-container");
const p = document.createElement("p");
p.innerText = titleCount + " . " + title;
titleContainer.appendChild(p);
titleCount++;
// total price
totalPrice +=price;
// console.log(totalPrice);
document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  });
}
const btn = document.getElementById("coupon-btn");
btn.addEventListener("click", function () {
    const couponElement = document.getElementById("coupon-value").value;
    const couponCode = couponElement.split(" ").join(" ").toUpperCase();
    if (totalPrice >= 200) {
        if (couponCode === "SELL200") {
            const discountAmount = totalPrice * 0.2;
            const discountElement = document.getElementById("discount-price"); // Corrected ID
            discountElement.innerText = discountAmount.toFixed(2);
            
            const restTotal = document.getElementById("total");
            restTotal.innerText = (totalPrice - discountAmount).toFixed(2);
        } else {
            alert("Invalid Coupon");
        }
        document.getElementById("coupon-value").value = "";
    } else {
        alert("Please spend at least 200 tk");
    }
});
