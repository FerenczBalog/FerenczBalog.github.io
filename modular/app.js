import Contact from "./assets/contact.mjs";
import Hero from "./assets/hero.mjs";
import WebDevelopment from "./assets/webDev.mjs";
import DataHandler from "./assets/dataHandler.mjs";
import Router from "./assets/Router.mjs";
import Project from "./assets/project.mjs";

class App {

    constructor() {
        this.data = null;

        Router.instance.subscribe(this.onRoutChanged.bind(this))
    }

    onRoutChanged(state) {
        this.render(state);
    }

    componentToRender(state) {
        if (state === null || state.link === `/`) {
            return new WebDevelopment(this.data).render();
        }

        if (state.link.includes("/project?id")) {
            const projectData = this.data.find(d => d.id == state.link.split("=")[1])

            if (projectData) {
                return new Project(projectData).render()
            }
        }
        return `<h1 class="text-center">"Page not found!"</h1>`
    }

    async render(state = null) {
        if(this.data == null) {
            this.data = await DataHandler.instance.fetchData();
        }

        const main = document.createElement("main");
        const documentFragment = document.createDocumentFragment();

        main.classList.add("app");
        main.innerHTML =
        `
            ${new Hero().render()}
            ${new WebDevelopment(this.data).render()}
            ${new Contact().render()}
        `;

        documentFragment.appendChild(main);
        document.querySelector("body").appendChild(documentFragment.firstElementChild);
        

        //      Navigation modal and overlay <
        const modal = document.querySelector("#navigation-box");
        const openModal = document.querySelector("#hamburger-container");
        const overlay = document.querySelector("#overlay");

        openModal.onclick = () => {
            modal.style.display = "flex"
            overlay.style.display = "block"
            openModal.style.display = "none"
        }
        overlay.onclick = () => {
            modal.style.display = "none"
            overlay.style.display = "none"
            openModal.style.display = "block"
        }
        modal.onclick = () => {
            modal.style.display = "none"
            overlay.style.display = "none"
            openModal.style.display = "block"
        }
        //      Navigation modal and overlay >

    }
}

const app = new App()
app.render();