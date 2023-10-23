const form_1 = document.querySelector("form");
form_1.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  const button = form_1.querySelector("button");
  const result = form_1.querySelector("#results");
  button.addEventListener("click", () => {
    const bmi = parseInt(weight / height);
    console.log(bmi);
    if (height === "" || height < 0 || isNaN(height)) {
      result.innerHTML = `please give valid height`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
      result.innerHTML = `please give valid weight`;
    } else if (bmi < 18.6) {
      result.innerHTML = `your bmi was`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      return print("Normal Range", bmi);
    } else {
      return print("overweight", bmi);
    }
  });
});
function print(message, bmi) {
  result.innerHTML = `Your Bmi was ${bmi}  so you are ${message}`;
}
