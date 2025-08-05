/* 
****************************
Wallet page 
****************************
*/

// Getting the deposit action button and it's display box
const add_fund_action = document.querySelector(".btn-add-action");
const deposit_box = document.querySelector(".deposit-box");

// Getting the withdraw action button and it's display box
const withdraw_action = document.querySelector(".btn-withdraw-action");
const withdraw_box = document.querySelector(".withdraw-box");

// Getting the transfer action button and it display box
const transfer_action = document.querySelector(".btn-transfer-action");
const transfer_box = document.querySelector(".transfer-box");

// Add fund Event
add_fund_action.addEventListener("click", function () {
  // checking if it already active
  if (add_fund_action.classList.contains("btn-action-active")) {
    deposit_box.style.display = "flex";
  } else {
    deposit_box.style.display = "flex";
    // adding the active class if it is not
    add_fund_action.classList.add("btn-action-active");

    // removing the active class from the rest and hiding their box
    transfer_action.classList.remove("btn-action-active");
    withdraw_action.classList.remove("btn-action-active");
    transfer_box.style.display = "none";
    withdraw_box.style.display = "none";
  }
});

withdraw_action.addEventListener("click", function () {
  // checking if it already active
  if (withdraw_action.classList.contains("btn-action-active")) {
    withdraw_box.style.display = "flex";
  } else {
    withdraw_box.style.display = "flex";
    // adding the active class if it is not
    withdraw_action.classList.add("btn-action-active");

    // removing the active class from the rest and hiding their box
    transfer_action.classList.remove("btn-action-active");
    add_fund_action.classList.remove("btn-action-active");
    transfer_box.style.display = "none";
    deposit_box.style.display = "none";
  }
});

transfer_action.addEventListener("click", function () {
  // checking if it already active
  if (transfer_action.classList.contains("btn-action-active")) {
    transfer_box.style.display = "flex";
  } else {
    transfer_box.style.display = "flex";
    // adding the active class if it is not
    transfer_action.classList.add("btn-action-active");
    // removing the active class from the rest and hiding their box
    withdraw_action.classList.remove("btn-action-active");
    add_fund_action.classList.remove("btn-action-active");
    withdraw_box.style.display = "none";
    deposit_box.style.display = "none";
  }
});
