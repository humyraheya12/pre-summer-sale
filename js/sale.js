const cards = document.querySelectorAll(".card");
console.log(cards);
for (let index = 0; index < cards.length; index++) { // Removed semicolon and fixed loop condition
  const card = cards[index];
  // console.log(card);
  card.addEventListener("click", function () {
    // console.log("clicked");
    const title = card.querySelector("h2");
    console.log(title.innerText);
    const price = card.querySelector("p");
    console.log(price.innerText);

  });
}
