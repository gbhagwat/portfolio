import {Footer} from '../Components/Footer';
import roadmap from '../Assets/doc/NERDBrigadeUXUITeamRoadmap.pdf';
import kickoff from '../Assets/doc/Nebula_Working_Group_InternalKickoff v2.1.pdf';
import guidingPrinciples from '../Assets/doc/Nebula_Guiding_Principles.jpg';

export function UxLeadership() {
    const nav = {
      home: false,
      prev: "/user-research",
      next: "/development",
      prevText: "Previous | User Research",
      nextText: "Front-End Development | Next"
    }

    return (
      <div>
        <section id="leadership" className="container pt-5">
        <div className="grid grid-cols-6">
          <div className="col-span-6">
            <h1>UX Leadership</h1>
          </div>
          <div className="card card-bordered col-span-6">
            <div className="card-body">
              <h2 className="card-title">UX/UI Team</h2>
              <p>
                As team lead, the program manager tasked me with mapping our
                team's path moving forward - our North Star.
              </p>
              <p>
                I was responsible for the team development including collaborating
                on streamlining the design process, obtaining new software, and
                training.
              </p>
              <p>
                I drove the Nebula Design System and Accessibility initiatives for
                the program's apps. I planned on driving user-testing/research
                and documentation initiatives before the work was discontinued.
              </p>
              <embed
                className="mb-5"
                src={roadmap}
                width="1080"
                height="550" />
            </div>
          </div>
          <div className="card card-bordered col-span-6">
            <div className="card-body">
              <h2 className="card-title">
                Nebula Guiding Principles for Design System
              </h2>
              <p>
                I was responsible for the creation of a working group - where
                designers and developers could collaborate in the creation of our
                team's design system.
              </p>
              <p>
                The group needed a defined why and purpose for building the Nebula
                Design System. These principles would guide decision-making and
                provide direction for team members to adhere to the system.
              </p>
              <img
                alt="Nebula Guiding Principles"
                src={guidingPrinciples} />
            </div>
          </div>
          <div className="card card-bordered col-span-6">
            <div className="card-body">
              <h2 className="card-title">Nebula Working Group</h2>
              <p>
                I created the initial kick-off meeting slides for the Nebula
                Design System - setting the expectations and the mission for the
                working group.
              </p>
              <embed
                src={kickoff}
                width="1080"
                height="550" />
            </div>
          </div>
          </div>
        </section>
        <Footer home={nav.home} prev={nav.prev} next={nav.next} prevText={nav.prevText} nextText={nav.nextText} />
      </div> 
    )
}