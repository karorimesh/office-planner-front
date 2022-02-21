import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Landing extends Component{

    render(){
        return(
            <div>
                <header id="landingHead">
                    <h1>Welcome to Tracom's resource planner</h1>
                    <p>Tracom's resource planner helps schedule for organizations' resources i.e. Boardrooms.
                        Continue to set-up a planner for a legible organization as the admin or Login if your organization is already setup.
                        If not registered contact your organization office admin to add you as a user</p>
                    <div style={{display: `flex`}}>
                        <div style={{marginLeft: `10px`}}><Link className="SignIn" to={{pathname: '/createOrg'}}> Create Organization </Link></div>
                        <div style={{marginLeft: `10px`}}><Link className="SignIn" to={{pathname: '/login'}}> Login </Link></div>

                    </div>
                </header>
                {this.props.children}
            </div>
            
            // Add Footer here
        )
    }

}

export default Landing