const numberHours = document.querySelectorAll(".number-hours")

const numberElement = []

for(let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    )
    // console.log(numberElement);
}

numberHours.forEach((element) => {
    element.insertAdjacentHTML("afterbegin", numberElement.join(""));
});

console.log(numberElement);