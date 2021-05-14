function markTabBirthday() {
  let tabBirthday = window.sessionStorage.getItem("tabBirthday");

  if (!tabBirthday) {
    console.log("tabBirthday if");
    tabBirthday = new Date();
    window.sessionStorage.setItem("tabBirthday", tabBirthday);
  }
}

function dittoDomainCheck() {
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

    // domains should also not match? Just in case?
    if (currentPathname !== stickyNotePathname) {
      console.log("dittoDomain 2nd if");
      const time = new Date();
      window.sessionStorage.setItem("tabBirthday", time);
      window.sessionStorage.setItem("urlStickyNote", currentUrl);
    }
  }
}

function updateTitle(
  timeUnit,
  timePassedInMillisecondsDivisor,
  intervalTimeInMilliseconds
) {
  setInterval(() => {
    console.log("setInterval seconds");
    let title = document.querySelector("title");
    const time = new Date();
    const birthdayTime = Date.parse(
      window.sessionStorage.getItem("tabBirthday")
    );
    const timePassed = Math.floor(
      (time - birthdayTime) / timePassedInMillisecondsDivisor
    );

    let titleInnerText = title.innerText;
    let titleArr = titleInnerText.split(" ");
    if (
      titleArr[0].includes("【") &&
      titleArr[0].includes("】") &&
      titleArr[0].includes(timeUnit)
    ) {
      titleArr.shift();
      titleInnerText = titleArr.join(" ");
    }
    title.innerText = `【${timePassed}${timeUnit}】 ${titleInnerText}`;
  }, intervalTimeInMilliseconds);
}

markTabBirthday();

dittoDomainCheck();

updateTitle("s", 1000, 100);

// update title - currently seconds every X amount of time

// Refactor what we have - into functions
// didoDomainCheck into multiple fns
// setInterval into a function
