function initialDisplayView() {
  // prevline
  let displayPrevline = document
    .querySelector(".display__prevline")
    .querySelectorAll("div");
  displayPrevline.forEach((div) => {
    div.innerHTML = "";
  });

  // equal
  let equal = document.querySelector(".equal");
  equal.innerHTML = "";

  // main-value
  let mainValue = document.querySelector(".main-value");
  mainValue.innerHTML = "0";
}

export { initialDisplayView };
