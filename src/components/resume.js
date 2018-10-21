import React from 'react';
import './resume.css';

const Leadership = () => (
    <div className="last-container">
        <h4>collegiate leadership</h4>
        <h5>USF Cross Country & Track</h5>
        <ul>
            <li>Competed for four years in NCAA Div. I athletics</li>
            <li>
                Three-time West Coast Conference (WCC) team champions in cross
                country
            </li>
            <li>Individually qualified for 2011 WCC Track Championships</li>
        </ul>
        <h5>USF Muslim Student Association</h5>
        <ul>
            <li>Elected and served as club President in 2011</li>
            <li>Recognized as USF’s 2011 Most Outstanding Student Club</li>
        </ul>
    </div>
);

const Awards = () => (
    <div>
        <h4>awards</h4>
        <ul>
            <li>Summa cum laude graduating honors</li>
            <li>Dean’s List every semester</li>
            <li>2011: Senior Leadership Award</li>
            <li>2011: Senior Empowerment Award</li>
        </ul>
    </div>
);

const Education = () => (
    <div>
        <h4>education</h4>
        <ul>
            <li>University of San Francisco (USF)</li>
            <li>B.A. International Studies 2011 | 3.94 GPA</li>
        </ul>
    </div>
);

const Experience = () => (
    <div>
        <h4>eventbrite</h4>

        <h5>Software Engineer | october 2017 – present</h5>
        <ul>
            <li>
                Building a modern version of the checkout and registration
                experience at Eventbrite. Specialized in the frontend but
                working across the stack for an embeddable checkout flow using
                React, Redux, Python, and service oriented architecture
            </li>
            <li>
                Built the frontend in React/Redux for a Method of Delivery
                Shipping project with minimal bugs
            </li>
            <li>
                Built an admin tool to provide the Sales and Support teams with
                self-service information regarding the new embedded checkout
                experience that reduced related contacts to Engineering by 93%
            </li>
            <li>
                Responsible for migrating the legacy backend order flows to a
                new permissions library and architecture
            </li>
            <li>
                Introduced cross-team developer agreements for multiple teams
                working on the same application to ensure high quality
            </li>
            <li>
                Traveled to Madrid and onboarded five new engineers into our
                tech stack, training them on our codebase, tools, and processes
            </li>
        </ul>

        <h5>QA Engineering Manager | january – october 2017</h5>
        <ul>
            <li>
                Led, grew, and developed a world class team of six QA Engineers
                across our offices based in San Francisco, Nashville, and
                Mendoza, Argentina
            </li>
            <li>
                Created a comprehensive career guide/ladder for Quality
                Assurance Engineers at 5 different levels
            </li>
            <li>
                Drove and introduced lightweight and team supportive quality
                assurance processes and policies across the Engineering
                organization, including quality metrics and quality first
                development strategies
            </li>
            <li>
                Partnered with cross functional teams, including Engineering,
                Product, Design, and Support to define test strategies
            </li>
            <li>
                Fostered a culture of continued learning, growth, and feedback
                within the QA team
            </li>
            <li>
                Wrote a Python script using the JIRA and Google Sheets APIs to
                pull and calculate JIRA statistics related to quality
            </li>
        </ul>

        <h5>Senior Quality Assurance Engineer | april 2016 – january 2017</h5>
        <ul>
            <li>
                Created a revolutionary proactive quality framework for
                Engineering to follow that resulted in less time spent testing
                and fixing issues and faster development time overall with
                higher quality baked in
            </li>
            <li>
                Reviewed requirements and designs to identify usability issues
                for customers, missing edge cases, and downstream effects of a
                feature or change. Taught teams how to write good test plans.
            </li>
            <li>
                Deep dive testing and triaging for high risk features and for
                production bugs, and reviewed code for missed use cases
            </li>
            <li>
                Wrote and maintained automated webdriver tests using Selenium
            </li>
            <li>
                Worked with Product Managers, Design/UX, and Eng Mgrs to
                determine product viability and release schedule
            </li>
        </ul>

        <h5>Quality Assurance Engineer | june 2014 – april 2016</h5>

        <h5>Senior Client Support Associate | may – june 2014</h5>
        <ul>
            <li>
                Provided delightful service to Eventbrite organizers and
                attendees via phone and email to answer account, platform, and
                event related inquiries. Resolved customer escalations from
                other team members
            </li>
            <li>
                Acted as a Quality Feedback Coach to evaluate other team
                member’s phone calls and emails to provide feedback and coaching
                on the quality of their customer interactions
            </li>
            <li>
                Helped to open new Nashville office by co-leading three rounds
                of onboarding training for incoming classes of Support team
                hires
            </li>
        </ul>

        <h5>Client Support Associate | may 2013 – may 2014</h5>

        <h5>Client Support Representative | august 2012 – may 2013</h5>

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
            Experienced in all parts of the software development life cycle:
            programming, quality assurance, and customer feedback.
        </h3>
        <Experience />
        <Education />
        <Awards />
        <Leadership />
    </div>
);

export default Resume;
