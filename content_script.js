const tabTime = window.localStorage.getItem("tabTime");

if (!tabTime) {
  const time = new Date();
  window.localStorage.setItem("tabTime", time);
}

// eliminate after closed for 5 minutes
let title = document.querySelector("title");

setInterval(() => {
  const currentTime = new Date();
  const originalTime = Date.parse(window.localStorage.getItem("tabTime"));
  const timeDiff = Math.floor((currentTime - originalTime) / 1000);

  let currentTitle = title.innerText;
  if (!isNaN(parseInt(currentTitle[0]))) {
    let currentTitleArr = currentTitle.split(" ");
    currentTitleArr.shift();
    currentTitle = currentTitleArr.join(" ");
  }
  title.innerText = `${timeDiff}s ${currentTitle}`;
}, 100);

// async function init() {
//   let { value } = browser.local.storage.get("value");
//   if (!value) {
//     value = 0;
//   }
//   input.value = value;
//   setValue(value);
// }

// init().catch((e) => console.error(e));
