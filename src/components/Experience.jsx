import React from 'react';
import './Resume.css'

class Experience extends React.Component {
    render(){
        const experiences = this.props.experiences;
        return(
            <section id="employment">
                <h2>Employment</h2>
                {experiences.map((experience, expIndex) => (
                    <section key={expIndex}>
                        <div className="jobtable">
                            <div className="tablerow">
                                <span className="jobtitle">{experience.designation}</span>
                                <span className="right">{experience.totalExperience}</span>
                            </div>
                        <div className="tablerow">
                            <span>{experience.company}</span>
                            <span className="right">{experience.location}</span>
                        </div>
                        </div>
                        {experience.actionItems.map((actionItem, actionIndex) => (
                            <ul>
                                <li>{actionItem}</li>
                            </ul>
                        ))}
                    </section>
                ))}
            </section>
        );
    }
}

export default Experience;