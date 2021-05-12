// for opening a new tab
const tabTime = window.sessionStorage.getItem("tabTime");

if (!tabTime) {
  console.log("first if");
  const time = new Date();
  window.sessionStorage.setItem("tabTime", time);
}

// for clicking link on site, staying in the tab
let tabUrl = window.sessionStorage.getItem("tabUrl");

if (!tabUrl) {
  console.log("tabUrl if");
  tabUrl = document.URL;
  window.sessionStorage.setItem("tabUrl", tabUrl);
}

const currentUrl = document.URL;

console.log("currentUrl", currentUrl);

if (tabUrl !== currentUrl) {
  console.log(tabUrl, currentUrl);
  const lastUrlNew = new URL(tabUrl);
  console.log(lastUrlNew);
  let lastUrlPathname = "";
  if (lastUrlNew) lastUrlPathname = lastUrlNew.pathname;
  const currentUrlPathname = window.location.pathname;
  console.log(lastUrlPathname, currentUrlPathname);

  if (lastUrlPathname !== currentUrlPathname) {
    console.log("second if");
    window.sessionStorage.removeItem("tabTime");
    window.sessionStorage.removeItem("tabUrl");
    const time = new Date();
    window.sessionStorage.setItem("tabTime", time);
    window.sessionStorage.setItem("tabUrl", currentUrl);
  }
}

console.log("there");
setInterval(() => {
  console.log("here");
  let title = document.querySelector("title");
  const currentTime = new Date();
  const originalTime = Date.parse(window.sessionStorage.getItem("tabTime"));
  const timeDiff = Math.floor((currentTime - originalTime) / 1000);

  console.log(timeDiff, timeDiff);

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
