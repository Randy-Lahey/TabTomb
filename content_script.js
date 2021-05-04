const tabTime = window.localStorage.getItem("tabTime");

if (!tabTime) {
  const time = new Date();
  window.localStorage.setItem("tabTime", time);
}

let title = document.querySelector("title");
title.innerText = "[time_var]" + " " + title.innerText;

// async function init() {
//   let { value } = browser.local.storage.get("value");
//   if (!value) {
//     value = 0;
//   }
//   input.value = value;
//   setValue(value);
// }

// init().catch((e) => console.error(e));
