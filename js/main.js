// Enter your code below.
// Enter your code below.
const javascriptResources = document.querySelector(".javascript-resources");
const showResourcesBtn = document.querySelector("#show-resources");
showResourcesBtn.addEventListener('click', () => {
    javascriptResources.classList.remove("d-none");

});

const listOfItems = document.querySelectorAll(".javascript-resources div");
listOfItems.forEach(item => {
    item.addEventListener("mouseover", (event) => {
        event.target.classList.add("fw-bold")
    });

    item.addEventListener("mouseout", (event) => {
        event.target.classList.remove("fw-bold")
    })
})

listOfItems.forEach(item => {
    item.addEventListener("click", (event) => {
        event.target.classList.add("fst-italic")
    });
})

