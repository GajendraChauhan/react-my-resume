import React from 'react';
import './Resume.css'

class Skillset extends React.Component {
    render(){
        const skills = this.props.skills;
        return(
            <React.Fragment>
                <h3>Skills</h3>
                <table>
                    <tbody>
                        <tr id="heading">
                            <td>Technology</td>
                            <td>Experience</td>
                            <td>Rating</td>
                        </tr>
                        {skills.map((skill, index) => (
                            <tr key={index}>
                                <td>{skill.technology}</td>
                                <td>{skill.experience}</td>
                                <td>{skill.rating} out of 5</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Skillset;