import React from 'react';
import './Resume.css'
;
class About extends React.Component {
    render(){
        const employee = this.props.employee;
        return(
            <React.Fragment>
                <header id="info">
                    <h1>{employee.firstName + ' ' + employee.middleName + ' ' + employee.lastName }</h1>
                    <span>
                        {employee.address} &bull;&#xa0;
                        {employee.contactNumber} &bull;&#xa0;
                        {employee.email}
                    </span>
                </header>
                <section id="statement">
                    <h2>Subject</h2>
                    <p>{employee.purpose}</p>
                </section>
            </React.Fragment>
        );
    }
}

export default About;