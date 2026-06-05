const programs = [];

let currentIndex = 0;

const programList = document.getElementById("program-list");

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const csvFileInput = document.getElementById("csv-file");

function timeToMinutes(timeString) {

  const [hour, minute] = timeString.split(":");

  return Number(hour) * 60 + Number(minute);

}

function getCurrentMinutes() {

  const now = new Date();

  return now.getHours() * 60 + now.getMinutes();

}

function findCurrentTimeIndex() {

  const currentMinutes = getCurrentMinutes();

  for (let i = 0; i < programs.length - 1; i++) {

    const currentProgramMinutes =
      timeToMinutes(programs[i].time);

    const nextProgramMinutes =
      timeToMinutes(programs[i + 1].time);

    if (
      currentMinutes >= currentProgramMinutes &&
      currentMinutes < nextProgramMinutes
    ) {
      return i;
    }

  }

  return -1;

}

function renderPrograms() {

  if (programs.length === 0) {

    programList.innerHTML = `
      <li class="empty-message">
        CSVを読み込んでください
      </li>
    `;

    return;

  }

  programList.innerHTML = "";

  const timeLineIndex = findCurrentTimeIndex();

  programs.forEach((program, index) => {

    const li = document.createElement("li");

    li.classList.add("program-item");

    if (index === currentIndex) {

      li.classList.add("active");

      setTimeout(() => {

        li.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 0);

    }

    li.innerHTML = `
      <span class="time">${program.time}</span>
      <span class="title">${program.title}</span>
    `;

    li.addEventListener("click", () => {

      currentIndex = index;

      renderPrograms();

    });

    programList.appendChild(li);

    if (index === timeLineIndex) {

      const timeLine = document.createElement("li");

      timeLine.classList.add("time-line");

      programList.appendChild(timeLine);

    }

  });

}

nextButton.addEventListener("click", () => {

  if (currentIndex < programs.length - 1) {

    currentIndex++;

    renderPrograms();

  }

});

prevButton.addEventListener("click", () => {

  if (currentIndex > 0) {

    currentIndex--;

    renderPrograms();

  }

});

csvFileInput.addEventListener("change", (event) => {

  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
  
  const decoder = new TextDecoder("utf-8");
  
  const csvText = decoder.decode(reader.result);
  
  console.log(csvText);
  
  alert(csvText);
  
  loadCSV(csvText);
  
};
  reader.readAsArrayBuffer(file);
  

});

function loadCSV(csvText) {

  const lines = csvText.split("\n");

  programs.length = 0;

  lines.forEach(line => {

    const [time, title] = line.split(",");

    if (!time || !title) return;

    programs.push({
      time: time.trim(),
      title: title.trim()
    });

  });

  const initialIndex = findCurrentTimeIndex();

  if (initialIndex !== -1) {
    currentIndex = initialIndex;
  } else {
    currentIndex = 0;
  }

  renderPrograms();

}

renderPrograms();
