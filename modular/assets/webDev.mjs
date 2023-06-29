import Thumbnail from "./thumbnail.mjs";

export default class WebDevelopment {

    constructor (data) {
        this.data = data;

        console.log(data)
        this.thumbnails = []
    }     

    get thumbnailMarkup() {
        let thumbnailsHTML = "";
        this.thumbnails.forEach(thumbnail => thumbnailsHTML += `${thumbnail.render()}`);    

        return thumbnailsHTML;
    }

    componentWillRender() {
        if(this.thumbnails.lenght > 0) {
            return;
        }
        this.data.forEach(thumbnail => this.thumbnails.push(new Thumbnail(thumbnail)));
    }

    render() {
        this.componentWillRender(); 
        return `
        <section id="section-1"> <!--       WEB DEVELPMENT         -->

        <div class="section-header">
            <h3>web development</h3>
            <p>my projects</p>
        </div>

        <div class="grid">
            ${this.thumbnailMarkup}
        </div>
    </section>
        `
    }
}