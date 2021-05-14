import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Skillset from './Skillset';

class Resume extends React.Component {

    constructor() {
        super();
        this.state = {
            employeeDetails : {
                firstName : 'Lars',
                middleName : 'M.',
                lastName : 'Joe',
                address: '123 Blank St., San Francisco, CA 94104',
                contactNumber: '555.555.1235',
                email: 'first.M.Last@fake.com',
                purpose : 'First, I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the moon and returning him safely to the earth. No single space project in this period will be more impressive to mankind, or more important for the long-range exploration of space; and none will be so difficult or expensive to accomplish.'
            },
            experiences : [
                {
                    company : 'Perfect IT Solution, LLC',
                    designation : 'Senior Software Engineer',
                    location : 'San Francisco, CA',
                    totalExperience : '5 Years',
                    actionItems : [
                        'Develop high-quality software design and architecture.',
                        'Identify, prioritize and execute tasks in the software development life cycle.',
                        'Develop tools and applications by producing clean, efficient code.'
                    ]
                },
                {
                    company : 'Oblong Orchards',
                    designation : 'Team Lead',
                    location : 'San Mateo, CA',
                    totalExperience : '2 Years',
                    actionItems : [
                        'Automate tasks through appropriate tools and scripting.',
                        'Review and debug code.',
                        'Perform validation and verification testing.',
                        'Collaborate with internal teams and vendors to fix and improve products.',
                        'Document development phases and monitor systems.',
                        'Ensure software is up-to-date with latest technologies'
                    ]
                }
            ],
            skills : [
                {
                    technology : 'C#',
                    experience : '7',
                    rating : '4',
                },
                {
                    technology : 'MVC',
                    experience : '1',
                    rating : '2',
                },
                {
                    technology : 'HTML/CSS',
                    experience : '3',
                    rating : '3',
                },
                {
                    technology : 'Javascript',
                    experience : '1',
                    rating : '2',
                },
                {
                    technology : 'Angular 7',
                    experience : '3',
                    rating : '4',
                },
                {
                    technology : 'SQL',
                    experience : '2',
                    rating : '3',
                },
                {
                    technology : 'SSRS',
                    experience : '1',
                    rating : '4',
                }
            ],
            education : [
                {
                    qualification : 'S.S.C',
                    university : 'G.S.E.B India',
                    grades : '75.57%',
                    year : '2004'
                },
                {
                    qualification : 'H.S.C (Science Stream)',
                    university : 'National Institute Of Engineering',
                    grades : 'A Grade',
                    year : '2008'
                },
                {
                    qualification : 'Chartered Accounting - ACCA',
                    university : 'ACCA Glasgow, UK',
                    grades : 'A Grade',
                    year : '2013'
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <About employee = {this.state.employeeDetails} />
                <Experience experiences = {this.state.experiences} />
                <Skillset skills = {this.state.skills} />
                <Education education = {this.state.education} />
            </div>
        );
    }
}

export default Resume;