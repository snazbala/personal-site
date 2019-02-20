import React from 'react';
import './resume.css';

const Leadership = () => (
    <div>
        <h4>collegiate leadership</h4>
        <h5>USF Cross Country & Track</h5>
        <ul>
            <li>Competed for four years in NCAA Div. I athletics</li>
            <li>
                Awarded 2011 Conference All-Academic Team for individual GPA,
                ranked #2
            </li>
            <li>
                Team inducted into the 2019 USF Hall of Fame for being
                three-time West Coast Conference (WCC) team champions in cross
                country
            </li>
            <li>Individually qualified for 2011 WCC Track Championships</li>
        </ul>
        <h5>Community Mentorship</h5>

        <li>
            Mentor two Hack Reactor Telegraph Track students; offer support and
            guidance in the student's transition to full time software
            development – 2018 - PRESENT
        </li>
        <li>
            Mentor three USF students in their junior or senior year – 2015 -
            PRESENT
        </li>
    </div>
);

const Education = () => (
    <div className="last-container">
        <h4>education</h4>
        <h5>University of San Francisco (USF)</h5>
        <ul>
            <li>B.A. International Studies 2011 | 3.94 GPA</li>
            <li>
                Summa cum laude graduating honors, Dean’s List every semester
            </li>
            <li>
                Awarded both Senior Leadership Award and Senior Empowerment
                Award in 2011
            </li>
        </ul>
    </div>
);

const Experience = () => (
    <div>
        <h4>eventbrite</h4>

        <h5>Software Engineer II | jan 2019 – present</h5>
        <h5>Software Engineer | october 2017 – jan 2019</h5>
        <ul>
            <li>
                Building a modern and performant version of the checkout
                experience at Eventbrite, supporting 17 orders/second at peak
                traffic. Specialized in the frontend but can work across the
                stack in React, Redux, Python, and service oriented
                architecture; see
                eventbrite.com/checkout-external?eid=55122507905
            </li>
            <li>
                Built the frontend for language selector, method of delivery,
                and waitlist features with minimal bugs
            </li>
            <li>
                Reduced contacts to Engineering by 93% by building an internal
                tool that provided the Sales and Support teams with self-service
                information regarding the new checkout experience
            </li>
            <li>
                Migrated the legacy backend order flows to a new permissions
                library and architecture
            </li>
            <li>
                Led cross-team developer agreements for multiple teams working
                on the same React app
            </li>
            <li>
                Chosen to onboard five new engineers in our new Madrid office
                into the tech stack, training them on our codebase, tools, and
                processes
            </li>
            <li>
                Partner closely with Product to determine release schedule.
                Review product requirements and designs to identify usability
                issues for customers and missing edge cases for new projects
            </li>
            <li>
                Led three Hackathon projects: Easter Egg in Embedded Checkout,
                Custom Checkout Frontend using order API, and Support Team
                Showcase page; won People’s Choice award
            </li>
            <li>
                Contributor to Eventbrite’s open source charting library,
                Britecharts
            </li>
        </ul>

        <h5>QA Engineering Manager | january – october 2017</h5>
        <ul>
            <li>
                Led a team of six QA Engineers across our global offices,
                created a comprehensive career guide/ladder for QA Engineers at
                5 different levels, and drove and introduced lightweight and
                team supportive quality assurance processes and policies across
                the Engineering organization
            </li>
            <li>
                Wrote a Python script using the JIRA and Google Sheets APIs to
                pull and calculate JIRA quality statistics
            </li>
            <li>
                Led a 2 week technical onboarding program for 40 new engineering
                hires from Ticketfly acquisition
            </li>
        </ul>

        <h5>Senior Quality Assurance Engineer | april 2016 – january 2017</h5>
        <h5>Quality Assurance Engineer II | april 2015 – april 2016</h5>
        <h5>Quality Assurance Engineer I | june 2014 – april 2015</h5>
        <ul>
            <li>
                Created a revolutionary proactive quality framework for
                Engineering that resulted in faster development by focusing more
                time on building quality in to start rather than reacting to
                poor quality
            </li>
            <li>
                Reviewed code for missed use cases, wrote and maintained
                automated webdriver tests using Selenium, and fixed bugs in our
                Python backend
            </li>
        </ul>
        <h5>Senior Client Support Associate | may – june 2014</h5>

        <h5>Client Support Associate II | may 2013 – may 2014</h5>

        <h5>Client Support Associate I | august 2012 – may 2013</h5>
        <ul>
            <li>
                Provided delightful service to Eventbrite organizers and
                attendees via phone and email to answer account, platform, and
                event related inquiries, gave feedback to others as a Quality
                Feedback Coach, and helped to open new Nashville office by
                leading training for 50+ new hires
            </li>
        </ul>

        <h4>national asian pacific american bar association</h4>

        <h5>Staff Assistant | february - august 2012</h5>
        <ul>
            <li>
                Provided support for a small nonprofit; planned an annual “Lobby
                Day” event at US Capitol, and supported administrative tasks
                including reconciling monthly financial transactions and budget.
            </li>
        </ul>
    </div>
);

const Resume = () => (
    <div>
        <h3 className="headline">
            Experienced frontend software engineer with a diversity of skills in
            programming, QA, leadership, onboarding/training, and the customer
            to product feedback loop.
        </h3>
        <Experience />
        <Leadership />
        <Education />
    </div>
);

export default Resume;
