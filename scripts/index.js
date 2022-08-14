const hamburger = document.querySelector(".hamburger");
const thirdHeader = document.querySelector(".third-header");
const someServices = document.querySelectorAll(".service-title");
const servicesWrapper = document.querySelector(".some-services-wrapper");
const services = document.querySelectorAll(".service");

hamburger.addEventListener("click", (e) => {
  e.target.closest(".bottom-header").classList.toggle("active");
});

someServices.forEach((item) => {
  item.addEventListener("click", (e) => {
    const mainServiceElement = e.target.closest(".service");
    const targetedElementId = mainServiceElement.id;
    toggleMainServiceArrowElement(mainServiceElement);
    toggleSevicesArrowElementsExceptClicked(targetedElementId);
    disableActiveService(mainServiceElement, targetedElementId);
  });
});

function toggleMainServiceArrowElement(mainServiceElement) {
  mainServiceElement
    .querySelector(".fa-solid")
    .classList.toggle("fa-chevron-down");
  mainServiceElement
    .querySelector(".fa-solid")
    .classList.toggle("fa-angle-right");
}

function disableActiveService(mainServiceElement, targetedElementId) {
  mainServiceElement.classList.toggle("active");
  const allServicesElements = Array.from(document.querySelectorAll(".service"));
  const allServicesElementsExceptClicked = allServicesElements.filter(
    (item) => item.id != targetedElementId
  );

  allServicesElementsExceptClicked.forEach((item) =>
    item.classList.remove("active")
  );
}

function toggleSevicesArrowElementsExceptClicked(targetedElementId) {
  const arrowElements = [];

  services.forEach((item) =>
    arrowElements.push(item.querySelector(".fa-solid"))
  );

  const allArrowElementsExceptClicked = arrowElements.filter(
    (item) => item.closest(".service").id != targetedElementId
  );

  toggleCssClasses(
    allArrowElementsExceptClicked,
    "fa-chevron-down",
    "fa-angle-right"
  );
}

function toggleCssClasses(group, ...classes) {
  for (let i = 0; i < group.length; i++) {
    group[i].classList.remove(classes[0]);
    group[i].classList.add(classes[1]);
  }
}
