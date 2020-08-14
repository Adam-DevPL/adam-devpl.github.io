import "../scss/main.scss";

const job = "Junor Frontend Developer";
console.log("HELLO 🚀");

fetch(
  "https://api.github.com/users/adam-devpl/repos?sort=created&direction=asc"
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { description, homepage, html_url, name } = repo;
      const target = "_blank";
      const rel = "noopener noreferrer";
      if(description == 'My portfolio') {
        homepage = '#';
        console.log('Prawie...');
        target = "";
        rel = "";
      }
      const repositoryList = document.querySelector(".project-container--js");
      const myTemplate = `<div class="project">
            <div class="project__bar">
              <span class="project__dot"></span>
              <span class="project__dot"></span>
              <span class="project__dot"></span>
            </div>
            <div class="project__main">
              <img class="project__image" src="img/github-icon.svg"  alt="Github icon.">
              <div class="project-container ">
                  <h3 class="project-container__grid project-container__header">
                    <span class="project-container__title">project <span class="special">:</span></span>
                    <span>${name}</span>
                  </h3>
                  <p class="project-container__grid project-container__grid--margin-bottom">
                    <span class="project-container__title">description<span class="special">:</span></span>
                    <span>${description}</span>
                  </p>
                  <p class="project-container__grid">
                    <span class="project-container__title">demo <span class="special">:</span></span>
                    <span>&lt;<a class="project-container__link" href="${homepage}" target="${target}"
                    rel="${rel}">see here</a>&gt;</span>
                  </p>
                  <p class="project-container__grid">
                    <span class="project-container__title">github <span class="special">:</span></span>
                    <span>&lt;<a class="project-container__link" href="${html_url}" target="_blank"
                    rel="noopener noreferrer">source code</a>&gt;</span>
                  </p>
              </div>
            </div>
          </div>`;

      if (description) {
        repositoryList.innerHTML += myTemplate;
      }
    }
  })
  .catch((e) => console.log(e));
