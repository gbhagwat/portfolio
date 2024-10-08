import profilePic from '../Assets/images/profile.jpg';
import {Link} from 'react-router-dom';
import {Footer} from '../Components/Footer';

const roles = [
  { title: 'Front-end developer', id: 1, summary: 'Develop UIs using Svelte, VueJS and React with a focus on usability and accessibility.' },
  { title: 'Web designer', id: 2, summary: 'Crafted intuitive wireframes, sitemaps and prototypes in Adobe XD and Figma.' },
  { title: 'Interaction designer', id: 3, summary: 'Crafted intuitive user interfaces and systems for people to interact with information - find it,  search it and use it.' },
  { title: 'Information strategist', id: 4, summary: 'Organized information from complex technical systems into user-centered structures to support better navigation.'},
  { title: 'Content manager', id: 5, summary: 'Performed competitive analysis, built information architecture, and designed user-friendly interfaces to redesign an intranet site.'},
  { title: 'Graphic designer', id: 6, summary: 'Design graphics for branding products, such as landing pages, logos, and icons.'}
];


export function About() {

  const nav = {
    home: false,
    prev: "/",
    next: "/resume",
    prevText: "Return Home",
    nextText: "Resume | Next"
  }  

    const listItems = roles.map(role =>
      <li key={role.id}>
        <em>{role.title}.</em> {role.summary}
      </li>
    );
    return (
        <div>
          <section className="container mt-10" id="about">
            <div className="grid grid-cols-5 gap-12">
              <div className="col-span-4">
                <h1>Hey there...</h1>
                <p>I'm a <strong>NOVA-based designer & developer</strong> who fell in love with <i>all things web</i> when I was introduced to the internet.</p>
                <p>My dream growing up was to become a Disney Imagineer and design sites for the most magical place on earth, Disney World.</p>
                <p>After graduating with my Masters of Science in User Experience Design, I landed an opportunity to make <em>my dreams partially come true</em>. </p>
                <p>In 2015, I started my first role solely as a UX/UI Designer at CACI International where I've been crafting amazing digital experiences ever since.</p>
                <p>Beyond <strong>my passion for design and code</strong>, you can find me spending time with my family (husband + 3 kids), taking my fitness to a new level, 
                  appreciating the beauty of the outdoors and discovering new places.</p>
                <p><strong><Link to="/#kudos">Read what others have to say about me + my work.</Link></strong></p>

                <h2 className="pt-4">My UX journey was beyond linear...</h2>
                <p><em>The skills and views I gained throughout my career have supported my role as a UX/UI designer</em>.</p>
                <p>All my experiences have taught me empathy and have allowed me to serve in a variety of roles contributing to the creation of the
                  optimal experience for the end user:</p>

                <ul>
                  {listItems}
                </ul>

                <h2 className="pt-4">My design process is constantly evolving...</h2>
                <p><em>Every problem solicts a unique solution.</em></p>
                <p>
                  Before laying pen to paper, I meet with the customer to gather
                  requirements. After our initial meeting and more research, I can
                  identify the following to define the problem:
                </p>
                <ul>
                  <li>the users' pain points</li>
                  <li>the intended audience</li>
                  <li>the purpose of the product</li>
                  <li>the context behind how and why it is being used</li>
                </ul>

                <p>
                  Once the problem is defined, I can start brainstorming possible
                  solutions. I'm constantly evaluating to ensure that my ideas align
                  with both the user and the business goals.
                </p>
                <p>
                  After I settle on several solutions, I can proceed by putting my
                  ideas to paper. Sketching them out helps me to visualize the
                  direction I'm heading.
                </p>
                <p>
                  When I'm confident to move forward, I start wireframing in Adobe
                  Illustrator or Adobe XD and integrate my findings into my design.
                </p>
                <p>
                  Once the layout is determined, I can begin designing the 'look and
                  feel'. Typically, I create a mood board for inspiration from
                  branding/logos and the existing site (for redesigns). Then, I
                  define my color palette and typography as a foundation that ties
                  all the content and visual elements together. From there, I can
                  experiement by designing several mockups to demo to the customer
                  to ensure they have the same vision for the end product.
                </p>
                <p>
                  After the stakeholders sign off, I can start crafting interactive
                  prototypes using Adobe XD or Figma. From there, they are
                  continuously updated through multiple iterations of feedback and
                  testing until being finalized and ready for code.
                </p>
                <iframe
                  title="Design process"
                  width="800"
                  height="450"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJn4SRRClbYhUsQKmOD0bct%2FDesign-Process%3Fnode-id%3D0%253A1"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="flex flex-col">
                <img
                  src={profilePic}
                  alt="Gabrielle Bhagwat"
                />
              </div>
            </div>
          </section>
          <Footer home={nav.home} prev={nav.prev} next={nav.next} prevText={nav.prevText} nextText={nav.nextText} />
        </div>
    ) 
}