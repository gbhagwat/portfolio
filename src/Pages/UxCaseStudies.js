import { Footer } from "../Components/Footer";
import psychServices from "../Assets/images/case-studies/psychiatric-services-information-architecture.png";
import oldVersion from "../Assets/images/case-studies/2018_version_page.jpg";
import newVersion from "../Assets/images/case-studies/2022_version.jpg";
import pinkResume from "../Assets/images/case-studies/pink_resume.png";

export function UxCaseStudies() {
    const home = false;
    const prev = "/about";
    const next = "/ux-leadership";
    const prevText = "Previous | About";
    const nextText = "UX Leadership | Next";
    return (
        <div>
            <section id="case-studies">
                <div className="container pt-5">
                    <h1>UX Case Studies</h1>
                    <div role="tablist" className="tabs tabs-bordered">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="User Research" defaultChecked />
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div class="card-body">
                                    <h2 class="card-title">User Research</h2>
                                    <p>
                                        July 20-22, 2023 |<em> A case study on user research for Jen's Psychiatry Services,a mental health care provider's online presence.</em>
                                    </p>
                                    <p>A local psychiatric services provider approached me with building her branding as well as a website for her small business. Jen recognized her internet presence is currently spread across a variety of resources - reviews on Facebook, provider listings on Psychology Today, ZenCare, ZocDoc and Headway.co, etc and wants <em>to create a unified online presence</em>.  After viewing a fellow provider’s newly designed site, she was inspired to further invest in her own site.</p>   
                                    
                                    <p>The branding for her business would need to highlight her <em>unique selling proposition</em> in the fiercely competitive market. What would make someone choose Jen over thousands of other providers across the nation? What image does Jen want to convey to her potential clientele?</p>  

                                    <p>After secondary research - competitive analysis and user data research, <strong>the top concern for potential visitors seeking mental healthcare is trust</strong>.  <em>Trust is a crucial aspect in attracting and retaining patients as mental health is very sensitive and personal topic and individuals seeking help want to feel confident in the provider they choose.</em>  </p>
                                    
                                    <p>Compassion needs conveyed and is the second most important factor in designing and developing a site for individuals seeking mental help. They visit in hopes of finding a trusted provider, but typically in a sensitive state and a place where they fear judgement in their vulnerability.  They are seeking a provider who they believe genuinely cares about their well-being and conveying compassion can provide a warm welcome.</p>                                
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div class="card-body">
                                    <h2 class="card-title">Early Ideation</h2>
                                    <p><strong>Trust</strong>  can be built on a mental healthcare provider website through transparency.  Transparency can be demonstrated on the site through:</p>
                                    <ul>
                                        <li>Clearly displaying credentials, certifications and qualifications demonstrates competence.</li>
                                        <li>Genuine patient testimonials and reviews highlight positive experiences that can help potential patients relate to others who have already received care from the provider</li>
                                        <li>Communicating the provider’s commitment to privacy and confidentiality by assuring visitors that their personal information will be handled with utmost care and in compliance with relevant laws</li>
                                        <li>A professional and well-designed website with consistent branding style instills confidence in potential patients </li>
                                        <li>Providing some educational resources on mental health topics can demonstrate the provider’s expertise and commitment to patient well-being</li>
                                        <li>Transparency in services and fees - clearly outlining services offered by the provider along with their associated fees - can help build trust and prevent misunderstanding </li>
                                        <li>Showcase awards, recognition, or affiliations the mental healthcare provider has received to add credibility to the website and the provider’s expertise</li>
                                        <li>Use Trust Badges and Certifications from reputable mental health organizations or regulatory bodies to reinforce the provider’s credibility</li>
                                        <li>Mention that patient data is secure and compliant with HIPAA regulation to provide peace of mind to visitors if patient data is collected</li>
                                    </ul>
                                    
                                    <p><strong>To practice empathetic design</strong>, we need to demonstrate compassion and sensivity to our potential visitors.  They need to know that their voices are heard and that we understand the challenges they are facing when seeking support online.  A warm, compassionate experience can be supported by implementing these basic concepts and features on our site:</p>
                                    <ul>
                                        <li>Using clear and compassionate language throughout the site</li>
                                        <li>Using calming colors and imagery that resonate with the target audience to put them at ease</li>
                                        <li>Creating a profile featuring their photo, background and personal insights to humanize the providers and to foster a sense of connection</li>
                                        <li>Providing blog articles and videos on mental health topics that remove the stigma can convey to the user that they are not alone in their struggles</li>
                                        <li>Providing multiple contact options can offer visitors reaffirmation that the provider is accessible and responsive as emergencies do arise - patients do not want to feel abandoned in their darkest hour</li>
                                        <li>Writing a detailed About Us page to share the provider’s mission, values and approach to mental healthcare - to help potential patients decide whether they connect with the provider’s philosophy and if it aligns with their needs upfront </li>
                                        <li>Providing a comprehensive FAQ section to address common questions and concerns about mental health services and of the provider’s practice to remove doubt and uncertainty about the provider and their practice</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h2 class="card-title">The Solution</h2>
                                    <p>Jen needs a transparent, collective site that showcases her credentials, endorsements and experience in one place and builds trust and credibility in her online presence.  The user experience should be compassionate, warm and welcoming to create a safe place for people in their most vulnerable moments. </p>    
                                    <p>The Early Ideation will provide me guidance in addressing the objectives.  The project is in its early phase - wireframing is in the works.</p>                                
                                </div>
                            </div>                            
                        </div>
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Information Architecture" />
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h2 className="card-title">Information Architecture</h2>
                                    <p>
                                        July 27-28, 2023 |<em> A case study on Information Architecture  for Jen's Psychiatry Services, a mental health care provider's site.</em>
                                    </p>
                                    <p>After researching competitor sites - psychiatry service providers, I found inconsistencies in the Information Architecture. Either the structures were overly cluttered (containing too many menu items) or they were too simple (having only 3 menu items). I wanted to find a happy medium - ensuring to cover all sections while not confusing the visitor.</p>
                                    <p>When a care seeker decides to take action, they may or may not be in a distraught state. Either way, the last thing you would want is for them to feel isolated by overcomplicating things and potentially making them feel incompetent if it is too hard to find information or overwhelmed with unclear and unstructured content. The plan would be to gently guide them through the decision making process without removing their sense of control in the situation.</p>
                                    <p>The menu items need to be setup in a logical progression. I know the process of consuming site content is not always sequential and not all users will start at the first menu item so the nomenclature of the items should speak for themselves independent of the decision based Information Architecture.</p>
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div class="card-body">
                                    <h2 class="card-title">Navigation Items</h2>
                                    <img src={psychServices} alt="Visual representation of information architecture" />
                                    <p className="mt-4">A potential patient visiting the site might follow the decision making process as follows:</p>
                                    
                                    <ol>
                                        <li>On the Services page,<em> the care seeker can determine if the services provided in this practice align with their needs</em>. In this pivotal moment, they can choose to continue on the path of learning more or leave the site. The Services section needs to be very specific and detailed to remove any uncertainty of what this provider is offering.</li>
                                        <li>If they make the decision to learn more. The alignment of services ideally would be the basis for seeking more information about the provider to determine whether or not they would be an ideal fit for them. <em>The more information they have, the more an informed decision can be made.</em> The About page would include:
                                            <ul>
                                                <li><strong>There would need to be a human factor</strong> - an introduction to the provider with just enough personal information to give them a better glimpse of the provider’s personality.</li>
                                                <li><strong>There should be an outline of what the expect in treatment</strong> - To remove any anxiety in the unknown, this would be their opportunity to familiarize themselves with the provider’s approach to treatment and what they might expect from working one on one with them.</li>
                                                <li><strong>There would need to be credibility</strong> - providing qualifications including education, experience and credentials to showcase they are qualified to provide the services they offer.</li>
                                            </ul>
                                        </li>
                                        <li>If their needs match the provider’s services and they feel trust and bonding from their experience thus far, they would want to know if they can afford what the provider has to offer. <em>Fees should always be upfront and transparent to remove any unnecessary anxiety.</em> Financial reasons should not be the reason a patient does not get the help they are seeking. If this is a major deciding factor, they can always visit the Fees page without any friction as it is quite clear in the menu items.</li>
                                        <li>In this step, the care seeker should have a pretty solid idea if they want to seek help from this provider. The Contact page would provide them with the first action step in either reaching out or scheduling their first appointment. <em>There should be instant feedback on what to expect next.</em> A clearly defined timeline when they might hear back from the provider or that their appointment is official and there are no additional steps needed for them to take.</li>
                                        <li>If they have chosen to take that step to contact the provider, the Resources page could provide instant information confirming they have made the right decision as their provider is resourceful and thoughtful with this extra information or even <em>further clear their mind about what they are experiencing with helpful content</em>. There could be content to further educate themselves on their condition, what steps they can take by themselves now to get instant relief and where else they can find help.</li>
                                        <li>The Clients page could house all the new patient forms and billing and forms for existing customers. This would show all the pertinent documentation.  If the care seeker has become a Client, there could be a FAQs section for answering the most sought after questions from clientele.</li>
                                    </ol>

                                    <p>The users will be provided with links to the next section as page navigation on the bottom of each page to gently guide them through their decision making journey.</p>                                                
                                </div>
                            </div>
                        </div>        
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="UX/UI Design" />
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div class="card-body">
                                    <h2 class="card-title">UX/UI Design</h2>
                                    <p>
                                        February 15-22, 2002 |<em> A case study on modernizing the design and reviving the content of
                                        my portfolio.</em>
                                    </p>
                                    <p>
                                        <strong>A portfolio is required</strong> to apply for the Design
                                        CoP within the US Digital Services. They want applicants to
                                        demonstrate design thinking and to document their thought
                                        process.
                                    </p>
                                    <p>
                                    After deciding to apply for the Design CoP, I knew I needed to revitalize my portfolio. I don't get the opportunity very often and I get around to redesigning every 4 years or so.  The content was antiquated and the look and feel needed a makeover.
                                    </p>
                                    <p>Unfortunately, due to the nature of my employment, there is very little that I can share to the public.
                                    <em>It's very disheartening as I can't display 7 years of design and development over 20 projects as a demonstration of my work.</em>. I would love for my portfolio to land me a job where I can finally
                                    <strong>share my work with the world</strong>.
                                    </p>
                    
                                    <img
                                        src={oldVersion}
                                        alt="My first attempted redesign in 2018"
                                        />
                                    <span className="caption">My Portfolio 2018</span>                                    
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h2 className="card-title">The Challenges</h2>
                                    <ol>
                                        <li>Very short turnaround</li>
                                        <li>Not being able to share my work</li>
                                        <li>No time to build it out into Svelte components</li>
                                        <li>Styling the entire site</li>
                                    </ol>                                    
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div class="card-body">
                                    <h2 class="card-title">Design & Research</h2>
                                    <p>
                                    Fortunately, I recently started reviving my branding in a new version of my resume.</p>
                                    <p><em>Color Palette</em> --- I chose a purple and pink palette as it's very vibrant and lively. Both were backed by color psychology -  Purple can be connected to creativity and wisdom. It actually stimulates the brain activity used in problem solving. Whereas pink with its bright and cheerful appearance signifies hope. Someone seeing the world through rose-tinted glasses are seeing it with excessive optimism. I believe creativity and optimism.</p>
                                    <p><em>Typography</em> --- I chose Open Sans as my all-time favorite Sans Serif that paired well with Montserrat - my favorite Serif in the moment.
                                    </p>
                                    <p><em>Navigation & Context</em> --- I chose to narrate my journey through UX and design while showcasing my work. From dreaming of being a imagineer to my first role at CACI, I wanted to really demonstrate all my career dreams and goals that led me where I am today. I'm ready to take the next step in that journey. My ultimate dream job is to design the UX and UI for sites that reach thousands of users in a rewarding role with purpose. I want the role that I imagined when I first graduated with my Masters in UX back in 2014. </p>
                                    <p><em>Protoypes</em> --- Before this rennovation, I was in the process of creating the Adobe XD prototypes to incorporate my new branding into my portfolio.  So, the timing worked out well.
                                    </p>
                                    <img
                                        src={pinkResume}
                                        className="img-fluid w-75"
                                        alt="Gabrielle Bhagwat pink resume"
                                        />
                    
                                    <p>
                                    I extensively researched other UX/UI Designer and Front-End Developer portfolios for inspiration as to the amount of work showcased, navigation, branding and UX. I wanted my USP - unique selling proposition - to be that I'm a Full-Stack Designer. I'm a UX unicorn that has expertise across the front-end.  I'm a designer that can code. From accessibility to designing the UX and the UI - and in the end, bringing my design to life through development. Building the pages and components as well as programming the microinteractions to provide users with an engaging experience.
                                    </p>
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h2 className="card-title">The Results</h2>
                                    <ul>
                                        <li>The hiring process ignited the spark to breathe new life into my portfolio.</li>
                                        <li>It gave me the opportunity to move the content of gabriellezwilling.com to gabriellebhagwat.com after 8 years.</li>
                                        <li>Unfortunately, applying to U.S. Digital Services triggered this redesign; I ended up staying within CACI.</li>
                                    </ul>                
                                    <img
                                        src={newVersion}
                                        
                                        alt="2022 Version of my portfolio"
                                        />
                                    <span className="caption">The Final Product 2022</span>                                    
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h2 className="card-title">Lessons Learned</h2>
                                    <ol>
                                        <li>
                                            Redesign is a long and tedious process; I'm going to manage my
                                            site more wisely. I'll make updates immediately after projects
                                            while it's still fresh in my mind.
                                        </li>
                                        <li>
                                            Reusable Svelte components will help with maintenance.
                                            Obviously, building the site in static html + css is inefficient and
                                            painful now and in the long run.
                                        </li>
                                    </ol>                                    
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