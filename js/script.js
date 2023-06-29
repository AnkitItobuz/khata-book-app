const customerNameInput = document.querySelector(".customer-name-input");
const amountTakenInput = document.querySelector(".amount-taken-input");
const addButton = document.querySelector(".add-button");
const customerCards = document.getElementsByClassName(
  "customer-details-conatiner"
)[0];

const customerDetails = [];

function updatingBox(i) {
  document
    .getElementsByClassName("edit-amount")
    [i].addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        let res =
          Number(customerDetails[i].totalDues) +
          Number(document.getElementsByClassName("edit-amount")[i].value);
        customerDetails[i].totalDues = res;
        showList();
      }
    });
}

function editButton(i) {
  document.getElementsByClassName("edit-amount")[i].classList.toggle("hidden-item");
  updatingBox(i);
}

function showList() {
  customerCards.innerHTML = " ";
  for (let i = 0; i < customerDetails.length; i++) {
    customerCards.innerHTML += ` <div class="d-flex justify-content-evenly align-items-center bg-white mt-2 py-2 rounded-2">
       <span><img src="images/user.svg" alt="user image" /></span>
       <p  class="customer-name pt-3">${customerDetails[i].customerName}</p>
       <p class="pt-3">$<span class="amount ms-2">${customerDetails[i].totalDues}</span></p>
       <span><img src="images/edit.svg" alt="edit button" class = edit-button onclick = "editButton(${i})" /></span>
       <input type="number" class="edit-amount border border-0 hidden-item" />
   </div>`;
  }
}

function getDetails() {
  const content = {
    customerName: customerNameInput.value.trim(),
    totalDues: amountTakenInput.value,
  };

  if (customerNameInput.value.trim() !== "" && amountTakenInput.value !== "") {
    customerDetails.push(content);
  } else {
    alert("Empty task");
  }
  showList();
  customerNameInput.value = "";
  amountTakenInput.value = "";
}

amountTakenInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    customerCards.classList.remove("hidden-block");
    getDetails();
  }
});

addButton.addEventListener("click", () => {
  customerCards.classList.remove("hidden-block");
  getDetails();
});
