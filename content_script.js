const tabTime = window.sessionStorage.getItem("tabTime");

if (!tabTime) {
  const time = new Date();
  window.sessionStorage.setItem("tabTime", time);
}

let title = document.querySelector("title");

setInterval(() => {
  const currentTime = new Date();
  const originalTime = Date.parse(window.sessionStorage.getItem("tabTime"));
  const timeDiff = Math.floor((currentTime - originalTime) / 1000);

  let currentTitle = title.innerText;
  if (!isNaN(parseInt(currentTitle[0]))) {
    let currentTitleArr = currentTitle.split(" ");
    currentTitleArr.shift();
    currentTitle = currentTitleArr.join(" ");
  }
  title.innerText = `${timeDiff}s ${currentTitle}`;
}, 100);
