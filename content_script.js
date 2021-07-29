function createTabBirthday() {
  let tabBirthday = window.sessionStorage.getItem("tabBirthday");

  if (!tabBirthday) {
    console.log("tabBirthday if");
    tabBirthday = new Date();
    window.sessionStorage.setItem("tabBirthday", tabBirthday);
  }
}

function tabTimerReset() {
  let urlStickyNote = window.sessionStorage.getItem("urlStickyNote");

  if (!urlStickyNote) {
    console.log("urlStickyNote if");
    urlStickyNote = document.URL;
    window.sessionStorage.setItem("urlStickyNote", urlStickyNote);
  }

  const currentUrl = document.URL;

  
  const urlStickyNoteObject = new URL(urlStickyNote);
  let stickyNotePathname = "";
  if (urlStickyNoteObject) stickyNotePathname = urlStickyNoteObject.pathname;
  const currentPathname = window.location.pathname;

  if (currentUrl !== urlStickyNote && currentPathname !== stickyNotePathname) {
    console.log("tabTimer");
    const time = new Date();
    window.sessionStorage.setItem("tabBirthday", time);
    window.sessionStorage.setItem("urlStickyNote", currentUrl);
  }
}

function displayTabAge(
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
    )
    const timePassed = Math.floor(
      (time - birthdayTime) / 1000
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

function timeUnitTransition () {}
// this function will be used to move tabTimer from seconds to minutes to hours to days respectively
//Function will keep track of a second variable that when it reaches 60 will delete the second varaible and create a minute variable, changing the Tabtimer in the appropriate way, same for minutes ----> and hour//s ---> days






createTabBirthday();

tabTimerReset();

displayTabAge("s", 1000, 100);

// update title - currently seconds every X amount of time

// Refactor what we have - into functions
// didoDomainCheck into multiple fns
// setInterval into a function
