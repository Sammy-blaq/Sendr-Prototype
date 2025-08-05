/* 
************************
Available Package page
*************************
*/

// filter inner container
const inner_browse_pac = document.querySelector(".inner-browse-pac");

// select element
const filter_el = document.querySelector(".filter");

// clear filter button
const btn_clear_filter = document.querySelector(".btn-clear-filter");
let selected_filter = filter_el.value;

filter_el.addEventListener("input", function () {
  let selected_filter = filter_el.value;

  if (selected_filter === "low-to-high" || selected_filter === "high-to-low") {
    inner_browse_pac.style.gridTemplateColumns = "1fr 40rem";

    // display clear filter button
    btn_clear_filter.style.display = "flex";
  } else {
    inner_browse_pac.style.gridTemplateColumns = "1fr 20rem";
    btn_clear_filter.style.display = "None";
  }
});

// Clear Filter
btn_clear_filter.addEventListener("click", function () {
  filter_el.value = "newest";
  inner_browse_pac.style.gridTemplateColumns = "1fr 20rem";
  btn_clear_filter.style.display = "None";
});
