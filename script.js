let form = document.querySelector(".form-page");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let weight = Number(document.querySelector("#weight").value);
  let heightElmnt = document.querySelector("#height");
  // let height = Number(document.querySelector('#height').value)/100
  let hVal = heightElmnt.value;
  let heightinNum = Number(hVal);
  let height = heightinNum / 100;
  // console.log(weight, height)
  //  console.log(form.children[0].children[1].value)
  //  console.log(height, typeof height)
  //  let weightInNum = Number(weight.value)
  //  console.log(weightInNum, typeof weightInNum)
  //   console.log(bmiVal.toFixed(3));
  let bmiVal = (weight / height ** 2).toFixed(2);
  let result = document.querySelector(".result");
  if (bmiVal < 18) {
    result.innerHTML = `BMI val: ${bmiVal} : Your are Underweight`;
    result.style.color = "red"
  } else if (bmiVal <= 24) {
    result.innerHTML = `BMI val: ${bmiVal} : Your are Normal weight`;
    result.style.color="green"
  } else if (bmiVal <= 30) {
    result.innerHTML = `BMI val: ${bmiVal} : Your are Overweight`;
    result.style.color="blue"
  } else {
    result.innerHTML = `BMI val: ${bmiVal} : Your are Obese`;
    result.style.color = "red"
  }
  document.querySelector('#weight').value = ""
  document.querySelector('#height').value = ""
});
