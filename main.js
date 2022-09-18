let bill = document.getElementById('bill');
let peopleCount = document.getElementById('peopleCount');
let errorSpan = document.getElementById('errorspan');
let tips = document.querySelectorAll(".tips .tip");
let tipAmuont = document.querySelector('.outputs .totals .tipAmuont #total');
let total = document.querySelector('.outputs .totals .total #total');
let reset = document.querySelector(".outputs input");

bill.oninput = () => {
  if (bill.value.trim() != "") {
    reset.classList.remove('dark')
    reset.removeAttribute("disabled")
  } else {reset.classList.add('dark');}
}
tips.forEach(tip => {
  tip.addEventListener('click', () => {
    tips.forEach((ele) => ele.classList.remove('active'))
    tip.classList.add("active")
  })
})
reset.addEventListener("click", () => {
  if (bill.value.trim() != "" && peopleCount.value.trim() != "") {
    tips.forEach(tip => {
      tip.tagName === "BUTTON" && tip.classList.contains("active") ?  tipAmuont.innerHTML = (parseFloat((+bill.value.trim() * (+tip.innerHTML.slice(0, tip.innerHTML.length-1)/100))) / +peopleCount.value.trim()).toFixed(2) : '';
      tip.tagName === "BUTTON" && tip.classList.contains("active") ?  total.innerHTML = (parseFloat(+bill.value.trim() + (+bill.value.trim() * (+tip.innerHTML.slice(0, tip.innerHTML.length-1)/100))) / +peopleCount.value.trim()).toFixed(2) : '';
      tip.tagName === "INPUT" && tip.classList.contains("active") ?  tipAmuont.innerHTML = (((bill.value.trim() * +tip.value.trim()/100)/peopleCount.value.trim())).toFixed(2) : '';
      tip.tagName === "INPUT" && tip.classList.contains("active") ?  total.innerHTML = (parseFloat(+bill.value.trim() + (+bill.value.trim() * (+tip.value/100))) / +peopleCount.value.trim()).toFixed(2) : '';
    })
  }
  if (peopleCount.value.trim() == "") errorSpan.style.display = "inline";
  bill.value = "";
  peopleCount.value = "";
  tips[tips.length-1].value = "";
})
peopleCount.oninput = () => errorSpan.style.display = "none";

// tip amuont => (parseFloat((bill * (tipPersent)) / numOfPeople)).toFixed(2)
// console.log((parseFloat((142.55 * (15/100))) / 5).toFixed(2)) // tipPerPerson
// tip amuont (parseFloat((+bill.value.trim() * (+tip.innerHTML.slice(0, tip.innerHTML.length-1)/100))) / +peopleCount.value.trim()).toFixed(2)

// tip total => (parseFloat(bill + (bill * (tipPersent))) / numOfPeople).toFixed(2)
// console.log((parseFloat(142.55 + (142.55 * (15/100))) / 5).toFixed(2)) // totalPerPerson
// tip total (parseFloat(+bill.value.trim() + (+bill.value.trim() * (+tip.innerHTML.slice(0, tip.innerHTML.length-1)/100))) / +peopleCount.value.trim()).toFixed(2)

