var select = document.getElementById("sel");
var placeholder = document.getElementById("phone");
select.addEventListener("change", function(){
	placeholder.placeholder = select.value;
  placeholder.value = select.value;
});
var burger = document.getElementById("i");
var menu = document.getElementById("menu-mobile");
burger.addEventListener("click", function(){
  menu.classList.toggle("shift");
  console.log("xyz")
})
