document.addEventListener(
  "DOMContentLoaded",
  async () => {
    loadSkillsPage();
    loadProjectsPage();
    loadResearchPage();
  },
  false
);

function loadSkillsPage() {
  var skills = [
    { name: "C", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
    { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" },
    { name: "ReactJs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "AngularJs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "NodeJs", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "ExpressJs", image: "./assets/express.png" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
    { name: "Matlab", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", image: "./assets/github.png" },
    { name: "Discord.js", image: "./assets/discord.png" },
    { name: "VS Code", image: "./assets/vs_code.svg" },
    { name: "Manjaro", image: "https://user-images.githubusercontent.com/63140632/145705669-2050df14-6b64-44a9-aa66-dd62bafb4936.png" },
    { name: "JQuery", image: "https://user-images.githubusercontent.com/63140632/138343999-b14291bb-a436-47c8-8b6e-8e27843f2228.png" },
    { name: "R", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1086px-R_logo.svg.png?20160212050515" },
    { name: "AWS", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png?20170912170050" },
    { name: "Bootstrap", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/768px-Bootstrap_logo.svg.png?20210507000024" },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    
  ];

  var allSkills = document.getElementById("all-skills");

  for (var i = 0; i < skills.length; i++) {
    var element = document.createElement("div");
    element.classList.add("skill-card");
    element.innerHTML = `
            <img src="${skills[i].image}" alt="${skills[i].name}">
            <p>${skills[i].name}</p>
        `;
    allSkills.appendChild(element);
  }
}

function loadProjectsPage() {
  projects = [
    {
      title: "RailWell",
      image: "./assets/rw.png",
      description:
        "A complete working prototype of Railway Reservation System with Train data fetched from IRCTC and live news feed using RSS.",
      deploy: "",
      repo: "https://github.com/utkxxrsh/Railwell-Railway-Reservation-System",
    },
    {
      title: "FurnituAR",
      image: "./assets/ar.png",
      description:
        "AN AR based Furniture store that uses AR Core to visualise furnitures in realtimr from the catalogue.",
      deploy: "",
      repo: "https://github.com/utkxxrsh/AR-MODULE-IN-ANDROID-STUDIO",
    },
    {
      title: "Fall Detection System for Elderly",
      image: "./assets/fdec.jpg",
      description:
        "A fall detection system implemented using NODE MCU that notifies when a persn wearing it falls down..",
      deploy: "https://drive.google.com/file/d/1byxOWnkPlDYPKRLNs80jINedT53BEvCm/view?usp=sharing",
      repo: "",
    },
    {
      title: "Gantt-Pro X",
      image: "./assets/gp.png",
      description:
        "A Software Engineering Project to make project Managemen easier by integrating it with GANTT Charts.",
      deploy: "",
      repo: "https://github.com/utkxxrsh/Gantt-Pro",
    },
    {
      title: "Automatic Image Colouriser",
      image: "./assets/ai.png",
      description:
        "Full Fledged Image colouriser which makes use of CNN for training and CIFAR10 Dataset was used .",
      deploy: "",
      repo: "https://github.com/utkxxrsh/Image-Colouriser",
    },
    {
      title: "Portfolio Website",
      image: "./assets/po1.png",
      description:
        "Portfolio website to display my skills, projects, research work, etc built using HTML, CSS and JavaScript.",
      deploy: "",
      repo: "https://github.com/utkxxrsh/portfolio/",
    },
    {
      title: "Data Leakage Detection Using Guilty Model",
      image: "./assets/ism.png",
      description: "This project deals with shielding the data from being out sourced by giving a special inscription to the sensitive data so that it cannot be replicated.",
      deploy: "",
      repo: "https://github.com/utkxxrsh/Data-Leakage-Detection",
    },
  ];

  var allProjects = document.getElementById("all-projects");

  for (var i = 0; i < projects.length; i++) {
    var element = document.createElement("div");
    element.classList.add("project-card");
    element.innerHTML = `
            <img src="${projects[i].image}" alt="${projects[i].title}">
            <h2>${projects[i].title}</h2>
            <p>${projects[i].description}</p>
            <div class="project-buttons">
                ${
                  projects[i].deploy !== ""
                    ? `<a id="deploy-button" href="${projects[i].deploy}" target="_blank"><i class="fas fa-eye"></i> View</a>`
                    : ``
                }
                ${
                  projects[i].repo !== ""
                    ? `<a href="${projects[i].repo}" id="code-button" target="_blank"><i class="fas fa-file-code"></i> Code</a>`
                    : ``
                }
            </div>
        `;
    allProjects.appendChild(element);
  }
}


function darkModeSwitch() {
  var element = document.getElementById("dark-mode-switch");
  setTimeout(function () {
    element.style.opacity = 0;
    setTimeout(function () {
      if (element.name == "dark") {
        element.innerHTML = '<i class="fas fa-sun"></i>';
        element.name = "light";
        document.documentElement.style.setProperty(
          "--background1",
          "var(--white1)"
        );
        document.documentElement.style.setProperty(
          "--background2",
          "var(--white2)"
        );
        document.documentElement.style.setProperty("--text", "var(--black1)");
        document.documentElement.style.setProperty(
          "--navbar",
          "var(--navbar-light)"
        );
      } else {
        element.innerHTML = '<i class="fas fa-moon"></i>';
        element.name = "dark";
        document.documentElement.style.setProperty(
          "--background1",
          "var(--black1)"
        );
        document.documentElement.style.setProperty(
          "--background2",
          "var(--black2)"
        );
        document.documentElement.style.setProperty("--text", "var(--white1)");
        document.documentElement.style.setProperty(
          "--navbar",
          "var(--navbar-dark)"
        );
      }
      element.style.opacity = 1;
    }, 250);
  });
}

function openNavbar() {
  var nav = document.getElementById("mobile-navbar");
  nav.style.transform = "translateX(-200px)";
}

function closeNavbar() {
  var nav = document.getElementById("mobile-navbar");
  nav.style.transform = "translateX(0px)";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxhd-eQtInVaoQ_hWsLtgQSt7oEXjMMUkASrd2k-gObhuGQZx9STGuh_kX13yE9lLeVrA/exec";
const form = document.forms["say-hi-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => notification("Your message has been received!"))
    .catch((error) => notification("Some error occured on form submit!"));

  form.reset();
});

async function notification(message) {
  const element = document.createElement("div");
  element.id = "notification";
  element.innerHTML = `
    <h1>${message}</h1>
    `;
  document.querySelector("body").appendChild(element);
  setTimeout(() => {
    document.querySelector("body").removeChild(element);
  }, 5000);
}
