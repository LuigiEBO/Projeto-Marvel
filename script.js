let buttonOpen = document.querySelector(".buttonOpen");
let navigation = document.querySelector(".navigation");
let buttonClose = document.querySelector(".close");
buttonOpen.addEventListener("click", () => {
  navigation.classList.add("open")
});
buttonClose.addEventListener("click", () => {
  navigation.classList.remove("open")
})