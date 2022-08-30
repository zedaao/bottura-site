export default class TabNav {
  constructor(skill, desc) {
    this.tabMenu = document.querySelectorAll(skill);
    this.tabContent = document.querySelectorAll(desc);
  }

  activeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    this.tabContent[index].classList.add("ativo");

    this.tabMenu.forEach((content) => {
      content.classList.remove("ativo");
    });
    this.tabMenu[index].classList.add("ativo");
  }

  addActive() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
    this.tabContent.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addActive(0);
    }
    return this;
  }
}
