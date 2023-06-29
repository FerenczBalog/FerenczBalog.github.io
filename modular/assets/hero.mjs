export default class Hero {

    render() {      
      return `
        <section id="section-0" class="fullscreen">
          <!-- HERO -->
          <div class="video-container">
            <video controls>
              <source src="/media/mylifedash.mp4" type="video/mp4">
            </video>
          </div>

          <div id="overlay"></div>

          <aside>
            <button id="hamburger-container">
              <div class="hamburger"></div>
              <div class="hamburger"></div>
              <div class="hamburger"></div>
            </button>
            <div id="navigation-box">
              <p>
                <i>
                  <q>If you are curious, you'll find the puzzles around you.<br> 
                  If you are determined, you will solve them.</q><br><br>
                  - Erno Rubik -
                </i>
              </p>
              <div id="navigation">
                <a href="#section-0">Home</a>
                <a href="#section-1">Web development</a>
                <!-- <a href="#section-2">Databases</a>
                <a href="#section-3">Audio</a>           -->
                <a href="#section-4">BiF Enterprise</a>
                <!-- <a href="#section-5">Recomandations</a>                    
                <a href="#section-6">Achievements</a>
                <a href="#section-7">My Story</a>
                <a href="#section-8">My Passions</a>     -->
                <a href="#section-9">About this website</a>
                <a href="#section-10">Contact</a>
              </div>
            </div>
          </aside>

        </section>
      `;
    }
    
  }
  