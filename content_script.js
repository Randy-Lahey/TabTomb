const tabTime = window.sessionStorage.getItem("tabTime");

if (!tabTime) {
  const time = new Date();
  window.sessionStorage.setItem("tabTime", time);
}

const lastUrl = document.referrer;
const lastUrlNew = new URL(lastUrl);
let lastUrlPathname = "";
if (lastUrlNew) lastUrlPathname = lastUrlNew.pathname;
const currentUrlPathname = window.location.pathname;

if (lastUrlPathname !== currentUrlPathname) {
  window.sessionStorage.removeItem("tabTime");
  const time = new Date();
  window.sessionStorage.setItem("tabTime", time);
}

let title = document.querySelector("title");

setInterval(() => {
  const currentTime = new Date();
  const originalTime = Date.parse(window.sessionStorage.getItem("tabTime"));
  const timeDiff = Math.floor((currentTime - originalTime) / 1000);

  let currentTitle = title.innerText;
  let currentTitleArr = currentTitle.split(" ");
  if (
    currentTitleArr[0].includes("【") &&
    currentTitleArr[0].includes("】") &&
    currentTitleArr[0].includes("s")
  ) {
    currentTitleArr.shift();
    currentTitle = currentTitleArr.join(" ");
  }
  title.innerText = `【${timeDiff}s】 ${currentTitle}`;
}, 100);

// Update the timer when you go between pages on a site
// Check the last url and then, if it's the same domain then we reset the tabTime
// Now, need to not reset things only if the page has been refreshed
// window.performance.getEntriesByType("navigation")[0]["type"] !== "reload"
