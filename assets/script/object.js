const projects = [
  {
    id: "card1",
    title: "Tonic",
    title1: "Tonic",
    company: "CANOPY",
    company1: "CANOPY",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",
    specialization: "Back End Dev",
    specialization1: "Back End Dev",
    year: "2015",
    year1: "2015",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card1.png",
    imageDesktop: "./assets/img/cards/card1.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio-project.git",
  },
  {
    id: "card2",
    title: "Multi-Post",
    title1: "Multi-Post",
    company: "CANOPY",
    company1: "FACEBOOK",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",

    specialization: "Back End Dev",
    specialization1: "Full Stack Dev",
    year: "2015",
    year1: "2015",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card2.png",
    imageDesktop: "./assets/img/cards/card2.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio-project.git",
  },
  {
    id: "card3",
    title: "Tonic",
    title1: "Facebook 360",
    company: "CANOPY",
    company1: "FACEBOOK 360",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",

    specialization: "Back End Dev",
    specialization1: "Full Stack Dev",
    year: "2015",
    year1: "2015",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card3.png",
    imageDesktop: "./assets/img/cards/card3.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio-project.git",
  },
  {
    id: "card4",
    title: "Multi-Post<br>Stories",
    title1: "Uber Navigation",
    company: "CANOPY",
    company1: "Uber",
    icon: "./assets/icons/modal_git_icon.svg",
    icon1: "./assets/icons/modal_export_icon.svg",
    specialization: "Back End Dev",
    specialization1: "Lead Developer",
    year: "2015",
    year1: "2018",
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: "html",
      tech4: "Ruby on rials",
      tech2: "css",
      tech3: "javaScript",
    },
    details: "See project",
    imageMobile: "./assets/img/cards/card4.png",
    imageDesktop: "./assets/img/cards/card4.png",
    live: "https://wilfriedm01.github.io/",
    source: "https://github.com/WilfriedM01/portfolio-project.git",
  },
];

// Work section data structure
const Worksection = document.querySelector(".work-cards");
projects.forEach((project) => {
  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
  <a href="#" class="article-link opacity"
        ><section class="articles">
          <article class="article-item ${project.id}">
            <p class="sub-item">
              <img
                src="${project.imageDesktop}"
                alt=""
                class="article-img"
              />
            </p>
            <div class="article-content">
              <h2 class="article-title">${project.title}</h2>
              <h3>${project.company} <span>&bull; ${project.specialization} &bull; ${project.year}</span></h3>
              <p class="article-text">
              ${project.description1}
              </p>
              <ul class="article-tags">
                <li class="article-tag ok">${project.technologies.tech1}</li>
                <li class="article-tag">${project.technologies.tech2}</li>
                <li class="article-tag">${project.technologies.tech3}</li>
              </ul>
              <button class="article-btn button_see_2" id="${project.id}">${project.details}</button>
            </div>
          </article>
        </section></a
      >
  `;
  Worksection.append(cardDiv);
});
