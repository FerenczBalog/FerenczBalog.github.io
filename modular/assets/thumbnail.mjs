import Router from "./Router.mjs"

export default class Thumbnail {
    constructor (props) {
        this.props = props;

        console.log(this.props)
        document.addEventListener('click', (e) => (e.target && e.target.classList.contains("readMore")) && this.onLinkClicked(e));
    }

        onLinkClicked(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            const {name, link} = e.target.dataset;
            Router.instance.pushHistory({name, link});
        }

    render() {
        return`
            <div>
            <div class="thumbnail"> 
                
            <div class="project-img "> 

                <a href="${this.props.websiteLink}" target="_blank" >
                    <h2>
                        ${this.props.projectTitle}
                        <i class="fa fa-external-link" style="font-size: 40%; position: absolute;"></i>
                    </h2>
                    <p style="font-size: 12px;">${this.props.websiteLink}</p>
                </a>
                
            </div>
        
            <div class="short-desc">   

                <button class="thumbnail-button border-left">
                    <a href="projects.html#section-1">Design</a>
                </button>
                <button class="thumbnail-button border-left readMore">
                    <a href="projects.html#section-1" target="_blank">Read more...</a>
                </button>

                <p><strong>Languages:</strong> <br>${this.props.Languages}</p> <br>
                <p><strong>Technologies:</strong> <br>${this.props.Technologies}</p>
                <p><strong>Layout:</strong> <br>${this.props.Layout}</p>
                <p><strong>Responsiveness (100%)</strong> ${this.props.Responsiveness} <br/>
                </p>                 
                
            </div>

        </div>
            </div>            
        `
    }
}