import { Footer } from "../Components/Footer";
import PDF from "../Assets/doc/AnalyzeandCommunicateUserResearchFindings-GBZ.pdf";

export function UserResearch() {
    const home = false;
    const prev = "/information-architecture";
    const next = "/";
    const prevText = "Previous | Information Architecture";
    const nextText = "Return Home";
    return (
        <div>
      <section id="user-research">
        <div className="container pt-5">
          <h1>User Research</h1>
            <div className="row">
                <div className="card card-bordered">
                    <div className="card-body">
                    <h2 className="card-title">Major Hotel Chain Redesign</h2>
                <p><em>For my User Research course, we were responsible for conducting and evaluating user research for the redesign of all digital properties for a major hotel chain.</em></p>
                
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Nano Usability Study" defaultChecked />
                    <div role="tabpanel" className="tab-content">
                        <div className="card card-bordered">
                            <div className="card-body">
                                <h3 className="card-title">Nano Usability Study</h3>
                                <p>The participants completed the task of booking a hotel room with ease. For the most part, it was straight-forward – maintaining standard conventions that are used across travel related sites (Location, Check-In/Check-Out Interactive Calendar). The results were automatically populated in a very clear and concise list with high level details and sorted by distance from desired location as a typical accommodations site lists its results. The users were impressed by the ease of use.</p>
                                <blockquote>"I would've booked online if I knew it was this simple." - User #1</blockquote>
                                <p>The only task that was a slight issue, but not necessarily a problem was finding a way back to the results page after viewing a selection without hitting the back button. Other than this minor navigational issue, the experience of searching, selecting and checking out a hotel room was a reasonably seamless process.</p>
                                <blockquote>"The experience wasn't as difficult as I had anticipated." - User #2</blockquote>
                                <p>As far as suggestions for additional user research questions, there were plenty of topics untouched by test users. For instance, no one covered why they would be motivated to use the online reservation system, how they typically go about booking hotel reservations and who they are.</p>
                                <p>Even the most brief usability test, such as this nano test, can provide invaluable insight on the existing condition of the user experience.  We conduct user research in order to identify issues that could drive potential customers away from the site and to figure out what, if anything, we're actually doing right. User research aims to provide the optimal experience for the user by attempting to represent all perspectives thus eliminating confusion and frustration. The rationale of user research is to capture a representative sample from the target audience which identifies the major issue.</p>
                            </div>
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Memo to Stakeholders" />
                    <div role="tabpanel" className="tab-content">
                        <div className="card card-bordered">
                            <div className="card-body">
                                <h3 className="card-title">Memo to Stakeholders</h3>
                                <p>Our team feels strongly about incorporating user research within the redesign project.  We want you to know why we feel so strongly and why it could be the most beneficial course of action during this phase of the redesign process.</p>
                                <p>Standard knowledge is that the fundamental purpose behind creating any product, whether it be a site or an umbrella, is to make money. The hotel’s business model adheres to the same principles as anyone else, but somewhere along the process – the business model trumps the end users’ wants and needs and they are often neglected. The goals of making money in business and of providing an optimal experience to end user don’t always harmonize. User research is vital in the development process because it mediates a compromise between what the user wants and the organization wants making everyone happy.</p>
                                <p>Some might believe that demographics is adequate user research, but the valuable information is only based on part of the equation. Demographics can provide a small glimpse of the target audience in terms of research. This small sample provides us with what the customers do and when they do it, not answering the questions we’re really seeking – why they do it and how we can design more effective solutions to their problems.</p>
                                <p>User research not only provides a common ground between the users’ wants and the company’s business model, but gives us a better understanding of why users do what they do and how we can approach fixing the site’s issues more accurately. User research provides us with a deeper look into how we can provide the optimal experience to our end users, through improved efficiency, functionality and desirability, which will reflect in profits aligning with the business model.</p>
                                <p>Iterative development and user research work hand in hand and would be quite beneficial to the redesign of the hotel’s digital services. Problems need to be identified early on by real users in real time – in order for designers to gather feedback and to provide continual refinement through trial and error. Researching users throughout the development process is the preferred method. It would be much more beneficial to the hotel over realizing the problem past the point of return leading to wasted time, money and labor trying to correct these issues when they should’ve been done right the first time.</p>
                                <p>The hotel can improve their user experience by better understanding their users’ changing needs, attitudes and behaviors through user research. The user research can also provide insight for innovation and provide a distinct advantage over competition.</p>
                                <blockquote><p>Several ways the hotel could improve their digital properties through user research:</p>
                                <ul>
                                    <li>Generate customer insight to identify current and potential site problems before they’re at the point of no return – leading to waste in time and resources</li>
                                    <li>Highlight and remove unnecessary features to simplify the end user process and create a more intuitive user experience</li>
                                    <li>Achieve a greater fit between the product and the user – aligning customer wants and needs</li>
                                    <li>Identify emerging needs to keep up with the latest trends in the market</li>
                                </ul>
                                </blockquote>
                                <p>Rather than investing a great deal of time and money in the wrong direction, user research will provide an accurate picture rather than shooting blanks in the dark. To provide an effective and efficient initiative, harmonizing the users’ needs, attitudes and behavior with the company’s business model is key to providing the optimal user experience and to reaching bottom line.</p>
                            </div>
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Research Goals" />
                    <div role="tabpanel" className="tab-content">
                        <div className="card card-bordered">
                            <div className="card-body">
                                <h3 className="card-title">Research Goals & Questions</h3>
                                <h4 className="card-subtitle">Executive Summary</h4>
                                <p>The national hotel chain can improve their user experience by better understanding their users’ changing needs, attitudes and behaviors through user research. This report outlines goals and recommendations for the hotel chain to conduct user research for the redesign project. </p>
                                <p>Highlights of the research plan aligning with the hotel chain’s business goals and user experience questions:</p>
                                <ul>
                                    <li>User research issues identified such as inefficient flow of pages,  inconsistency between site and mobile app, and important information “below the fold”</li>
                                    <li>Goals for the project including identifying the strengths and weaknesses of the current reservation system and increasing brand awareness for luxury brands</li>
                                    <li>Development of research questions addressing customer’s preferences and behavior</li>
                                </ul>
                                        
                                <h4 className="card-subtitle">Top Business Goals</h4>
                                <ul>
                                    <li>Increase hotel bookings via digital properties by 10% </li>
                                    <li>Increase reservations for their luxury and Lifestyle Collection hotel categories </li>
                                    <li>Gain 10,000 incremental members of the loyalty program in the first quarter after the redesign </li>
                                    <li>Decrease by 20% the number of people starting and then abandoning a reservation </li>
                                    <li>Increase by 5% the number of people choosing a hotel and flight package (vs. just booking their hotel alone) </li>
                                </ul>
                                
                                <h4 className="card-subtitle">User Experience Questions</h4>
                                <ul>
                                    <li>What is the demographic makeup of user population?</li>
                                    <li>How do people choose a hotel?</li>
                                    <li>Why do people start a hotel search and then not complete a reservation?</li>
                                    <li>When do people use the site site versus the app?</li>
                                    <li>What value are customers looking for in a customer loyalty program?</li>
                                </ul>
                                    
                                <h4 className="card-subtitle">User Research Issues Identified</h4>
                                    <ol>
                                        <li>Increase hotel bookings via digital properties by 10%</li>                                        
                                        <ul>
                                            <li><strong>Pages labels are not conventional and confuse site visitors.</strong> The Continue button is misleading and  typically navigates to a room details page. </li>
                                            <li><strong>Important information ignored when improperly positioned on page.</strong> The Room Details link under the room specification (Guest room, 1 King or 2 Double) is ignored.  </li>
                                            <li><strong>Flow between pages is inefficient and deters continuation.</strong> Standard convention is to list the room details after proceeding from the search results page and before confirming a reservation.  </li>
                                            <li><strong>Inconsistency between the site and the mobile app.</strong> Labeling, categorization, navigation and sort options are not consistent between the 2 channels which confuses customers.  </li>
                                        </ul>                                                
                                        <li>Increase reservations for their luxury hotel categories</li>                                        
                                        <ul>
                                            <li><strong>Lacking categorization.</strong> Hotels By Brand in Find a Hotel modal doesn’t organize hotels by brand.</li>
                                            <li><strong>Inconsistency in labeling confuses users.</strong> The list Hotels By Brand in Find a Hotel modal should match the Brands category in Filter Results on the search results page.  </li>
                                        </ul>                                        
                                        <li>Gain 10,000 incremental members of the loyalty program in the first quarter after the redesign</li>                                        
                                        <ul>
                                            <li><strong>Important Information Ignored when placed lower in visual hierarchy.</strong> People ignore the loyalty program box when their attention is drawn towards the Find a Hotel modal on the landing page.</li>
                                            <li><strong>Lack of valuable context.</strong> The Find a Hotel modal needs the “What’s This?” pop-up  that Filter Results has next to “Use Loyalty Program Points”.</li>
                                            <li><strong>Nuisance intercept deters potential conversions.</strong> The loyalty program sign up intercept is annoying  after clicking the Continue button and needs relocated to less intrusive place on page.</li>
                                        </ul>                                        
                                        <li>Decrease by 20% the number of people starting and then abandoning a reservation </li>                                        
                                        <ul>
                                            <li><strong>Flow between pages is inefficient.</strong> Guest Information form should come after customer selects Reservation Details and Room Preferences.</li>
                                            <li><strong>Too many clicks deters continuation.</strong> Displays error and prompt (ex. “The hotel you requested cannot accommodate 6 guests per room. Please reduce the number of guests requested for each room and then increase the number of rooms.”)  after user has selected their hotel of interest by clicking the Continue button. </li>
                                        </ul>                                        
                                        <li> Increase by 5% the number of people choosing a hotel and flight package (vs. just booking their hotel alone)</li>                                        
                                        <ul>
                                            <li><strong>Important Information Ignored when placed lower in visual hierarchy.</strong> Deals & Packages category is overlooked at the bottom of the site averting customer awareness.</li>
                                            <li><strong>Alternate website for booking packages interrupting continuity in online reservation system.</strong> Option for Hotel + Flight Packages needs integrated into online reservation system</li>
                                        </ul>
                                    </ol>
                                    
                                    <h4 className="card-subtitle">User Research Research Goals</h4>
                                    <ul>
                                        <li>Identify the strengths and weaknesses of the online reservation system (to provide a more efficient process for booking rooms from digital properties)</li>
                                        <li>Evaluate customer awareness of the luxury and Lifestyle Choice hotel categories (to improve brand distinction)</li>
                                        <li>Identify drop-off point for reservation process (to prevent further loss of potential customers)</li>
                                        <li>Identify aspects of the loyalty program that would be of most interest to customers (to encourage new member signups)</li>
                                        <li>Determine what might encourage customers to choose to book a hotel/flight package vs just booking a hotel by itself (to increase awareness of package bookings)</li>
                                    </ul>
                                    
                                    <h4 className="card-subtitle">General Research Questions</h4>
                                    <ul>
                                        <li>How do users book hotels via digital properties? </li>
                                        <li>How do customers distinguish hotel brands?</li>
                                        <li>Why are users abandoning the reservation process?</li>
                                        <li>What compels user to sign up for the loyalty program?</li>
                                        <li>Why don't visitors book hotel and flight packages versus hotel rooms alone?</li>
                                    </ul>
                                    
                                    <h4 className="card-subtitle">Specific Research Questions</h4>
                                    <ul>
                                        <li>Do people understand the process of booking a hotel room with the online reservation system?</li>
                                        <li>Do people understand the process of booking a hotel room with the mobile app?</li>
                                        <li>What filters are people currently using across all channels?</li>
                                        <li>What is the ratio of customers completing the reservation process to those who abandon the process?</li>
                                        <li>When they abandon the reservation process, do they know they’re abandoning it?</li>
                                        <li>What makes them committed members of the program?</li>
                                        <li>What features do member users value?</li>
                                        <li>Do users understand they are leaving site to when they navigate to hotel and flight packages?</li>
                                        <li>How can the hotel chain integrate the hotel and flight packages site into the site search functionality?</li>
                                        <li>Do customers filter the desktop site or the mobile app by brand?</li>
                                        <li>How do customers search and filter the hotel digital properties to find their preferred brand?</li>
                                        <li>What kind of technology are customers using?</li>
                                    </ul>

                            </div>
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="The Interview Plan" />
                    <div role="tabpanel" className="tab-content">
                        <div className="card card-bordered">
                            <div className="card-body">
                                <h3 className="card-title">The Interview Plan</h3>
                                <h4 className="card-subtitle">Questions Based on <a href="#goals">User Research Goals</a></h4>
                                <ol>
                                    <li>To increase hotel bookings via digital properties</li>
                                    <ul>
                                        <li>Would you rather book your room on a desktop or on an app?</li>
                                        <li>How do you feel about booking your room on an app?</li>
                                        <li>What amenities are most important to users when they are booking a room?</li>
                                    </ul>
                    
                                    <li>To increase reservations for luxury and Lifestyle Choice hotel brands</li>
                                    <ul>
                                        <li>What features compel you to choose a luxury hotel?</li>
                                        <li>Who prefers luxury and Lifestyle Choice hotel brands?</li>
                                        <li>Why would a customer choose the luxury and Lifestyle Choice hotel brands over others?</li>
                                    </ul>
                                    
                                    <li>To prevent users from abandoning the reservation process</li>
                                    <ul>
                                        <li>What would cause a customer to exit the reservation process?</li>
                                        <li>What pages do customers open from the Reservation Confirmation page from most frequently?</li>
                                    </ul>
                                    
                                    <li>To gain members for the loyalty program</li>
                                    <ul>
                                        <li>What rewards do customers find most valuable in a hotel rewards program? </li>
                                        <li>What features do member users value?</li>
                                    </ul>
                                    
                                    <li>To increase number of hotel/flight package bookings as compared to booking a hotel alone</li>
                                    <ul>
                                        <li>Do users understand they are leaving the site when they navigate to hotel and flight packages? Do they try to return to the site?</li>
                                        <li>What would compel a user to book their hotel and flight together?</li>
                                    </ul>
                                </ol>
                                    
                                <h4 className="card-subtitle">Hypotheses</h4>
                                <ul>
                                    <li>Customers prefer booking hotel rooms via the site versus the mobile app.</li>
                                    <li>Customers base their choice on hotel ratings and reviews versus brand.</li>
                                    <li>Customers would think twice about abandoning the reservation process if they were presented with a special offer.</li>
                                    <li>Customers value a chance to earn free stays the most in a hotel loyalty program.</li>
                                </ul>

                                <h4 className="card-subtitle">The Interview Guide</h4>
                                <h5>Introduction</h5>
                                <p>Hi, ________. My name is Gabrielle and I’m going to be asking you some questions today.  </p>
                                <p>Before we get started, there are a few things to review.</p>
                                <p>We’re asking people to answer questions regarding booking hotel accommodations to inform the team for the national hotel chain Digital Properties Redesign Project.</p>
                                <p>I’m here to ask questions about you; that’s why we chose you. You may be tempted to answer questions based on what your friends or family do. But we’re really interested in your opinions and experiences.</p>
                                <p>Therefore, there is nothing you can say that is wrong.  All answers are welcome!</p>
                                <p>If you have any concerns or questions, please feel free to express them.  We may not have much time for them, but we will try to hear as much of what you have to say as possible.</p>
                                <p>You’ll see there is a video camera there.  With your permission, we would like to record the session for research purposes only.  Your feedback will be kept anonymous.  </p>
                                <p>If you don’t have any questions, please sign this form.  Please take your time to look it over.</p>
                                    
                                <h5>Warm Up</h5>
                                <ol>
                                    <li>How old are you?</li>
                                    <li>What do you do for a living?</li>
                                    <li>When was your last vacation?</li>
                                    <li>Where did you go?</li>
                                </ol>
                                    
                                <h5>Body</h5>
                                <ol>
                                    <li>How often do you stay in hotel rooms?</li>
                                    <li>Where do you typically book hotel rooms?</li>
                                    <li>When you booked hotel rooms, were they for business or vacation or both?</li>
                                    <li>Have you ever booked a hotel room on an app?  If so, was it because you had to or do you prefer it over booking it on a website?</li>
                                    <li>How do you feel about booking your room on an app? Is it easier than on a website?</li>
                                    <li>What features are most important to you when booking your stay? Continental breakfast? Late checkout? Gym? Pool? Pets allowed? Priority Late checkout?</li>
                                    <li>What is the most important feature to you when choosing a hotel?</li>
                                    <li>What do you normally base your hotel decisions on – brand or reviews?</li> 
                                    <li>What features would compel you to opt for a luxury brand hotel?</li>
                                    <li>What comes to mind when you hear “luxury” hotel?</li>
                                    <li>What would motivate you to spend more money on a luxury brand over an economy hotel?</li>
                                    <li>When booking a hotel room, have you ever abandoned the reservation process? If so, what stopped you in your tracks? </li>
                                    <li>Would a special offer influence you to proceed?</li>
                                    <li>What rewards come to mind when you think of hotel loyalty program? </li>
                                    <li>Would any of those rewards motivate you to join a hotel loyalty program?</li>
                                    <li>What reward would motivate you the most?</li>
                                    <li>Why might you book a hotel and flight in the same package?</li>
                                    <li>What would compel you to book a package deal over a hotel room alone?</li>
                                    <li>Could an amazing offer convince you to book a package that you weren’t planning on booking?</li>
                                </ol>
                                    
                                <h5>Cool Down</h5>
                                <p>That’s the last of my questions for you.  Do you have any for me?</p>
                                
                                <h5>Wrap Up</h5>
                                <p>Then, I guess that’s it.  Thanks for volunteering your time to provide us with more insights for our project.  I really appreciate it.</p>                                
                            </div>
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="The Findings" />
                    <div role="tabpanel" className="tab-content">
                        <div className="card card-bordered">
                            <div className="card-body">
                                <h3 className="card-title">Analyze & Communicate Findings</h3>
                                    <h4 className="card-subtitle">The Participants</h4>
                                    <table className="table table-zebra">
                                        <tr>
                                            <td width="35%">
                                                <h5>Interviewee #1</h5>
                                                <p><strong>Name:</strong> Vijay</p>
                                                <p><strong>Gender:</strong> Male</p>
                                                <p><strong>Age Range:</strong> 25-34</p>
                                                <p><strong>Job:</strong> QA Analyst</p>
                                                <p><strong>Frequency of hotel stays:</strong> 1-2x year</p>
                                                <p><strong>Stayed at the national hotel chain brand within past 6 months:</strong> No</p>
                                                <p>Vijay is an occasional vacationer who typically books his room over the phone versus digital properties.  He goes on vacation with his wife every 6 months.  The major deciding factor for him booking a room is approximately to his vacation location (if it’s in walking distance to a beach, etc).  Next, value for his money is the next most important feature.  He prefers the desktop version of hotel sites to apps when he’s booking a room as he finds them easier to use and to read.   Also, he chooses a brand first and then reads over the reviews to finalize his decision.</p>
                                            </td>
                                            <td width="35%">
                                                <h5>Interviewee #2</h5>
                                                <p><strong>Name:</strong> Sagar</p>
                                                <p><strong>Gender:</strong> Male</p>
                                                <p><strong>Age Range:</strong> 25-34</p>
                                                <p><strong>Job:</strong> Financial Analyst</p>
                                                <p><strong>Frequency of hotel stays:</strong> 1x every 2-3 Months</p>
                                                <p><strong>Stayed at the national hotel chain brand within past 6 months:</strong> Yes</p>
                                                <p>Sagar is a frequent traveler for work and vacation.  He’s often traveling on the go and has used a hotel app before to make reservations.  He doesn’t mind an economy hotel for business, but opts for luxury as far as leisure is concerned.  His top priorities when booking a room are the loyalty membership perks – he wants to earn rewards with the frequency of his stays.  He prefers the desktop version of the hotel sites and choosing brand first – reviews second – in finalizing his decision just as Vijay had.</p>
                                            </td>
                                        </tr>
                                    </table>

                                    <h4 className="card-subtitle">The Final Report</h4>
                                    <p>To view the final project report, see the <a href={PDF}
                                    target="_blank" rel="noreferrer">User Research Project <i className="fa fa-file-pdf-o"></i></a>.</p>                                
                                </div>
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