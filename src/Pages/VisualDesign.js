import {Footer} from '../Components/Footer';

import makalu1 from "../Assets/images/design/makalu1.png";
import makalu3 from "../Assets/images/design/makalu3.png";
import makalu4 from "../Assets/images/design/makalu4.png";
import seal from "../Assets/images/design/seal.png";
import sealMakalu from "../Assets/images/design/seal_makalu.png";

export function VisualDesign() {
  const nav = {
    home: false,
    prev: '/development',
    next: '/ui-design',
    prevText: 'Previous | Front-End Development',
    nextText: 'UI Design | Next'
  }  

    return (
        <div>
          <section className="container pt-5" id="design">
            <div className="grid grid-cols-6 gap-12">

                    <div className="col-span-3 card card-bordered">
                    <div className="card-body">
                    <h2 className="card-title">Makalu Landing Page</h2>
                    <p>
                      As UI Designer for the team, I was responsible for giving the team
                      several options for a redesign of the Makalu products landing page
                      - routing users to Bodhi, MOST and ChatSurfer. Originally, the
                      page was built as a landing for Bodhi, but since the program's
                      growth - the page needed to take account for the newest app, MOST,
                      and Chatsurfer (combined with the Bodhi team).
                    </p>
                    <p>
                      <strong>#1. Empathasize</strong> - Collected feedback from several
                      product owners, the ticket writer, the PMO and others to get an
                      ideal the purpose of the redesign. I found out there wasn't a
                      strong unity between the CO and VA teams. The Makalu name appeared
                      to be all they shared. Some said the Makalu name itself had no
                      meaning without the app names. There were very split views.
                    </p>
                    <p>
                      <strong>#2. Define</strong> - The page was to create a Makalu
                      landing page showcasing its suite of apps. The redesign of the
                      landing page drove the rebranding of Makalu - which currently
                      existed as a stand-alone logo. The rebranding stemmed from the
                      need for unity between these mission critical apps and to educate
                      users on the benefits of these complementary tools. With the
                      branding of Bodhi and Chatsurfer being vastly different, Makalu is
                      the only way the customer and the users would know they co-exist
                      for a reason.
                    </p>
                    <p>
                      <strong>#3. Ideate</strong> - Makalu is the 5th largest mountain.
                      The Makalu logo already had a mountain. When I started
                      brainstorming, The mountains brought several themes together - a
                      mountain top is a symbol of initiation and the mountains
                      themselves represented overcoming obstacles and making progress.
                      The irony of 'overcoming obstacles' - as far as the turmoil in
                      joining 2 vastly different teams - work styles and culture -
                      across the country together. I used monotone for the logos to mesh
                      into the new Makalu branding. End users are deeply tied to the
                      current day branding of the separate apps, but Makalu represents
                      that unity.
                    </p>

                    <p>
                    <strong>#4. Prototype</strong> - Since it wasn't an extensive
                    site, I chose to jump directly into design with the palette
                    colors, stand-alone logo and content pre-existing. Beyond the
                    equal representation of all 3 mission critical apps, there was not
                    much needing changed with the limited scope of the internal
                    project. I designed 2 high fidelity mockups to provide team
                    members with choices for the 'look and feel' of the product
                    landing page. I wanted to give them a chance for their voices to
                    be heard in development of the team branding.
                  </p>
                  <p>
                    <strong>#5. Test</strong> - I collected user feedback from team
                    members as well as took a vote to include all levels of the team
                    in the direction of the design. After incorporating user feedback
                    into several new iterations, the vote ended up quite close so I
                    began working the rest of the pages as for a possible tie breaker
                    - when the project was put on hold due to internal politics. The
                    irony was there was a equal split in how the team members
                    envisioned the representation of Makalu within our team and to our
                    customer.
                  </p>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <img alt="" src={makalu4} />
                    <img alt="" src={makalu1} />
                    <img alt="" src={makalu3} />     
                  </div>                    

                <div className="col-span-6 card card-bordered">
                  <div className="card-body">
                    <h4 className="purple my-3">Makalu Seal Variations</h4>
                    <p>
                      I designed the seal - inspired by our customer - to visually
                      inspire a shared vision across the Bodhi, MOST and Chatsurfer
                      teams in CO and VA. The branding visually represented that unity.
                      The seal design was put on hold along with the landing page.
                    </p>                        
                  </div>
                </div>
                <div className="col-span-6 grid grid-cols-2">
                <div>
                  <img alt="" src={seal} />
                </div>
                <div>
                  <img alt="" src={sealMakalu} />
                </div>
            </div>
          </div>
          </section>
          <Footer home={nav.home} prev={nav.prev} next={nav.next} prevText={nav.prevText} nextText={nav.nextText} />
        </div>
    ) 
}