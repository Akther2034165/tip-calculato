// Write your code here
const tipCalculator = document.getElementById("tip-calc");
const selectTotal = document.getElementById("total-amount");
const tipPerPeroson = document.getElementById("amount");

const data = {
  bill: 0,
  tip: 0,
  person: 1,
};
tipCalculator.addEventListener("change", (e) => {
  if (validateInput(e.target.value)) {
    e.target.classList.remove("err");

    data[e.target.name] = parseFloat(e.target.value);

    const tip = (data.bill * data.tip) / 100;

    let total = data.bill + tip;
    total = total / data.person;
    total = total.toFixed(2);
    selectTotal.textContent = total;

    let tip_per_person = tip / data.person;
    tip_per_person = tip_per_person.toFixed(2);
    tipPerPeroson.textContent = tip_per_person;
  } else {
    e.target.classList.add("err");
  }
});

const validateInput = (input) => {
  return /^\d+$/.test(input);
};
