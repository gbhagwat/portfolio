import {Footer} from '../Components/Footer';

import comparison from '../Assets/images/ui-design/comparison-settings.svg';
import gettingStarted from '../Assets/images/ui-design/custom-view-1-getting-started.svg';
import customView2 from '../Assets/images/ui-design/custom-view-2.svg';
import homePage from '../Assets/images/ui-design/home.svg';
import status from '../Assets/images/ui-design/status-settings.svg';

export function UserInterfaceDesign() {
    const nav = {
      home: false,
      prev: '/visual-design',
      next: '/',
      prevText: 'Prev | Visual Design',
      nextText: 'Return Home'
    }

    return (
        <div>
          <section className="container pt-5" id="ui-design">
            <div className="card card-bordered">
            <h2 className="card-title">Custom View #1</h2> 
            <p>Here's a collection of mockups I designed for tracking assets through a dashboard interface.</p>
                <div className="card-body">
                    <h3>Home</h3>
                    <img src={homePage} alt="Custom View #1 Home page" />

                    <h3>Getting Started</h3>
                    <img src={gettingStarted} alt="Custom View #1 Getting Started" />

                    <h3>Status Settings</h3>
                    <img src={status} alt="Custom View #1 Status Settings" />

                    <h3>Comparsion Settings</h3>
                    <img src={comparison} alt="Custom View #1 Comparison Settings" />

                    <h3>Populated Dashboard #1</h3>
                    <img src={customView2} alt="Custom View #1 Populated View #1" />
                </div>
              </div>
          </section>
          <Footer home={nav.home} prev={nav.prev} next={nav.next} prevText={nav.prevText} nextText={nav.nextText} />
        </div>
    )
}