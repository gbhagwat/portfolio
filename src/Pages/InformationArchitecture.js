import { Footer } from "../Components/Footer";
import Arduino1 from "../Assets/images/info-arch/arduino.png";
import Arduino2 from "../Assets/images/info-arch/arduino2.png";
import Arduino3 from "../Assets/images/info-arch/arduino3.png";
import Arduino4 from "../Assets/images/info-arch/arduino4.png";
import Arduino5 from "../Assets/images/info-arch/arduino5.png";
import UXD from "../Assets/images/info-arch/uxd.jpg";
import CHC from "../Assets/images/info-arch/chc.png";
import CHCwireframe from "../Assets/images/info-arch/chc_wireframe_1.jpg";
import CHCaxure from "../Assets/images/info-arch/chc-axure.png";
import Adam from "../Assets/images/info-arch/persona-adam.png";
import Maria from "../Assets/images/info-arch/persona-maria.png";

export function InformationArchitecture() {
 const home = false;
 const prev = "/visual-design";
 const next = "/user-research";
 const prevText = "Previous | Design";
 const nextText = "User Research | Next";

 return (
 <div>
    <section id="information-architecture">
        <div className="container pt-5">
            <h1>Information Architecture</h1>
            <div role="tablist" className="tabs tabs-bordered">
            {/* Sherwin-Williams */}
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Sherwin-Williams" defaultChecked />
                <div role="tabpanel" className="tab-content">
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h2 className="card-title">Sherwin-Williams Redesign</h2>
                            <blockquote className="blockquote">
                            The HR Employee Benefits department at Sherwin-Williams needed an easy-to-use system for maintaining their own content with the upcoming Open Enrollment season. The department was also in need of an intuitive user interface to reduce user
                            confusion thus reducing the number of employees calling into the department with questions.
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h3 className="card-title">Site Objectives</h3>
                            <h4 className="card-subtitle">Internal & External Target Audiences</h4>
                            <ul>
                                <li>Corporate <abbr title="Information Technology">IT</abbr> Internet Services</li>
                                <li>Corporate <abbr title="Human Resources">HR</abbr> Employee Benefits</li>
                                <li>Sherwin-William Employees</li>
                            </ul>

                            <h4 className="card-subtitle">Business Goals</h4>
                            <ul>
                                <li>Enhance the intranet site to provide an engaging and informative experience.</li>
                                <li>Reduce the number of incoming calls to Employee Benefits by 25%.</li>
                            </ul>

                            <h4 className="card-subtitle">User Goals</h4>
                            <ul>
                                <li>"I want to learn more about the benefit package options and costs for Open Enrollment."</li>
                                <li>"I want answers to my benefits questions about features and coverage."</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h3 className="card-title">Steps to Development</h3>
                            <ul>
                                <li>Performed a competitive analysis of Employee Benefits sites within the manufacturing industry</li>
                                <li>Built an intuitive sitemap for the global navigation system</li>
                                <li>Crafted wireframes to conceptualize the site's layout including the most Frequently Asked Questions on the Home page</li>
                                <li>Structured the site within Serena Collage <abbr title="Content Management Systems">CMS</abbr> using anodular system</li>
                                <li>Developed the layout pages in compliance with the Chameleon Intranet Style Guide using <abbr title="Hypertext Markup Language">HTML</abbr> and <abbr title="Cascading Style Sheets">CSS</abbr></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                        <h3 className="card-title">The Final Product</h3>
                        <p>Employee Benefits received their own project within the organization's <abbr title="Content Management Systems">CMS</abbr> to maintain and update their time sensitive content with minimal direction.</p>
                        <blockquote className="blockquote">The department experienced a <strong>15% reduction in employee question calls</strong> within the 1st month after deployment.</blockquote>
                        <p>They were very satisfied with the results - not only did they end up with a user-friendly content solution, but their users, the employees, gained an informative and valuable resource for
                        all their employee benefits questions.</p>
                        </div>
                    </div>
                </div>
            {/* Philips Healthcare */}
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Philips Healthcare" />
                <div role="tabpanel" className="tab-content">
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h2 className="card-title">Philips Information Architecture</h2>
                            <blockquote className="blockquote">The Field Service Engineers needed a virtual system that would allow them to find spare parts where ever they might be in the
                            world at whatever time of day or night on a service call without depending on the Customer Support department.</blockquote>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                        <h3 className="card-title">Site Objectives</h3>
                        <p>Here are the objectives of the expandable, visual hierarchical system, <abbr title="Electronic Spare Parts Finder">eSPF</abbr>.</p>

                        <h4 className="card-subtitle">Internal & External Target Audiences</h4>
                        <ul>
                            <li>Customer Support Engineers - Domestic and Global</li>
                            <li>Systems Engineers</li>
                            <li>Field Service Engineers</li>
                        </ul>

                        <h4 className="card-subtitle">Business Goals</h4>
                        <ul>
                            <li>Reduce the number of calls and the time spent on those calls within the Customer Support department.</li>
                            <li>Increase the effectiveness and efficiency of the Field Service Engineers when servicing customers in the field.</li>
                            <li>Create an easy to user interface to optimize searchability for new and current Nuclear Medicine Systems.</li>
                        </ul>

                        <h4 className="card-subtitle">User Goals</h4>
                        <ul>
                            <li>"I need to find spare parts without depending on Customer Support."</li>
                            <li>"I need to be able to access this information anytime and anywhere while I'm out in the field."</li>
                            <li>"I want an intuitive system to find the spare parts I need easily and quickly."</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                        <h3 className="card-title">Steps to Development</h3>
                        <ul>
                            <li>Responsible for disseminating information from Nuclear Medicine System <abbr title="Bill of Materials">BOMs</abbr> (consisting of over 10,000 parts), 2D drawings, service manuals and documentation.</li>
                            <li>Developed method for extracting spare parts from system <abbr title="Bill of Materials">BOM</abbr> while maintaining system structure.</li>
                            <li>Designed process for collecting, structuring and importing data into database for the Technical Publications department.</li>
                            <li>Manipulated and hot-spotted graphics, drawings and photos for visual aids to increase ease of use of the system.</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h3 className="card-title">The Final Product</h3>
                            <p>With the first implemented Nuclear Medicine systems deployed, eSPF was well received by the Field Service Engineers.</p>
                            <blockquote>"eSPF is just the system we needed. It saves so much time withminimal effort."</blockquote>
                            <p>Legacy systems are still be imported into eSPM today.</p>
                        </div>
                    </div>
                </div>
            {/* Arduino CC */}
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Arduino CC" />
                <div role="tabpanel" className="tab-content">
                    <div className="card card-bordered">
                        <div className="card-body">
                        <h2 className="card-title">Arduino.cc Information Architecture</h2>
                        <blockquote className="blockquote">The confusing global navigation of the Arduino.cc caused a higher bounce rate than the company had anticipated leading to an Information Architecture 
                        analysis and proposal.</blockquote>
                        <p>Arduino.cc is in need of help for their entire navigation system. The site needs to increase its <em>learnability</em> as it could be very confusing to a new
                        visitor whose accustom to a specific set of standards when navigating the web. The visitor could easily get lost within seconds and become frustrated enough to leave Arduino.cc
                        altogether.</p>
                        <p className="keypoints">The product is complex enough that the site should enhance its <em>navigability</em> to build a better understanding with the
                        potential customer to ease them effortlessly into the new technology.</p>
                        <p>To begin, the global navigation system should be simplified with a reduction in the number of navigational tabs. This might clear up any confusion pertaining to the differences
                        between highly correlated terms (<strong>Buy</strong>, <strong>Download</strong>, <strong>Products</strong>) on the tabs. By grouping all content for selling products together
                        and all content for educating new customers together, an intuitive and effective organization schema could be implemented.</p>
                        <p>Next, a site-specific search system needs integrated into the global navigational system.</p>
                        <p className="keypoints">Customizing this feature versus using Google would be a solid investment as Arduino is a company that relies primarily on their site for selling products.</p>
                        <p>The major search engines are not capable of optimizing the context of every site sufficiently. The content owners of the site have a solid grasp of the industry concepts, jargon and
                        product line to build an efficient search system. Plus, the user does not necessarily want to see Google across their sitesearch results; they would want to see that they are still
                        active on Arduino.cc.</p>
                        <p>The final step to prevent any navigational problems would be the implementation of breadcrumbs across the entire site. When the user visits a page now, the primary navigational tab is
                        highlighted, but beyond that, there is no other indication for where the user is on the site. Before adding the breadcrumbs, there are several links that need to be re-organized. For
                        instance, there could be a navigation dropdown menu for <strong>Reference</strong>, <strong>Language</strong>, <strong>Libraries</strong>, <strong>Comparison</strong>, and
                        <strong>Changes</strong> as we see with the <strong>Buy</strong> or <strong>Support</strong> sections.
                        Another idea would be to include <strong>Foundations</strong>, <strong>Hacks</strong> and <strong>Links</strong> along with <strong>Examples</strong> in the dropdown menu under
                        <strong>Learning</strong>. Once any confusing structure issues are straightened out, the breadcrumbs can be efficiently setup to support the site.</p>
                        <p>Besides the faults of Arduino.cc, the site does have several strengths. Beyond its crowded pages, the content is solid – it
                        just needs to be rearranged so that the users can thoroughly benefit from what the company has to offer. Also, the <strong>Getting Started</strong> section is a great value
                        added guide for welcoming new customers.</p>
                        <div className="grid grid-cols-1">
                                <img
                                    src={Arduino1}
                                    alt="Ardunio.cc 1"
                                    />
                                <img
                                    src={Arduino2}
                                    alt="Ardunio.cc 2"
                                    />
                                <img
                                    src={Arduino3}
                                    alt="Ardunio.cc 3"
                                    />
                                <img
                                    src={Arduino4}
                                    alt="Ardunio.cc 4"
                                    />
                                <img
                                    src={Arduino5}
                                    alt="Ardunio.cc 5"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            {/* CHC Physical Therapy */}
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="CHC Physical Therapy" />
                <div role="tabpanel" className="tab-content">
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h2 className="card-title">CHC Physical Therapy Redesign</h2>
                            <blockquote className="blockquote">
                            CHC Physical Therapy and its web properties, Body Phyx, Golf Phyx, and the Performance Phyx, needs updated for the new era - to create a consistent "look and feel" across the CHC brands
                            and to provide an engaging and enjoyable experience for the end user.</blockquote>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h3 className="card-title">Designing the User Experience</h3>
                            <div className="grid grid-cols-3 gap-2">
                                    <div class="col-span-2">
                                        <p>According to Jesse James Garrett, the field of <a href="http://www.jjg.net/elements/pdf/elements.pdf" target="_blank" rel="noreferrer">
                                        User Experience <i className="fa fa-external-link"></i></a> covers a wide range (from conception to completion) of elements:</p>
                                        <ul>
                                            <li>User Needs & Site Objectives</li>
                                            <li>Content Requirements & Functional Specifications</li>
                                            <li>Interaction Design & Information Architecture</li>
                                            <li>Information Design & Visual Design</li>
                                        </ul>
                                        <p>As a solo designer for this project, I've brainstormed about the various elements that go into the creation of the optimal
                                        user and have drawn the following sketch - aligning aspects of Garrett's elements with today's digital landscape.</p>
                                    </div>
                                    <div>
                                    <img
                                        alt="User Experience Design Elements"
                                        
                                        src={UXD}
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h3 className="card-title">Identifying the Objectives</h3>
                            <h4 class="card-subtitle">Target Audience</h4>
                            <p>The client already has 4 pretty well-defined target audiences that it wants to re-purpose its site content around - The Golfer, The Young Athlete, The Baby Boomer, and The Weekend Warrior. Later in the process, I researched and found a 5th
                            target group - The Desk Jockey - which the client has decided to implement.</p>

                            <h4 class="card-subtitle">Personas</h4>
                            <div className="grid grid-cols-2">
                                <div>
                                    <h5>The Young Athlete</h5>
                                    <img
                                        src={Maria}
                                        alt="Persona of The Young Athlete's Parent"
                                        
                                        />                                    
                                </div>
                                <div>
                                    <h5>The Weekend Warrior</h5>
                                    <img
                                        src={Adam}
                                        alt="Persona of The Weekend Warrior"
                                        
                                        />
                                </div>
                            </div>

                            <h4 class="card-subtitle">Look & Feel</h4>
                            <p>Energized and powerful (sports physical therapy) meets compassionate and natural (holistic wellness approach)</p>

                            <h4 className="card-subtitle">Business Goals</h4>
                            <ul>
                                <li>Strengthen the company's brand to provide a trustworthy, sophisticated and memorable experience.</li>
                                <li>Increase newsletter subscriptions by 25%.</li>
                                <li>Increase leads from the site by 15%.</li>
                                <li>Inspire loyalty among existing patients.</li>
                            </ul>

                            <h4 className="card-subtitle">User Goals</h4>
                            <ul>
                                <li>"I want to learn more about this clinic to determine whether or not it fits my budget and my schedule."</li>
                                <li>"I want to request an appointment for physical therapy immediately."</li>
                                <li>"I want engaging and educational content about the treatment process."</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h3 className="card-title">Conceptualizing the Design</h3>
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <h4 className="card-subtitle">Brand Message Concept Map</h4>
                                    <img 
                                        src={CHC}
                                        alt="CHC Brand" 
                                        
                                        /> 
                                    <h4 className="card-subtitle">Wirefames & Mockups</h4>
                                    <p>Here is a sketch of a potential wireframe incorporating the sister brands into the Home page of CHC. This variation could improve brand consistency across all web properties.</p>
                                    <img
                                        alt="My Sketch of Wireframe for CHC"
                                        
                                        src={CHCwireframe}
                                        />

                                    <p className="py-3">For the following <a href="http://7grngh.axshare.com" target="_blank" rel="noreferrer">CHC prototype</a>
                                    <i className="fa fa-external-link"></i>, I thought I would work with my Axure RP Pro 7.0 software. This page illustrates the standard conventions and maintains the separate identities of the target audiences.
                                    </p>
                                    <a href="http://7grngh.axshare.com" target="_blank" rel="noreferrer">
                                    <img
                                    alt="Axure Prototype for CHC"
                                    
                                    src={CHCaxure}
                                    /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card card-bordered">
                        <div className="card-body">
                            <h3 className="card-title">Design & Development</h3>
                            <p>Unfortunately, I did not get to see my project through until the end due to personal reasons.</p>
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