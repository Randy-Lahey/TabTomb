// for opening a new tab
const tabTime = window.sessionStorage.getItem("tabTime");

if (!tabTime) {
  console.log("first if");
  const time = new Date();
  window.sessionStorage.setItem("tabTime", time);
}

// for clicking link on site, staying in the tab
const lastUrl = document.referrer;
if (lastUrl !== "") {
  const lastUrlNew = new URL(lastUrl);
  console.log(lastUrlNew);
  let lastUrlPathname = "";
  if (lastUrlNew) lastUrlPathname = lastUrlNew.pathname;
  const currentUrlPathname = window.location.pathname;

  if (
    lastUrlPathname !== currentUrlPathname &&
    window.performance.getEntriesByType("navigation")[0]["type"] !== "reload"
  ) {
    console.log("second if");
    window.sessionStorage.removeItem("tabTime");
    const time = new Date();
    window.sessionStorage.setItem("tabTime", time);
  }
}

setInterval(() => {
  let title = document.querySelector("title");
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

// replace document.referrer with saving it ourselves
