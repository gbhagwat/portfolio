import { Footer } from "../Components/Footer";
import Participants from "../Assets/images/participants.png";

export function UsabilityStudy() {
    const nav = {
        home: false,
        prev: "/ux-principles",
        next: "/user-research",
        prevText: "Previous | UX Practices & Principles",
        nextText: "User Research | Next"
    }

    return (
        <div>
        <section id="usability-study">
            <div className="container pt-5">
                <h1>Usability Study</h1>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Usability Study" defaultChecked />
                    <div role="tabpanel" className="tab-content">
                        <div className="card card-bordered">
                            <div className="card-body">
                                <div className="card card-bordered">
                                    <div className="card-body">
                                        <h3 className="card-title">The Best Online Pizza Ordering Experience</h3>
                                        <blockquote className="mt-3">
                                            <em>The study was conducted with 3 participants from the novice user audience group representing a spectrum of user behaviors. We recommend testing with the novice audience because it would help to determine how efficient the online pizza ordering experience would be for a new customer. We wanted to adapt the redesign to fit the needs of prospective customers for a major pizza chain with none to minimal experience ordering pizza online. This would give us a better ideal of what a prospective customer watching the <abbr title="National Football League" className="initialism">NFL</abbr> might expect when ordering pizza for their Super Bowl party. We chose 3 participants as Nielsen claims that this is sufficient in identifying the first 85% of site errors during testing. We chose to keep the number of participants to a minimum in case we needed the time and budget to implement another round of testing before the big game.</em>
                                        </blockquote>                                        
                                    </div>                                    
                                </div>
                                <div className="card card-bordered">
                                    <div className="card-body">
                                        <div role="tablist" className="tabs tabs-bordered">
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Setting the Stage" defaultChecked />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h2 className="card-title">Setting the Stage</h2>
                                                    <h3 className="card-title">Background</h3>
                                                    <p>Since its establishment, a major pizza chain, has been committed to quality. From fresh, hand-tossed dough to fresh-sliced veggies and 100% real meats, they have constantly strived to exceed expectations and to make a Better Pizza. Since their humble beginnings in Louisville, Kentucky, they have grown to become one of the largest pizza companies in the world. For 11 out of the past 13 years, America has rated them No. 1 in customer satisfaction among all national pizza chains in the <abbr title="American Customer Satisfaction Index" className="initialism">ACSI</abbr>.</p>
                                                    <p>According to the 7th annual <abbr title="National Football League" className="initialism">NFL</abbr> sponsor awareness survey released by Turnkey Intelligence, the pizza chain is the brand most identified by avid National Football League fans as an <abbr title="National Football League" className="initialism">NFL</abbr> sponsor. The stakeholders are proud of their reputation and want to carry this through to the new year. They have asked us for a redesign to provide the "best online pizza ordering experience in the world" to the <abbr title="National Football League" className="initialism">NFL</abbr> fans for the 2014 SuperBowl. With only 2 months left until the big game, they are eager to make any changes necessary to accommodate their loyal customers.</p>                    

                                                    <h3 className="card-title">Purpose & Scope</h3>
                                                    <p>The purpose of the study was to evaluate the end-to-end experience of the pizza chain's site new and existing customers as they interacted with the online ordering process. Collecting this data provided the team with:</p>
                                                    <ul>
                                                        <li>Behavioral observations and insights into the current user experience</li>
                                                        <li>Insights into design solutions on how to improve and strengthen the experience</li>
                                                        <li>Baseline information on the current experience that can be used as a comparison for future online experiences</li>
                                                    </ul>                    
                                                </div>
                                            </div>
                                        </div>
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Testing" />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                    <h2 className="card-title">Testing</h2>
                                                    
                                                    <h3 className="card-title">Methodology</h3>
                                                        <h4 className="card-subtitle">Usability Testing Evaluation Method</h4>
                                                        <p>Summative evaluation is the preferred method when the "train has already left the station". the major pizza chain was well past the point of preliminary design ideas where formative evaluation could have been valuable for designing the "best online pizza ordering experience in the world". At this phase, it was ideally too late to make any meaningful design changes, but at the point where real tasks could be integrated into testing with the site already having gone live.</p>
                                                        <p>The only changes that should even be considered in this phase would be any major usability issues with the current product, which in our case is the online ordering service on the pizza chain's website. The only way to identify issues with the user experience was to test participants to see if they were struggling through the basic tasks of ordering a pizza. The test urged emphasis on why the implemented tasks were not effective.</p>
                                                        <p>The formative evaluation was eliminated because it would have focused on the skeleton of the site, which had already been developed, rather than concentrating on the meat and the flesh, or what already exists. Summative evaluation was chosen because it is much more cost effective and efficient as the site has only 2 months, November until the SuperBowl, to be radically changed. The chosen method gets right to the point and allots both time and budget in case another round of testing is absolutely necessary to provide the optimal redesign.</p>
                                                        <p>Summative evaluation was also the better choice as the developers needed a greater insight at this point about how the customers were currently carrying out the task of finding and ordering a pizza. The redesign task was very simple and straightforward - to improve the ordering experience. The central usability measures effectiveness, efficiency and user satisfaction - thus making summative the ideal candidate for identifying difficulties in operation.</p>
                                                        <p>The summative evaluation provided quantitative results that demonstrated substantial support for any changes crucial to the business. The objective results were much more beneficial for providing concrete results such as metrics, audience insights and actionable improvements to guide the redesign process.</p>

                                                        <h4 className="card-subtitle">Research Questions</h4>
                                                        <p>The study collected both qualitative and quantitative data to answer several research questions, including:</p>
                                                        <ul>
                                                            <li><strong>Task completion</strong> - How well does the current process support the customers' ability to accomplish pizza ordering tasks?</li>
                                                            <li><strong>Navigation and information architecture</strong> - How did the site structure support customers' ability to accomplish the tasks? Could they navigate to where they wanted to go and accomplish the tasks quickly and efficiently? What pathways did they take?</li>
                                                            <li><strong>Content and terminology</strong> - Did the customers understand the content and did it help them accomplish the tasks?</li>
                                                            <li><strong>Communication and site impressions</strong> - What were the customers' overall impressions of the site? Did it adequately communicate what they can/are required to do with the site?</li>
                                                        </ul>

                                                        <h4 className="card-subtitle">Participant Information</h4>
                                                        <p>The team's mission was to research users in order to optimize the online customer experience when ordering pizza from the major pizza chain. With a small span of time remaining before the Super Bowl, testing 3 participants using the summative evaluation method was the optimal path to pursue. It provided the most efficient usability testing method for gaining valuable insights on the effectiveness of the site.</p>
                                                        <p>All participants were computer literate users who liked pizza with novice to minimal experience ordering food online. Participant #1 and Participant #2 had no prior experience ordering pizza online. Whereas, Participant #3 had experienced ordering pizza online at least once.</p>
                                                        <p>Three participants were scheduled over two testing dates. All three participants completed the test. Two participants were involved in testing on April 21st and one participant on April 24th. Of the three participants, one was male and two were female. Additionally, two out of the three participants used the Flash version of the site.</p>
                                                        <p>A screener questionnaire was developed by the team to filter through the volunteers and to identify the ideal candidates for the study.</p>

                                                        <h4 className="card-subtitle" >Screener Questionnaire</h4>

                                                        <h6>Table 1. Screener Questionnaire</h6>
                                                        <table>
                                                            <tr>
                                                                <td className="tdh">Do you like pizza?</td>
                                                                <td className="tdspace">Yes/No</td>
                                                                <td className="tdspace">Continue/Terminate</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">Are you available April 21st through 25th during business hours?</td>
                                                                <td className="tdspace">Yes/No</td>
                                                                <td className="tdspace">Continue/Terminate</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">Would you be able to commute to Kent State University Usability Lab?</td>
                                                                <td className="tdspace">Yes/No</td>
                                                                <td className="tdspace">Continue/Terminate</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">Have you ever ordered anything online?</td>
                                                                <td className="tdspace">Yes/No</td>
                                                                <td className="tdspace">--</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">Have you ever ordered food online?</td>
                                                                <td className="tdspace">Yes/No</td>
                                                                <td className="tdspace">Continue/Terminate</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">How often do you order pizza?</td>
                                                                <td className="tdspace">Weekly/Monthly/Yearly</td>
                                                                <td className="tdspace">--</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">How do you currently order pizza?</td>
                                                                <td className="tdspace">Phone/Online</td>
                                                                <td className="tdspace">--</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh"><em>If online</em>
                                                                </td>
                                                                <td className="tdspace"><em>How many times have you ordered pizza online?</em>
                                                                </td>
                                                                <td className="tdspace"><em>Once - Continue</em><br />
                                                                <em>2-5 times - Terminate</em><br />
                                                                <em>5 or more - Terminate</em>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh"><em>If not online</em>
                                                                </td>
                                                                <td className="tdspace"><em>Would you ever consider ordering pizza online?</em>
                                                                </td>
                                                                <td className="tdspace"><em>Yes - Continue</em><br />
                                                                <em>No - Terminate</em>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">Approximately, how much time do you spend on the internet each week?</td>
                                                                <td className="tdspace">0-5 hours<br />
                                                                5-10 hours<br />
                                                                10+ hours</td>
                                                                <td className="tdspace">--</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="tdh">Of those hours, how much time do you spend for work versus leisure?</td>
                                                                <td className="tdspace">
                                                                </td>
                                                                <td className="tdspace">--</td>
                                                            </tr>
                                                        </table>

                                                        <p>The screener questionnaire (<strong>Table 1</strong>) was developed by the team with the novice user taken into account.</p>
                                                        <p>The initial question, "Do you like pizza?" was derived from Jared Spool's required qualification "motivation" in mind. Someone who doesn't like pizza should be disqualified immediately because they will have no interest in the goal of the study leading to invalid results. If they don't like pizza, when would they ever be ordering it?</p>
                                                        <p>Our next requirements were time and location. It is necessary for the participant to be available during the testing hours as well as be able to travel to the testing facilities.</p>
                                                        <p>The question, "Have you ever ordered anything online?", provides insight on how experienced the potential participant is with the internet and leads to the follow up classifier question "have you ever ordered food online?" If they've ordered food online, they're experienced enough to use the major pizza chain's site, but not necessarily an expert behind the computer.</p>
                                                        <p>If they have experience ordering food online, the next questions are classifiers determining how many times they have ordered pizza online or if they have ever even ordered pizza online. The team has targeted novice users. Novice users are defined by participants who have ordered food online but not pizza and those who have ordered pizza online but only once.</p>
                                                        <p>Finally, the last questions give us more of an ideal who likely would be using the internet to order pizza in the future thus determining their level of motivation. These final classifiers give us an ideal who is more likely to need to order pizza online in the future and to narrow it down to the final 5 users if we have more volunteers than we had anticipated.</p>
                                                        <p>The participants most fitting the criteria of the screener questionnaire were chosen to participate in the testing session which required the completion of several basic pizza ordering tasks on the pizza chain's site.</p>

                                                    <h3 className="card-title">Testing Scenario</h3>
                                                        <p>The team developed the tasks with novice to minimal users ordering pizza for a party. Test participants would have to walk through the site just as if they would if they were ordering pizza for a Super Bowl party. These basic steps provided an insight of the existing site issues.</p>
                                                        <p>To begin the ordering process, any visitor is required to enter a delivery address to get started. Ideally, most customers would prefer to sign up for coupons and deals in anticipation of savings and potential future orders. Whether it would be an elementary school's party or a <abbr title="National Football League" className="initialism">NFL</abbr> Super Bowl party, the group ordering guidelines would need to be applied to determine approximately how much food was needed to feed a large group. Plus, planning a party for a might have made the customer want to schedule in advance in preparation.</p>
                                                        <p>The next obvious step in the process would be to order the desired products - whether it be a pizza, pop or a side. Everyone on the pizza chain's site visits the site to place an order for pizza. Once the order was completed, the user would have to proceed to checkout and place the order. Entering special instructions for the delivery man is an optional site feature, but could come in handy when ordering within an apartment complex or a party center.</p>

                                                        <p><em>The initial scenario and tasks created by the team was as follows:</em>
                                                        </p>

                                                        <p><strong>Scenario: You are the room parent for your child's 5th grade class. The kids are having their promotion party next Thursday to celebrate their transition to middle school and you have been asked to order pizza for the party. To do this, please complete the following tasks:</strong>
                                                        </p>

                                                        <ol>
                                                            <li>You want to have the pizza delivered to the school. The address of the school is 123 East. Main Street, Kent, <abbr title="Ohio" className="initialism">OH</abbr> 44240. Please find the near pizza chain restaurant that will deliver to this address.</li>
                                                            <li>Since you have a week before the party, you wonder if you can get any coupons to save on the order. Please use your <abbr title="Parents-Teacher Association" className="initialism">PTA</abbr> email address: pta@kentschool.edu to sign up for coupons at the pizza chain.</li>
                                                            <li>Your budget is tight so you want to make sure you are getting the best possible price. Please find the group ordering site.</li>
                                                            <li>Since you will be attending the promotion ceremony, you need to place the pizza order in advance. Please find out whether the pizza chain's site allows you to do this?</li>
                                                            <li>There are 33 students in the class plus the teacher. Please order 3 large pepperoni pizzas and 3 large cheese pizzas and 2 specialty pizzas (the teacher did not specify which specialty pizza, so select something you think the kids & teacher might enjoy.)</li>
                                                            <li>You know from hosting your kid's birthday parties that root beer and orange pop are the kids' favorites and the split is about 2:1 in favor of root beer. You want to make sure that each kid gets what they prefer, (2 liters equals approx. 5 ½ cans of pop.) Please order 4 liters of root beer and 2 liters of orange pop.</li>
                                                            <li>The teacher feels the class has earned a sweet treat. Please order 4 deserts for the party.</li>
                                                            <li>You are almost ready to check out. Before you do you want to make sure you've ordered everything you needed. Please confirm that everything you need is in your order: 3 large pepperoni pizzas, 3 large cheese pizzas, 2 specialty pizzas, 4 liters of root beer, 2 liters of orange pop and 4 deserts.</li>
                                                            <li>Your order looks complete. You are now ready to start the checkout process. Please proceed to checkout and fill in your information: (highlighted above.) Use the phone number 330-672-0000. You also need to tell the driver to deliver to the school office and ask for Mr. Robins. Please add these special delivery instructions to your order form.</li>
                                                            <li>Your party was a success! You want to share your feedback with the corporate office. Please provide your comments via the website to the corporate office.</li>
                                                        </ol>

                                                        <h3 className="card-title">Tasks</h3>
                                                        <p>Due to further discussion with stakeholders, the team changed the study tasks to fit the <abbr title="Chief Executive Officer" className="initialism">CEO</abbr> and <abbr title="Chief Technology Officer" className="initialism">CTO</abbr>'s preferences and to better align with the goals of the redesign. Also, the team figured 3 tasks were adequate enough to answer all the most essential questions as well as to fit the testing time restraints. The initial tasks and the preferred tasks were meshed together.</p>
                                                        <p>At the core of participants' explorations of the major pizza chain's website were a series of "typical" tasks that party planners were likely to attempt while using the site. These tasks were intended to represent key site functions and features, and to facilitate participants' exploration of a range of the pizza chain's website information mechanisms. The tasks finally decided upon and involved in the study are as follows:</p>

                                                        <ul>
                                                            <li>
                                                                <p>We are going to be looking at majorpizza.com web site. Even if you are not a majorpizza fan, imagine that the people you are with are fans of majorpizza and that is where you will be ordering the pizza. There are bunch of people at this party and you need to order 3 pizzas.</p>
                                                                <ul>
                                                                    <li>Mushroom and Pepperoni</li>
                                                                    <li>Half onion and half sausage with light sauce</li>
                                                                    <li>A specialty pizza (you want some variety)</li>
                                                                </ul>
                                                                <p>Tell me a little more about your experience ordering pizza from this site. Is it what you expected?</p>
                                                            </li>
                                                            <li>
                                                                <p>You want to sign up for deals and coupons but you don't want to register. You just want to give them your email. Can you do this and what do you think you will receive by email?</p>
                                                            </li>
                                                            <li>
                                                                <p>Your pizza arrives and it is terrible! Your driver was rude and you are really upset about what just happened. You call the local store but get nowhere. You need to contact the corporate office, how would you do that?</p>
                                                            </li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Summary" />
                                        <div role="tabpanel" className="tab-content">
                                            <div className="card card-bordered">
                                                <div className="card-body">
                                                <h3 className="card-title">Executive Summary</h3>
                                                    <p>Overall the major pizza chain's website was fairly received by the study participants. They described the experience as both "not intuitive (Participant #2)" and "easy once you get the hang of it (Participant #3)" and stated that they "liked it for the most part, but that finding the specialty pizzas was disappointing (Participant #1). Participants uniformly stated that they might consider using it again in their personal life.</p>
                                                    <p>Let's begin with what the major pizza chain has done successfully within the ordering process design until this point. All three participants instantly knew to use "Order Now". Next, they set their address for their order successfully without any issues. Then, proceeded to choose "Build Your Own" or "Add and Customize" from the "Order Now" page. Choosing ingredients and adding to cart caused no issues, although Participant #1 expected that the site remain on the "Create Your Own" page after adding her 1st pizza to the order. It didn't align with her expectation that she would be able to just start adding another pizza directly from that page versus returning to the main "Order Now" page to begin the process again. Additionally, Participant #3 used non-flashed and seemed at first glance not to find the mushrooms as a topping because they were listed as "Baby Portabellos" versus mushroom and had no picture to ease the identification.</p>
                                                    <p>Despite, the slight bumps in the findings, no significant user frustration eliminated the amazement of the building pizza feature. Participant #1 explained with excitement, "Wow, this is kinda awesome" within the pizza building stage. While, Participant #2 was impressed by the advanced pizza customization options which she had never seen on any other site.</p>
                                                    <p>However, despite the fair to good initial performance of the online ordering process, the team observed that the majority of the site users struggled to match the Web site's cognitive model with their own, to interpret nomenclature, and to locate information later in the process with specialty pizza ordering and the more uncommon tasks.</p>
                                                    <p>For instance, two out of three users* found it especially difficult to find a specialty pizza as demonstrated by the skyrocketing of clicks, faces of confusion (<strong>Figure 1</strong>) and their statements of frustration.</p>

                                                    <h6>Figure 1. Participants #1 & #2</h6>
                                                    <img src={Participants} alt="User Testing Participants" />

                                                    <ul>
                                                        <li><strong>Participant #1:</strong> "Seriously, where do I find a Hawaiian pizza?"</li>
                                                        <li><strong>Participant #2:</strong> "I don't get it; I don't know what specialty means."</li>
                                                    </ul>

                                                    <p>Participant #2 actually demonstrated agitation as his session logged out in the midst of ordering because he could not find the specialty pizzas and took several minutes of searching with no success.</p>
                                                    <p><em>*I would discount Participant #3 ease of finding the specialty pizzas as she chose the major pizza chain of the study in the icebreaker as a pizza place of choice inferring previous ordering experience with the pizza company.</em>
                                                    </p>
                                                    <p>Despite Participant #2's obvious frustration and Participant #3's prior experience ordering from the major pizza chain, both users were drawn towards "Special Offers" (Figure 1) within the main navigation bar when the task of ordering a specialty pizza arose. Specialty pizzas need to be clearly categorized and labeled or they will continue to provide confusion to the users, who might end up getting frustrated enough to leave the site if visiting the site to use their coupon on a specialty pizza with no success in ever reaching their goal.</p>
                                                    <p>Another implicit observation was the avoidance of junk mail when the participant was directed to sign up for email deals and coupons. The first thing out of Participant #1 and Participant #2's mouths were their perceived assumption that signing up would automatically lead to loads of spam. Finding "Email and Text Deals" was pretty straightforward as demonstrated through Participant #1's reaction - "'Email and Text Deals' did make it quite clear".</p>
                                                    <p>Beyond spam, both Participant #2 and #3 did not appreciate the ideal of sharing their private information just for a simple email sign up form. Participant #2 was frustrated that it didn't say anything about selling your information and that he found no privacy policy stated.</p>
                                                    <p>Fortunately, most of the nomenclature, navigation, and cognitive model difficulties that were observed from the study participants encounter can be easily addressed.</p>

                                                    <h3 className="card-title">Synopsis</h3>
                                                    <p>While participants often struggled with the navigation and information architecture throughout the Web site, their problems were more frequent and prohibitive for tasks involving specialty pizzas and the fear of spam.</p>
                                                    <h4 className="card-subtitle">Key Findings</h4>
                                                    <ul>
                                                        <li>Two out of three participants found the site to be pretty direct after adapting to navigational structure. Whereas, the third participant expressed utmost frustration when answering if the site met his expectations - he expected to order pizzas "without feeling like he's being beat up".</li>
                                                        <li>There was minimal difficulty in the initial steps of the ordering process (finding the menu, adding a pizza for customization, and adding to the cart) - users figured these steps out quite quickly.</li>
                                                        <li>Difficult didn't arise until the task of ordering a "Specialty Pizza" - participants fumbled through the site finding no well defined category/section dedicated to "Specialty Pizzas" and were dumbfounded. One user ran out of time within his session due to the confusion.</li>
                                                        <li>All users had little issue finding the "Email and Text Deals" link on the top global navigation bar. A link from the Special Offers page is recommended as that appeared to be the most direct link initially.</li>
                                                        <li>Two out of three users wanted to sign up directly for email without providing required personal information.</li>
                                                        <li>All participants selected "Customer Service" with sending a complaint in mind, but initially searched for the link on top of the home page.</li>
                                                        <li>Participant #1 first searched under the "About" link which felt to her as the normal convention of finding a Contact Us form.</li>
                                                        <li>Participant #2 noticed how the Privacy Policy on not selling personal information was noted on the feedback form, but not the email signup.</li>
                                                    </ul>

                                                    <h3 className="card-title">Follow-Up Research Questions</h3>
                                                    <p>The study observations led the team to question:</p>
                                                    <ul>
                                                        <li>Would it be more intuitive to leave the user on the "Build Your Own" page versus redirecting them to the main "Order Now" page?</li>
                                                        <li>How would we approach making the Specialty Pizzas more easily searchable?</li>
                                                        <li>Should the required personal information be removed from the Email Signup form?</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Reflective Thoughts" />
                    <div role="tabpanel" className="tab-content">
                        <div className="card card-bordered">
                            <div className="card-body">
                            <p>Following are a series of articles written for my usability project.</p>
                            <div className="card card-bordered">
                                <div className="card-body">
                                <h3 className="card-title">Usability Versus Traditional Academic Research</h3>
                                    <p>Usability defines how easy the interface of a website is to use, or how quickly and easily it is for a user to accomplish their tasks on the site. Whereas, usability testing is a subjective study of how easily the interface is used and how easily tasks can be performed. Put into perspective, the goals of usability testing is to eliminate any ambiguities, errors and user frustration by detecting these issues before the launch of the product, the company's website.</p>
                                    <p>A usability study is designed to accomplish these goals in a conducted observation of the user's behaviors and patterns of use on the website. Where traditional academic research requires a long study with many participants over time, usability testing can be done with several short studies and only a few participants over the course of the site's design and development stage.</p>
                                    <p>As opposed to academic research studies, a representational sample of the population is not required. According to Jakob Nielsen, only 3-9 random participants (3 participants to find 65% of problems, 5 to detect 80% and 9 to detect 95%) can achieve the same statistically significant results as a large representational sample. The first few participants are enough to detect the majority of the site's errors and issues without investing in a larger, more costly and timely study.</p>
                                    <p>With just a handful of participants, two computers and a video camera in a single day are adequate for a significant usability study. Any additional participants have yet to provide any substantial difference in results.</p>
                                    <p>For a few hundred dollars versus thousands, you save hundreds and gain thousands in insight from practical usability research.</p>
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                <h3 className="card-title">Formative Versus Summative Usability Evaluation</h3>
                                    <p>Formative evaluation helps to "form" the design for a product. It involves iteratively evaluating a product throughout the development process. The goal of formative testing is to detect and eliminate usability problems. The main purpose is "to immediately improve the design".</p>
                                    <p>This comes especially handy in the development if you have the resources (developers, time, budget) to make changes as you go or if there are questions holding up the process needing addressed before the team can move forward. Formative evaluation actually saves time and money by fixing problems before they become too exhaustive problems. It's better to nip a problem in the bud before it grows out of hand.</p>
                                    <p>Methods that can be used for Formative Evaluation:</p>
                                    <ul>
                                        <li>Heuristic Evaluation</li>
                                        <li>User Interface Inspections</li>
                                        <li>Thinking-Aloud Testing</li>
                                        <li>Pluralistic Usability Walkthrough</li>
                                        <li>Cognitive Walkthrough</li>
                                    </ul>
                                    <p>Summative evaluation, on the other hand, starts when the design of the product is near completion. Users judge the design against quantitative goals or competitive products. The purpose of summative evaluation obviously isn't to immediately improve the design, but "to evaluate versus diagnose" the design of the product.</p>
                                    <p>Summative evaluation proves useful for establishing a baseline study on an already existing website, or to evaluate the usability of a competitors site to use as a comparison. It can be beneficial for a working prototype which has already been fleshed out, but requires testing. The summative approach also provides valuable insight for the current state of overall usability on any website.</p>
                                    <p>The same methods of testing can be used for summative evaluation as are used for formative.</p>
                                    <p><strong>For a better understanding of the test's purposes and benefits and to reinforce the iterative design process, the product development lifecycle phases are aligned with the stages of evaluation:</strong>
                                    </p>
                                    <p>The beginning of the Exploratory Lifecycle Phase of prototyping, design and testing ideally aligns with the Formative Evaluation process.</p>
                                    <p>Whereas, the Summative Evaluation process is best implemented during the end of the Exploratory Lifecycle Phase.</p>
                                    <p>A new form of evaluation, Verification, is introduced in the Validation Lifecycle Phase, which comes to life during final testing and the product launch stage.</p>
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                <h3 className="card-title">Moderating Usability Testing | Not What You Think</h3>
                                    <p>I'm going to have to really practice to follow the Golden Rules of Moderating Usability Testing. I have ways to go. It's quite frustrating to read something and think "no problem, this is just common sense", but when it comes to actually doing it yourself, you're like "wow, I really had no idea how hard it would be".</p>
                                    <p>After several attempts of administering a usability test, I am further convinced patience is not my virtue. After listening to myself, I'm not sure if I provided too many assists as a result of my impatience. I know it didn't feel right throughout the process - I couldn't figure out if I was crossing the line between leading and enabling the user.</p>
                                    <p>Another obstacle to overcome, Sagar didn't necessarily speak out loud as I would've liked and I could sense his nervousness. It's almost as I was feeding of it and I wasn't sure how to provide comfort and put him at ease. I made several attempts to ask questions to motivate him to speak out loud, but I realize I need to stay focused on what questions or comments I make to nudge the user to be more vocal.</p>
                                    <p>It was pretty fascinating to say the least. It really opened my eyes to how not every one thinks exactly like me. There were times when Sagar went to click and it definitely wasn't where I would've started. 90% of life is perspective. The usability testing was a very eye opening experience. I've just always assumed everyone finds thing online as easily as I do and that they look under the same categories and take the same approaches as I do. To read and talk about Usability Testing is one thing, but to actually conduct a session yourself is completely enlightening.</p>
                                </div>            
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                    <h3 className="card-title">Quantiative Measurement | "Pageviews" for Usability Studies</h3>
                                    <p>For a usability briefing, the number of pages viewed could be the most valuable quantitative measurement to test the design of the site for what users are seeking and what they are actually find when they visit the site. It provides the big picture of how much of the site is actually being viewed. The measurement for the usability evaluation could go 2 ways.</p>
                                    <p><strong>The Pros</strong>
                                    </p>
                                    <p>It can point the study in the right direction when determining what pages the users are actually viewing. The number of pageviews provides an ideal of for what information visitors are seeking. The data can provide insight into the restructuring of the site's content. For example, if the site is crowded - it can help to determine which categories can be combined and into which specific pages. A site would be more user-friendly if one page displayed the information versus 5, in turn, reducing the number of clicks and preventing user frustration. The goal is to not to make the user think and to point them in the right direction of what they want to find.</p>
                                    <p><strong>The Cons</strong>
                                    </p>
                                    <p>The data might be skewed as the users aren't viewing the pages because they want that particular information, but they're viewing them in attempt to find what they came to the site. This could easily be detected by monitoring the time spent on each page visited. If the time spent on the site is minimal compared to the number of page views - the measurement might even be eliminated from the equation for the study. For instance, if the majority of the users visit 5 pages and bounce after 1 minute, then the pageviews wouldn't even provide any benefit for the case.</p>
                                </div>
                            </div>
                            <div className="card card-bordered">
                                <div className="card-body">
                                <h3 className="card-title">Reporting Usability Testing</h3>
                                    <p>From selecting the number of participants to the evaluation method, our project pieced together perfectly. Here's a recap:</p>
                                    <p><strong>Scenario:</strong> Stakeholders want to optimize the online pizza ordering experience for a medium sized pizza company before the Superbowl. They want to provide their customers with the "best online pizza ordering experience in the world". With limited time to complete the redesign project, our team planned as follows:</p>
                                    <p><strong>Choose Evaluation Method.</strong> The project team chose summative evaluation as "the train had already left the station". The pizza company's website had already been rolled out into development and it was past the point of opinions on the structural elements. If changes are necessary this late in the game, the team will have the alloted time and budget for another round of testing.</p>
                                    <p><strong>Decide on an Effective Number of Participants.</strong> The team chose 3 participants according to Nielsen's research. The first 3 participants will identify the 85% of the major mistakes whereas the missing 15% of errors don't effect the general population. Plus, choosing only 3 participants allowed us room for another round of testing. Design a Screener Questionnaire to Select Participants. Our focus was to choose novice users who have never or have ordered at least once a pizza online. The idea driving this target group was the perspective of potential customers.</p>
                                    <p><strong>Develop Tasks to Represent Real Life.</strong> We developed a scenario to test how a user would approach ordering pizza for a party as the real situation will be with the NFL Super Bowl parties.</p>
                                    <p><strong>Testing Sessions Conducted.</strong> The testing was performed one-on-one, moderator-to-user, being recorded with Screencast.</p>
                                    <p><strong>Analysis of Results Performed.</strong> The vast amount of data has to be disseminated into valuable information to report to the stakeholders.</p>
                                    <p><strong>Report Summarizing Results was Written.</strong> The information was written up to inform the stakeholders of the plan of action the team took as well as to identify any major mistakes that need addressed before the big game.</p>
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