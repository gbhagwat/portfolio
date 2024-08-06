import { Footer } from "../Components/Footer";

export function Resume() {
    const home = false;
    const prev = "/user-research";
    const next = "/";
    const prevText = "Previous | User Research";
    const nextText = "Return Home";
    return (
        <div>
            <section id="resume">
                <div className="container pt-5">
                    <h1>Resume</h1>
                    <div role="tablist" className="tabs tabs-bordered">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Profile" defaultChecked />
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <blockquote>Passionate Sr UX/UI Engineer with 17 years experience in design and development. Expertise in using JavaScript, HTML, and CSS to build all aspects of the user experience and user interface for client-facing applications. Specializes in JavaScript Frameworks/Libraries for building
                                    robust interfaces and Adobe XD for designing interactive prototypes. Proven experience managing over 17+ design & development projects from conception to completion for government customer. Achievements include receiving 3 Multimedia Production Website awards within the community and the Encore for Excellence CACI award for teamwork on application. </blockquote>                                    
                                </div>
                            </div>
                        </div>
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Experience" />
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <div className="grid gap-4 grid-cols-3">
                                        <div className="col-span-3">                                    
                                            <p className="company">CACI International | <span className="location">Multiple Locations</span></p>
                                        </div>

                                        <div className="col-span-1">
                                            <p className="position">UX/UI Designer & Front-End Developer IV</p>
                                            <p className="timeline">Apr 2022 - Present</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Design and develop new features and pages using Svelte, SvelteKit and TailwindCSS</li>
                                                <li>Create UI mock-ups and prototypes with Figma, the translate design layout into code</li>
                                                <li>Create design standards for consistency throughout application</li>
                                                <li>Design logo, icons and marketing graphics using Adobe illustrator</li>
                                                <li>Developed Backend service utilizing Java, SpringBoot and JPA Repository</li>                                        
                                                <li>Deployed application using ArgoCD, Docker and Kubernetes</li>
                                                <li>Manipulated data with PostGreSql</li>
                                                <li>Tested APIs using Karate Framework</li>
                                                <li>Documented workstation setup, deployment processes and Karate procedures</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-1">
                                            <p className="position">UX/UI Designer IV / Team Lead</p>
                                            <p className="timeline">Dec 2021 - Apr 2022</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Lead UX/UI Team</li>
                                                <li>Develop UX/UI Roadmap to define team’s future path</li>
                                                <li>Advocate for Accessibility and Design System initiatives</li>
                                                <li>Author Accessibility guidelines and created evaluation template</li>
                                                <li>Assess Section 508 compliance of existing apps</li>
                                                <li>Master Adobe XD</li>
                                                <li>Conducted Inventory Interface (atomic design) for our design system</li>
                                            </ul>
                                        </div>                                

                                        <div className="col-span-1">
                                            <p className="position">UX/UI Designer & Front-End Developer II/III</p>
                                            <p className="timeline">Nov 2016 - Dec 2021</p>
                                            
                                            <p className="position">UX/UI Designer</p>           
                                            <p className="timeline">Nov 2015 - Nov 2016</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Crafted wireframes, mockups and prototypes based on client requirements</li>
                                                <li>Developed apps with mastery of CSS, HTML, JavaScript</li>
                                                <li>Led SharePoint projects from design and development</li>
                                                <li>Implemented technical solutions for Section 508/WCAG compliance</li>
                                                <li>Served as lead designer on award-winning, agency-wide personnel app</li>
                    
                                                <li>Led redesign of agency-wide WordPress site from UX to deployment</li>
                                                <li>Designed and developed optimized dashboard, metrics, reports, and search for Front Office package tracking app </li>
                                                <li>Guided remote team working with NSA on the Accessibility remediation effort overhauling IntelligenceCareers.gov for Section 508 compliance</li>
                                            </ul>                       
                    
                                        </div>
    
                                        <div className="col-span-3">                         
                                            <p className="company">Nelson Stud Welding | <span className="location">Elyria, Ohio</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="position">Technical Communicator</p>
                                            <p className="timeline">Dec 2011 - Nov 2015</p>


                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Published over 100 technical data sheets which have provided the Sales staff with the necessary Applications information to present and sell products to customers</li>
                                                <li>Developed Applications Development intranet site using Dreamweaver (<abbr title="Cascading Style Sheets">CSS</abbr> + <abbr title="Hypertext Markup Language">HTML</abbr>)</li>
                                                <li>Re-organized content and structure of internal catalog to better support navigation for internal users</li>
                                                <li>Provided operation and troubleshooting instructions for stud welding equipment to the customer</li>
                                                <li>Designed Feature Product landing pages using Bootstrap Framework (<abbr title="Cascading Style Sheets">CSS</abbr> + <abbr title="Hypertext Markup Language">HTML</abbr>)</li>
                                                <li>Produced stud welding and equipment videos to support marketing at industry conferences</li>
                                                <li>Designed publications to support Sales in marketing products to the customer</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-3">
                                            <p className="company">CHC Physical Therapy | <span className="location">Cleveland, Ohio</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="position">Freelance <abbr title="User Experience">UX</abbr> Consultant</p>
                                            <p className="timeline">Feb 2014 - Oct 2014</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Designed and developed all web properties having consistent feel and look using Foundation (<abbr title="Responsive Web Design">RWD</abbr>)</li>
                                                <li>Crafted interactive prototypes using Axure for for redesign of all web properties </li>
                                                <li>Structured sitemaps and wireframes in Balsamiq applying information architecture principles</li>                    
                                                <li>Devised content strategy including content inventories, personas, and competitor analysis</li>
                                                <li>Exhibit clear understanding of overall client messaging and develop search marketing creative, including but not limited to keyword generation and <abbr title="Search Engine Optimization">SEO</abbr> copy creation</li>         
                                                <li>Develop long-term strategy for positioning, branding and enhancing the reputation of the organization through web and social media</li>
                                                <li>Ensure consistent and open communication with client via weekly optimization updates</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-3">
                                            <p className="company">Philips Healthcare | <span className="location">Cleveland, Ohio</span></p>
                                        </div>
                                        <div className="col-span-1">                                    
                                            <p className="position">Technical Writer (Contractor)</p>
                                            <p className="timeline">Dec 2009 - Dec 2010</p>
                                            <p className="position">Technical Writer Intern</p>
                                            <p className="timeline">May 2009 - Dec 2009</p>

                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Supervised the documentation creation process for an upgrade to a Nuclear Medicine System</li>
                                                <li>Authored the manual which supplied instruction for a team of two field service engineers to simultaneously complete the 52 hour complete software upgrade by themselves.</li>
                                                <li>Worked on the importation of Nuclear Medicine System structures into a website which allowed Field Service Engineers to easily navigate and identify spare parts remotely</li>
                                                <li>Authored maintenance, service and troubleshooting instructions for highly complex, software-driven, electro-mechanical imaging systems to Field Service Engineers</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-3">
                                            <p className="company">Fluke Biomedical | <span className="location">Solon, Ohio</span></p> 
                                        </div>
                                        <div className="col-span-1">
                                            <p className="position">Technical Writer</p>
                                            <p className="timeline">Apr 2008 - May 2009</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Provided assembly instructions for highly complex, electro-mechanical radiation measurement systems which were provided to the staff as a means of cross-training</li>
                                                <li>Designed templates for all training material and assembly manuals</li>
                                                <li>Photographed assembly process and created visual aids for manuals</li>
                                                <li>Managed supporting documentation process</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-3">
                                            <p className="company">Brulant | <span className="location">Beachwood, Ohio</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="position"><abbr title="Search Engine Optimization">SEO</abbr> Analyst Intern</p>
                                            <p className="timeline">Oct 2007 - Jan 2008</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Assisted in building traffic to client sites through <abbr title="Search Engine Optimization">SEO</abbr> tactics, social media and copywriting</li>
                                                <li>Researched and implemented Social Media Marketing Strategy</li>
                                                <li>Wrote search engine optimized web content for client sites for organic search</li>
                                                <li>Executed link, rank &amp; index aspects for client deliverables</li>
                                            </ul>
                                        </div>

                                        <div className="col-span-3">
                                            <p className="company">Sherwin-Williams HQ | <span className="location">Cleveland, Ohio</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="position">Web Analyst Co-op</p>
                                            <p className="timeline">Mar 2006 - Oct 2007</p>
                                        </div>
                                        <div className="col-span-2">
                                            <ul>
                                                <li>Re-designed the intranet site to provide employees with a more user-friendly interface in order to reduce the number of customer service calls to the department</li>
                                                <li>Diagrammed navigation flows and sitemaps with MS Visio</li>
                                                <li>Managed governance and troubleshooting of Chameleon intranet pages using <abbr title="Cascading Style Sheets">CSS</abbr> + <abbr title="Hypertext Markup Language">HTML</abbr> within Serena Collage Content Management Systems</li>
                                                <li>Developed secure log in account pages as a means of giving affiliates of Sherwin-William access to their discounts and incentives for being our partners within Sher-Link project</li>
                                                <li>Designed logos for Sher-Link partners using Adobe Fireworks </li>
                                                <li>Provided <abbr title="Information Technology">IT</abbr> and marketing personnel with statistics for website traffic using WebTrends</li>
                                                <li>Introduced <abbr title="Search Engine Optimization">SEO</abbr> concepts to the marketing staff and provided them with an explanation of their rankings before and after their site's redesign</li>
                                            </ul>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>   
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Education" />
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <div className="grid gap-4 grid-cols-2">
                                        <div className="col-span-1">
                                            <p className="position">Masters of Science, <abbr title="Information Architecture & Knowledge Management">IAKM</abbr>, <span className="timeline">August 2014</span></p>
                                            <p className="company">Kent State University | <span className="location">Kent, Ohio</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <ul className="fa-ul clearfix">
                                                <li>Focus:&nbsp;<strong>User Experience Design</strong></li>
                                                <li>Cumulative GPA:<strong>&nbsp;3.76</strong> / 4.00</li>
                                            </ul>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="position">Bachelors of Arts, Cum Laude, Communications, <span className="timeline">December 2009</span></p>
                                            <p className="company">Cleveland State University | <span className="location">Cleveland, Ohio</span></p>
                                        </div>
                                        <div className="col-span-1">
                                            <ul>
                                                <li>Minor:&nbsp;<strong>Business Administration</strong></li>
                                                <li>Cumulative GPA:<strong>&nbsp;3.43</strong>&nbsp;/ 4.00</li>
                                            </ul>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>                                             
                    </div>
                </div>
            </section>
            <Footer home={home} prev={prev} next={next} prevText={prevText} nextText={nextText} /> 
        </div>
    ) 
}