function markTabBirthday() {
  let tabBirthday = window.sessionStorage.getItem("tabBirthday");

  if (!tabBirthday) {
    console.log("tabBirthday if");
    tabBirthday = new Date();
    window.sessionStorage.setItem("tabBirthday", tabBirthday);
  }
}

function didoDomainCheck() {
  let urlStickyNote = window.sessionStorage.getItem("urlStickyNote");

  if (!urlStickyNote) {
    console.log("urlStickyNote if");
    urlStickyNote = document.URL;
    window.sessionStorage.setItem("urlStickyNote", urlStickyNote);
  }

  const currentUrl = document.URL;

  if (currentUrl !== urlStickyNote) {
    const urlStickyNoteObject = new URL(urlStickyNote);
    let stickyNotePathname = "";
    if (urlStickyNoteObject) stickyNotePathname = urlStickyNoteObject.pathname;
    const currentPathname = window.location.pathname;

    // domains should match
    if (currentPathname !== stickyNotePathname) {
      console.log("didoDomain 2nd if");
      const time = new Date();
      window.sessionStorage.setItem("tabBirthday", time);
      window.sessionStorage.setItem("urlStickyNote", currentUrl);
    }
  }
}

markTabBirthday();

dittoDomainCheck();

// update title - currently seconds every X amount of time
setInterval(() => {
  console.log("here");
  let title = document.querySelector("title");
  const currentTime = new Date();
  const originalTime = Date.parse(window.sessionStorage.getItem("tabBirthday"));
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

// Refactor what we have - into functions
