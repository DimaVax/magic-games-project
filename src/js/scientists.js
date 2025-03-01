const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

const html = document.querySelector("html")
const blocksArr = document.querySelectorAll(".scientists__block");
const textsArr = document.querySelectorAll(".scientists__text");
const namesArr = document.querySelectorAll(".scientists__name");
const yearsArr = document.querySelectorAll(".scientists__year");
const buttonsArr = document.querySelectorAll(".scientists__button");

const firstButtonEl = document.querySelector("#scientists-button1");
const secondButtonEl = document.querySelector("#scientists-button2");
const thirdButtonEl = document.querySelector("#scientists-button3");
const fourthButtonEl = document.querySelector("#scientists-button4");
const fifthButtonEl = document.querySelector("#scientists-button5");
const sixthButtonEl = document.querySelector("#scientists-button6");
const seventhButtonEl = document.querySelector("#scientists-button7");
const eighthButtonEl = document.querySelector("#scientists-button8");
const ninthButtonEl = document.querySelector("#scientists-button9");

const clearClassesAndStyles = () => {
  textsArr.forEach((textEl) => {
    textEl.classList.remove("scientists__text--show");
  });

  if (document.body.classList.contains("dark-mode")) {
    textsArr.forEach((textEl) => {
      textEl.classList.remove("scientists__text--show");
    });
  }
};

firstButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();

  let scientists19St = scientists.filter(
    (scientist) => scientist.born >= 1801 && scientist.born <= 1900
  );

  const arrCopy = [...textsArr];

  scientists19St = scientists.filter(
    (scientist) => scientist.born >= 1801 && scientist.born <= 1900
  );

  scientists19St.forEach((scientist) => {
    namesArr.forEach((nameEl, index) => {
      if (
        nameEl.textContent.includes(scientist.name) &&
        nameEl.textContent.includes(scientist.surname)
      ) {
        setTimeout(() => {
          arrCopy[index].classList.add("scientists__text--show");
        }, 200);
      }
    });
  });
});

secondButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();

  const arrCopy = [...textsArr];

  arrCopy.sort((a, b) => a.getAttribute("name").localeCompare(b.getAttribute("name")));

  blocksArr.forEach((element, index) => {
    element.append(arrCopy[index]);

    setTimeout(() => {
      textsArr.forEach((textEl) => {
        textEl.classList.add("scientists__text--show");
      });
    }, 200);
  });
});

thirdButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();

  const arrCopy = [...textsArr];

  arrCopy.sort((nextEl, currentEl) => Number((currentEl.getAttribute('dead')) - (currentEl.getAttribute('born'))) - ((nextEl.getAttribute('dead')) - (nextEl.getAttribute('born'))));

  blocksArr.forEach((element, index) => {
    element.append(arrCopy[index]);

    setTimeout(() => {
      textsArr.forEach((textEl) => {
        textEl.classList.add("scientists__text--show");
      });
    }, 200);
  });
});

fourthButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();

  const latestBornScientist = scientists.reduce((latest, scientist) =>
    latest.born > scientist.born ? latest : scientist
  );

  const index = scientists.findIndex(scientist => scientist === latestBornScientist);

  if (index !== -1) {
    setTimeout(() => {
      textsArr[index].classList.add("scientists__text--show");
    }, 200);
  }
});

fifthButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();

  const scientistBorn1879 = scientists.filter(
    (scientist) => scientist.born === 1879
  );

  scientistBorn1879.forEach((scientist) => {
    yearsArr.forEach((yearEl, index) => {
      if (yearEl.textContent.includes(scientist.born.toString())) {
        setTimeout(() => {
          textsArr[index].classList.add("scientists__text--show");
        }, 200);
      }
    });
  });
});

sixthButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();
  
  const scientistsSurnamesC = scientists.filter(
    (scientist) => scientist.surname
  );

  scientistsSurnamesC.forEach((scientist, index) => {
    if (scientist.surname.startsWith("C")) {
      setTimeout(() => {
        textsArr[index].classList.add("scientists__text--show");
      }, 200);
    }
  });
});

seventhButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();
  
  const scientistsNameNotA = scientists.filter(
    (scientist) => scientist.name
  );

  scientistsNameNotA.forEach((scientist, index) => {
    if (!scientist.name.startsWith("A")) {
      setTimeout(() => {
        textsArr[index].classList.add("scientists__text--show");
      }, 200);
    }
  });
});

eighthButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();
  
  const scientistsOldestSmallest = scientists.filter(
    (scientist => scientist.dead - scientist.born)
  );

  const oldestScientist = scientistsOldestSmallest.reduce((oldest, scientist) =>
    (oldest.dead-oldest.born) > (scientist.dead-scientist.born) ? oldest : scientist
  );

  const oldestIndexScientist = scientists.findIndex(scientist => scientist === oldestScientist);

  if (oldestIndexScientist !== -1) {
    setTimeout(() => {
      textsArr[oldestIndexScientist].classList.add("scientists__text--show");
    }, 200);
  }

  ///////////////////////////////////

  const smallestScientist = scientistsOldestSmallest.reduce((smallest, scientist) => 
    (scientist.dead-scientist.born) > (smallest.dead-smallest.born) ? smallest : scientist
  );

  const smallestIndexScientist = scientists.findIndex(scientist => scientist === smallestScientist);

  if (smallestIndexScientist !== -1) {
    setTimeout(() => {
      textsArr[smallestIndexScientist].classList.add("scientists__text--show");
    }, 200);
  }
});

ninthButtonEl.addEventListener("click", () => {
  clearClassesAndStyles();

  const scientistsHasMatchingFirstLetters = scientist => scientist.name[0].toLowerCase() === scientist.surname[0].toLowerCase();

  const scientistsMatchingLetters = scientists.filter(scientistsHasMatchingFirstLetters);

  const index = scientists.findIndex(scientist => scientist === scientistsMatchingLetters);

  for (const scientist of scientistsMatchingLetters) {
    const scientistIndex = scientists.findIndex(currentScientist => currentScientist === scientist);
    if (scientistIndex !== -1) {
      setTimeout(() => {
        textsArr[scientistIndex].classList.add("scientists__text--show");
      }, 200);
    }
  }
});

