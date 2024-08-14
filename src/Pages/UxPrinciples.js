import { Footer } from "../Components/Footer";
import Registration1 from "../Assets/images/ux-principles/registration-system-1.png"
import Registration2 from "../Assets/images/ux-principles/registration-system-2.png";
import Registration3 from "../Assets/images/ux-principles/registration-system-3.png";
import UXSitemap from "../Assets/images/ux-principles/uxd_sitemap.png";
import HeuristicEval from "../Assets/images/ux-principles/heuristic-eval-1.jpg";
import ConceptMap from "../Assets/images/ux-principles/concept_map.png";
import ContentInventory from "../Assets/images/ux-principles/content-inventory.png";
import Process from "../Assets/images/ux-principles/process.png";
import AppWireframe from "../Assets/images/ux-principles/app-wireframe.png";

export function UxPrinciples() {
    const nav = {
        home: false,
        prev: "/information-architecture",
        next: "/usability-study",
        prevText: "Previous | Information Architecture",
        nextText: "Usability Study | Next"
    }    

    return (
        <div>
            <section id="ux-principles">
                <div className="container pt-5">
                    <h1>UX Practice & Principles</h1>
                    <p>My team and I incorporated the <abbr title="Kent State University">K.S.U.</abbr> 
                    <abbr title="Information Architecture & Knowledge Management">IAKM</abbr> LUMEN Model into the K.S.U. 
                    registration system redesign - see the illustrated steps we took in the planning process. Our team 
                    also was responsible for deliverables - concept maps, competitive review, sitemaps, content inventories 
                    and process flows, etc - for the redesign of the <abbr title="User Experience Design">UXD</abbr> 
                    concentration within the <abbr title="Information Architecture & Knowledge Management">IAKM</abbr> 
                    graduate program.</p>  

                    <div role="tablist" className="tabs tabs-bordered">
                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Registration System" defaultChecked/>
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h2 className="card-title">LUMEN Model</h2>
                                    <p><em>The project was researching the site and the user, implementing those changes, evaluating the site's performance and then informing stakeholders of the outcome of the redesign.</em></p>
                                    <div role="tablist" className="tabs tabs-bordered">
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Learn" defaultChecked />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h2 className="card-title">Learn</h2>
                                                    <h3 className="card-title">User and Stakeholder Research</h3>
                                                    <p>The Kent State University Registrar’s Office site provides students with an online system to enroll for their courses each semester. The office has received negative feedback from the students pertaining to their site’s design and functionality. Currently, it is not serving as a user-friendly site for the students to enroll in their courses. Also, it’s not very “fun to use” nor does it have the modern look and feel that the students desire.</p>
                                                    <h4 className="card-subtitle">Objectives</h4>
                                                    <ul>
                                                        <li>On a scale of 1 (really appealing) to 5 (really unappealing), the users will rate the site a 3. </li>
                                                        <li>Users will be able to use this site the first time without any training. </li>
                                                        <li>Users will not visit more than three incorrect pages in completing a task.</li>
                                                    </ul>
                                                    <table className="table table-zebra table-hover ">
                                                        <tbody>
                                                        <tr>
                                                            <td><p><strong>Method 1: Interview</strong></p>
                                                            <p>User feedback is driving this project. The students want a more “modern” feel to the site and a “fun to use” interface.</p>
                                                            <p>Interviewing gives the researcher the opportunity to dig deeper.</p> 
                                                            <p>One-on-ones are beneficial in collecting unbiased data (Wilson). </p>
                                                            <p>Interviews with existing or potential users are essential in understanding individual’s preferences and attitudes (52 Weeks of UX). </p>
                                                            <p>They will not only provide insight from the students’ perspective, but from the registration department (what questions do the students have in using the system).</p>
                                                            <p >Sample Items</p>
                                                            <ul>
                                                                <li>What is the most difficult step on the site?</li>
                                                                <li>What is easy to use on the site?</li>
                                                                <li>What's wrong with this design?</li>
                                                                <li>What is your favorite site based on design?</li>
                                                            </ul>
                                                            <p>The process would take approximately 2 weeks.</p>
                                                            <p>I would post a want ad in the Kent Stater for “Paid Interviews” to solicit a random sample of students.</p> 
                                                            <p>I would close the study at 25 students (ideal representation from the population). </p>
                                                            <p>This would not draw out the research process, but provide a reasonable sample representing the typical user.</p>
                                                            <p>I would also pull in members of the Registration Department staff.</p></td>
                                                        </tr>                            
                                                        <tr>
                                                            <td><p><strong>Method 2: Observation</strong></p>
                                                            <p>This is the most valuable input in the research process. The users can be observed while utilizing the system in their natural environment.</p>
                                                            <p>This method would provide the richest data. The students would be in action which allows the researcher to see firsthand what is stopping the user from achieving their goals with ease.</p>
                                                            <p>Sample Items</p>
                                                            <ul>
                                                                <li>Where the student gets stuck on the site</li>
                                                                <li>Where the student looks frustrated</li>
                                                                <li>How many times they click the back button</li>
                                                                <li>What tasks were handled with ease</li>
                                                            </ul>
                                                            <p>The first 2 weeks would be split between interviewing and observing.</p>
                                                            <p>The KSU computer labs would be a good place to recruit users and observe their behavior.</p> 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><p><strong>Method 3: A/B Testing</strong></p>
                                                            <p>The negative feedback of the site’s design is driving its redesign. There is a need to understand what is aesthetically pleasing and easy to use for the target audience.</p>
                                                            <p>The best approach is A/B which tests the effect of the site’s design on user behavior (Rohrer). It will also help the researchers to identify the elements that consistently tend to produce the greatest improvements.</p>
                                                            <p>Sample Items</p>
                                                            <ul>
                                                                <li>Search options</li>
                                                                <li>Course listings</li>
                                                                <li>Student schedule</li>
                                                                <li>Add/Drop Course options</li>
                                                            </ul>
                                                            <p>A/B Testing will take place during the first month - as the designer works through mockups and after interviews and observations.</p>
                                                            <p>25 participants between students on campus and in the department would have to be recruited.</p> 
                                                            <p>The testing would have to be performed in a usability lab. </p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>                            
                                        </div>
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Understand" />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h2 className="card-title">Understand</h2>
                                                    <em className="mb-2">Framing the Results of Research</em>                                                
                                                    <h3 className="card-title">Summary of Feedback</h3>
                                                    <p>There were quite a few universal complaints with the KSU student registration site.</p>
                                                    <ol>
                                                        <li>Students had a hard time finding the registration system with web for students.</li>
                                                        <li>They feel that the system is fairly confusing to use.</li>
                                                        <li>The system is not enjoyable for the students - they dread using it.</li>
                                                        <li>They are never alerted when is registration time.</li>
                                                        <li>The process is time consuming with multiple sessions before finalizing the schedule.</li>
                                                        <li>They want their program requirements convenient to them while scheduling to reduce confusion.</li>
                                                        <li>They are frustrated with the abundance of errors while scheduling which results in contacting the advisor by which eliminates the students’ control of using the system on their own.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                <h3 className="card-title">Summary of Goals for User Interface</h3>
                                                    <p>The systems should be improved in the following ways:</p>
                                                    <ol>
                                                        <li>It should be straight forward and easy to use.</li>
                                                        <li>It should be intuitive in recognizing the student's program to eliminate pre-requisite errors.</li>
                                                        <li>It should let the user start off where they last left off.</li>
                                                        <li>It should provide a more personalized experience</li>
                                                        <li>It should provide a more personalized experience.</li>
                                                        <li>It should be more straightforward to reduce the lengthiness of the process.</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h3 className="card-title">Persona</h3>
                                                    <blockquote>“I need interactivity, personalization and guidance within a system.”</blockquote>
                                                    <p><strong>Andrew Smith</strong> is a sophomore at Kent’s Main Campus. He works full-time and commutes around an hour to main campus. His tight schedule gives him minimal free time. He prefers to schedule on his own without an advisor as it is just not feasible with his unavailability during business hours. His courses have to take a back seat to his job which is his only means of financial support.
                                                    </p>
                                                    <p>Andrew is a CIS student. He transferred from his local regional campus as it did not offer his major courses. He’s unwilling to give up his CIS program to stick with the regional campus. He has limited use of the system and has to adapt to the new environment of main campus – both of which make him uneasy.</p>
                                                    
                                                    <div className="card card-bordered">
                                                        <div className="card-body">
                                                        <h4 className="card-subtitle">Introverted</h4>
                                                            <p>Andrew is awkward and shy around new people. He prefers working alone. He limits contact and avoids confrontation. He keeps to himself on campus and prefers not to meet with any advisor unless it’s absolutely necessary. He attends classes, keeps to himself and goes home. He lacks the social environment which living on-campus would have provided him.</p>
                                                            <p>He benefits from the time conflict error in the system which helps him to realize which 2 courses overlap and would not fit into his schedule. It leads to making a choice which course out of 2 that fits his schedule is more important. The time conflict error is helpful, but nothing frustrates him more than the K.S.U. registration site pre-requisite errors. They create anxiety over having to contact someone due to his exceptionally passive behavior.</p>                                                      
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="card card-bordered">
                                                        <div className="card-body">
                                                        <h4 className="card-subtitle">Indecisive</h4>
                                                            <p>Andrew has many interests, but computers are his passion. He lives, breathes and sleeps technology. He keeps up with all the hot trends. The subject matter is quite extensive – leaving a wide variety of options for his career.</p>
                                                            <p>He’s just not quite sure what path to take and has had an especially hard time committing to one direction in his program. He can’t make up his mind about which courses most suit him. Browsing courses for exciting new possibilities to fit his interests consumes him and causes anxiety about his possible future. He changes courses tons of times before the semester begins to fine tune his schedule and gets up early to ensure he does not lose his spot in a desired course.</p>                                                      
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="card card-bordered">
                                                        <div className="card-body">
                                                        <h4 className="card-subtitle">Independent</h4>
                                                            <p>Andrew does everything on his own. If he’s new to something, he submerses himself in the topic until he’s knowledgeable in that area. He works to support himself. His decision to go to college was his own and his decision to pay for his education was his own. He prefers scheduling on his own to meeting with an academic advisor – he does not want to be dependent on anyone else.</p>
                                                        </div>
                                                    </div>
                                                                                
                                                    <div className="card card-bordered">
                                                        <div className="card-body">
                                                        <h3 className="card-title">Design Principles</h3>
                                                            <div className="card card-bordered">
                                                                <div className="card-body">
                                                                <h4 className="card-subtitle">Straight-forward</h4>
                                                                    <ul>
                                                                        <li>Displays attention-grabbing Registration link on front page of WFS</li>
                                                                        <li>Follows standard design conventions</li>
                                                                        <li>Creates a clear and concise navigation system</li>
                                                                        <li>Provides a self-explanatory system for the user by suggesting solutions or next steps with errors</li>
                                                                        <li>Eases learning curve based on infrequent use</li>
                                                                        <li>Keeps design minimal</li>
                                                                        <li>Alerts for registration dates conveniently available to all students</li>
                                                                    </ul>
                                                                    <p><strong>Reason:</strong> <em>Don’t Make Your User Think! The user should not even have to think twice when performing the tasks to reaching their goal. The results from the user research confirmed the users’ confusion with the current site which needs to be resolved.</em></p>                                                    
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="card card-bordered">
                                                                <div className="card-body">
                                                                <h4 className="card-subtitle">Accessibility</h4>
                                                                    <ul>
                                                                        <li>Makes the site compatible across all screen sizes and browsers</li>
                                                                        <li>Creates the same environment for disabled students as for non-disabled students</li>
                                                                        <li>Makes screen easy on eyes</li>
                                                                        <li>Removes potential issues related to color blindness</li>
                                                                        <li>Gives an option of emailing schedule and downloading schedule (No printer available)</li>
                                                                    </ul>
                                                                    <p><strong>Reason:</strong> <em>To provide the ideal registration system for all users (undergraduate, non-traditional, disabled, graduate). Everyone needs to benefit from the redesign. The results confirmed the substantial proportion of the student population who wear glasses.</em></p>                                                    
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="card card-bordered">
                                                                <div className="card-body">
                                                                <h4 className="card-subtitle">Enjoyable</h4>
                                                                    <ul>
                                                                        <li>Presents a brief, straight to the point process</li>
                                                                        <li>Reduces number of user errors</li>
                                                                        <li>Personalizes user experience</li>
                                                                        <li>Shows remaining courses in program (sense of accomplishment)</li>
                                                                    </ul>
                                                                    <p><strong>Reason:</strong> <em>To provide the “fun to use” online experience to the students. From the interview results, the majority of students answered “No” to the question “Do you enjoy it?” The students will be more receptive to the redesign if they can enjoy it.</em></p>                                                    
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="card card-bordered">
                                                                <div className="card-body">
                                                                <h4 className="card-subtitle">Interactive</h4>
                                                                    <ul>
                                                                        <li>Notes section where user left off</li>
                                                                        <li>Fill in the blank weekly schedule</li>
                                                                        <li>Displays list of courses needed</li>
                                                                        <li>Recognizes student upon login</li>
                                                                        <li>Loads screen where it left off</li>
                                                                    </ul>
                                                                    <p><strong>Reason:</strong> <em>The majority wanted access to their program requirements while scheduling – a list of required courses and a fill-in-the-blank weekly schedule could provide a more valuable experience. Most students use pens and paper while scheduling – the notes section would provide them with a digital notepad to assist in the process.</em></p>                                                    
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="card card-bordered">
                                                                <div className="card-body">
                                                                <h4 className="card-subtitle">Intuitive</h4>
                                                                    <ul>
                                                                        <li>Recognizes the needs for the students degree program</li>
                                                                        <li>Eliminates pre-requisite error</li>
                                                                        <li>Allows student to schedule on their own (without advisor contact)</li>
                                                                        <li>Improve course time search functionality (search for multiple time slots at once)</li>
                                                                        <li>Follows an intuitive classification system for course numbers</li>
                                                                        <li>Eliminates redundant data entry by incorporating intelligent default settings</li>
                                                                    </ul>
                                                                    <p><strong>Reason:</strong> <em>The students had major complaints about the system errors. The system should be reprogrammed to recognize the student’s degree program and their progress. An intuitive system would significantly decrease the academic advisor's workload while eliminating unnecessary advisor visits for the students.</em></p>                                                    
                                                                </div>
                                                            </div>      
                                                        </div>    
                                                    </div>                      
                                                </div>
                                            </div>
                                        </div>
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="iMagine" />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h2 className="card-title">iMagine</h2>
                                                    <em>Designing Something New Based on Your Understanding of the Design Problem</em>
                                                    <p>Here are several sketches of Andrew's journey through a my "imagined" registration process.</p>
                                                    <img src={Registration1} alt="Registration Sketch 1" />
                                                    <img src={Registration2} alt="Registration Sketch 2" />
                                                    <img src={Registration3} alt="Registration Sketch 3" />
                                                </div>
                                            </div>
                                        </div>
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Evaluate" />
                                        <div role="tabpanel" className="tab-content">

                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h2 className="card-title">Evaluate</h2>
                                                    <em className="mb-2">Testing Your Designs to Ensure They Are Doing What You Want Them to Do</em>                                                                                                
                                                    <p>Here is our team's evaluation of the KSU Course Registration site in its current state.</p>
                                                    <img alt="Heuristic Evaluation of KSU Registration System" src={HeuristicEval} />                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="iNform" />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h2 className="card-title">iNform</h2>
                                                    <em>Communicating Your Designs to Stakeholders, Developers and Others</em>
                                                    <p>Our Heuristic Evaluation Report for <abbr title="Kent State University" className="initialism">KSU</abbr> Registration System summarizes the project in a business format for the intended audience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="UX Concentration" />
                        <div role="tabpanel" className="tab-content">
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h2 className="card-title">UX Deliverables</h2>
                                    <em>Our team was also tasked with producing deliverables for the redesign of the <abbr title="User Experience Design" className="initialism">UXD</abbr> Concentration of Kent State University's Information Architecture & Knowledge Management program website.</em>                            
                                    <div role="tablist" className="tabs tabs-bordered">
                                        <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Concept Maps" defaultChecked />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h3 className="card-title">Concept Mapping</h3>
                                                    <img alt="Concept Map of KSU IAKM Site" src={ConceptMap} />                                                       
                                                </div>
                                            </div>        
                                        </div>
                                        <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Competitive Review" />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h3 className="card-title">Competitive Review</h3>
                                                    <p>This report provides data from an analysis of competitor websites at other higher education institutions with programs similar to <abbr title="Kent State University" className="initialism">KSU</abbr>'s <abbr title="User Experience Design" className="initialism">UXD</abbr> program.  The competitors under analysis include of University of Baltimore vs. Parson's Interactive Design Graduate Program</p>
                                                    <p>Criteria to analyze to identify the trends:</p>
                                                    <ul>
                                                        <li><strong>Labeling Conventions. </strong>Are they universal among students? Would that help them find what they were looking for more easily?</li>
                                                        <li><strong>Navigational System.</strong> To see how the students would reach where they needed to be within the program's site.</li>
                                                        <li><strong>Content.</strong> To see what information students should see first when visiting the <abbr title="User Experience Design" className="initialism">UXD</abbr> program.</li>
                                                        <li><strong>Search Functionality.</strong> To examine the site specific searchability.</li>
                                                    </ul>
                                                    
                                                    <table className="table table-zebra table-hover ">
                                                        <thead>
                                                            <th>Criteria</th>
                                                            <th>University of Baltimore</th>
                                                            <th>Parson's</th>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td><strong>Labeling</strong></td>
                                                            <td>
                                                                Admission Requirements<br />
                                                                Degree Requirements<br />
                                                                Faculty<br />
                                                                Apply Now<br />
                                                                None<br />
                                                            </td>
                                                            <td>
                                                                Admission Requirements<br />
                                                                Curriculum<br />
                                                                Faculty<br />
                                                                Apply Today<br />
                                                                Alumni<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Navigation</strong></td>
                                                            <td>Home | Graduate Programs and Certificates Degree Programs | Interaction Design and Information Architecture</td>
                                                            <td>Academics | Graduate | Design and Technology</td>
                                                        </tr><tr>
                                                            <td><strong>Content</strong></td>
                                                            <td>How the program works on the home page.  Student's testimonies about the program.  No social media.</td>
                                                            <td>How the program works on the home page.  Student's work sample in videos. Highlights of the program. Connect (social media).</td>
                                                        </tr><tr>
                                                            <td><strong>Search</strong></td>
                                                            <td>None</td>
                                                            <td>Yes, entire school</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    
                                                    <h3 className="card-title">Take-Aways</h3>
                                                    <ul>
                                                        <li>Parson's had incredible presentation of student's work that was both aesthetically pleasing and useful.</li>
                                                        <li>Parson's had Connect section on home page to engage prospects and current students.</li>
                                                        <li>University of Baltimore had a great explanation of how the program works. </li>
                                                    </ul>                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Information Architecture" />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h3 className="card-title">Information Architecture</h3>
                                                     <h4 className="card-subtitle">Content Inventory</h4>
                                                        <p>The existing content was added to an inventory for evaluation.</p>
                                                        <img alt="Content Inventory of KSU IAKM Site" src={ContentInventory}  />
                                                    <h4 className="card-subtitle">Sitemap</h4>
                                                        <p>Here is a very high level sitemap for the existing content and future content.</p>
                                                        <img src={UXSitemap} alt="UXD Sitemap" />`                                                    
                                                </div>
                                            </div>
                                        </div> 
                                        <input type="radio" name="my_tabs_3" role="tab" className="tab" aria-label="Process Flow" />
                                        <div role="tabpanel" className="tab-content">                                                                     
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h3 className="card-title">Process Flow</h3>
                                                    <p>The user begin the application process to the UXD page after visiting the prospective students page and clicking on Apply Now. A new user would be able to create an account from this page or an existing user could login from this page. The system will allow the user to create a new account and begin the process or continue the application where they left off, or even check the status of a submitted application.</p>
                                                    <p>There is a definitive starting point upon the entrance to the Apply Now page and a definitive ending point upon a secure logout. The progress of the application is indicated throughout the entire process.</p>
                                                    <img src={Process} alt="Process Flow of KSU IAKM Site"  />
                                                    <img src={AppWireframe} alt="Process Flow of KSU IAKM Site"  />                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
            <Footer home={nav.home} prev={nav.prev} next={nav.next} prevText={nav.prevText} nextText={nav.nextText} />
        </div>
    ) 

}