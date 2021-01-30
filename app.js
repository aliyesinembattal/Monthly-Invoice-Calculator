const results = document.getElementById("results");
const submitBtn = document.getElementById("submit-btn");
const loading = document.getElementById("loading");

loading.style.display = "none";

document.getElementById("bill-form").addEventListener("submit", (e) => {
  //Hide results
  results.style.display = "none";
  //Show Loading
  loading.style.display = "block";

  setTimeout(() => {
    calculateResults();
  }, 2000);
  submitBtn.disabled = true;
  e.preventDefault();
});

function calculateResults() {
  const electricity = document.getElementById("electricity");
  const water = document.getElementById("water");
  const naturalgas = document.getElementById("naturalgas");
  const monthlyPayment = document.getElementById("monthly-payment");

  const principal = parseFloat(electricity.value);
  const principal1 = parseFloat(water.value);
  const principal2 = parseFloat(naturalgas.value);
  const monthly = principal + principal1 + principal2;

  if (isFinite(monthly)) {
    monthlyPayment.textContent = monthly.toFixed(3).toString() + " $";

    results.style.display = "block";
    submitBtn.disabled = false;
    //Hide Loading
    loading.style.display = "none";
  } else {
    showError(
      "If you want to do calculate, please check your numbers and required all inputs!"
    );
  }
}
function showError(errorMessage) {
  //Hide Loading,results
  results.style.display = "none";
  loading.style.display = "none";
  //Get my-alert content on HTML
  const myAlert = document.getElementById("my-alert");

  //Dynamically create custom alert on Bootstrep
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger mt-3";
  errorDiv.id = "danger-alert";
  errorDiv.innerHTML = `<h4 class="alert-heading">Something went wrong...</h4>
                <p>${errorMessage}</p>`;

  myAlert.appendChild(errorDiv);
  setTimeout(() => {
    errorDiv.style.display = "none";
    submitBtn.disabled = false;
  }, 7000);
}
