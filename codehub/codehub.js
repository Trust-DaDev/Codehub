const main1 = document.getElementById("main1");
const main2 = document.getElementById("main2");
const main3 = document.getElementById("main3");
// main1 event listener
main1.addEventListener("click", () => {
    main1.style.color = "orange";
    window.location.href = "html-introduction.html";
})
//main2 event listener
main2.addEventListener("click", () => {
    main2.style.color = "orange";
    window.location.href = "css-introduction.css";
})
//main3 event listener
main3.addEventListener("click", () => {
    main3.style.color = "orange";
    window.location.href = "js-introduction.js";
})