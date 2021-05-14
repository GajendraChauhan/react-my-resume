import React from 'react';
import './Resume.css'

class Education extends React.Component {
    render() {
        const education = this.props.education
        return (
            <React.Fragment>
                <h3>Educational Qualifications</h3>
                <table>
                    <tbody>
                        <tr id="heading">
                            <td>Qualification</td>
                            <td>University</td>
                            <td>Grades</td>
                            <td>Year</td>
                        </tr>
                        {education.map((item, index) => (
                            <tr key={index}>
                                <td>{item.qualification}</td>
                                <td>{item.university}</td>
                                <td>{item.grades}</td>
                                <td>{item.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Education;