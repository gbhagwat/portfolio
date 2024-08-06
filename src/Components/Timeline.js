import '../Assets/styles/timeline.css';
import { Link } from 'react-router-dom';

export function Timeline(){
    return (
        <>
        <section id="timeline" className="timeline_journey">
        <div className="container">
          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInLeft">
              <div className="timeline-img-header header-disney">
                <h2>A Girl With A Dream</h2>
              </div>
              <div className="date">Early 2000s</div>
              <p>
                I fell in love with <em>all things web</em> when I was introduced
                to “the internet". The technology, design and sense of community behind the internet was magical in itself.  As I was teaching myself HTML on my Gateway computer in high school, I dreamt of becoming a Disney Imagineer and designing stellar sites for the most magical place on earth, Disney World.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>
            <div className="timeline-content timeline-card js--fadeInRight">
              <div className="timeline-img-header header-sherwin">
                <h2>My First Internet Gig</h2>
              </div>
              <div className="date">2006-2008</div>
              <p>
                During college, I started my first internship at Sherwin-Williams
                Corporate Headquarters as a Web Analyst Co-op.  Thanks to my internship, I got the opportunity to attend an IAI (Information Architecture Institute) Conference at Progressive Insurance.
                That's where I had my 'aha' moment that I wanted to devote my
                career to helping users interact with technology.
              </p>
              <p>
                My first <abbr title="Information Architecture">IA</abbr> project was the redesign of the Corporate HR Employee Benefits site. With the redesign and development of the site, I seized the opportunity to teach myself CSS.
              </p>
              <Link
                className="bnt-more btn btn-outline-primary"
                to="/information-architecture">
                More</Link>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInLeft">
              <div className="timeline-img-header header-tech">
                <h2>Technical Communications</h2>
              </div>
              <div className="date">2008-2015</div>
              <p>
                In 2008, after a recruiter asked me if I knew how to use a camera and PowerPoint, my career as a Technical Writer began as a fluke at
                Fluke Biomedical. Pursuing the career path seemed logical and I was eventually recruited by Philips Healthcare and Nelson Stud
                Welding.
              </p>
              <p>
                I gained valuable UX skills as a Technical Writer - empathy for
                the users of my products, knowing the right questions to ask,
                learning to simplify and create visuals for complex concepts.
              </p>
              <Link
                className="bnt-more btn btn-outline-primary"
                to="/information-architecture">
                More</Link>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInRight">
              <div className="timeline-img-header header-college">
                <h2>My Education</h2>
              </div>
              <div className="date">2004-2014</div>
              <p>
                I worked full-time throughout my college years as I pursued my
                Bachelors of Arts in Communications at Cleveland State University
                (2009) and Masters of Science, IAKM (Information Architecture and Knowledge Management), User Experience Design, at
                Kent State University (2014).
              </p>
              <p>
                In 2004, after starting my career at Sherwin-Williams, attending an <abbr title="Information Architecture Institute">IAI</abbr> conference and discovering the <abbr title="Information Architecture and Knowledge Management">IAKM</abbr> program at Kent State University, I realized I wanted to a career in bridging the gap between technology and users.
              </p>
              <p>
                I individualized my coursework to support a breadth of knowledge and perspective across several disciplines - business, communications, design, research, technology and psychology - to complement my anticipated Masters degree.
              </p>
              <Link
                className="bnt-more btn btn-outline-primary"
                to="/ux-principles">
                More</Link>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInLeft">
              <div className="timeline-img-header header-ux">
                <h2>Becoming a UX/UI Designer</h2>
              </div>
              <div className="date">2015-2023</div>
              <p>
                I moved from Ohio to Northern Virginia after getting my first role
                as a UX/UI Designer at CACI International.
              </p>
              <p>In my first 6 years at Media Services Center, I served a variety of roles - Accessibility SME, Lead Designer and Designer/Developer - advocating for the user on 20+ projects including employee sites and mission critical apps. I taught myself JavaScript to support my development projects.
              </p>
              <p>Upon returning from maternity leave in 2021, I realized I was ready to move on, I landed a UX Designer role on the AMOD program, where I was quickly promoted to Team Lead - driving Accessibility and Design System initiatives. Unfortunately, CACI lost the contract in April 2022.
              </p>
              <p>Upon redeployment at CACI, I took a Front-End Developer role as a great opportunity to gain modern front-end frameworks experience. Since polishing the UI on the newest app, I've been advocating for a design system - consistency in the UI - across all apps.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-img"></div>

            <div className="timeline-content timeline-card js--fadeInRight">
              <div className="timeline-img-header header-now">
                <h2>Making Moves</h2>
              </div>
              <div className="date">Now</div>
              <p>
                I've realized I want to return my focus to design and land the job in an organization that values UX design as I imagined when I graduated from my Masters program.
              </p>
              <p>I'm ready for the next chapter - the ideal rewarding role which will provide me the resources to build a better UX while contributing to the greater good.
              </p>
            </div>
          </div>
        </div>
        </section>
        <nav aria-label="Page navigation" className="flex flex-col mt-5">
            <ul className="flex flex-row justify-content-center self-center">
              <li className="page-item">
                <Link className="btn btn-outline-primary" to="/#kudos"
                >READ WHAT OTHERS ARE SAYING
                  <span className="sr-only">About Gabrielle</span></Link>
              </li>
              <li className="page-item">
              <Link
                  className="bnt-more btn btn-outline-primary"
                  to="/resume">
                  READ MY RESUME</Link>
              </li>
            </ul>
        </nav></>    
    )
}