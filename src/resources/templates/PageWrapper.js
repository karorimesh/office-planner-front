import React, {Component} from "react";
import {Link} from 'react-router-dom';

class PageWrapper extends Component{

    render(){
        return(
            <div className="bg- outer-page" id="Outer">
                <div id="Nav">
                    <nav className="navbar navbar-expand-md Nav">
                        <Link className="navbar-brand" to={{pathname: '/home'}}>Office Planner</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" 
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" 
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={{pathname: '/home'}}>Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={{pathname: '/createMeet'}}>Schedule</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to={{pathname: '/meetings'}} >Meetings</Link>
                                </li>
                            </ul>


                            <ul className="nav navbar-nav navbar-right">

                                <li className="nav-item">
                                    <Link className="nav-link" to={{pathname: '/profile'}}>Welcome + name</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="javascript: document.logoutForm.submit()" >
                                        Logout</Link>
                                    <form name="logoutForm" method="post" >
                                        <input hidden type="submit" value="Logout" />
                                    </form>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
                {this.props.children}
                {/* Headers  */}
                {/* Breadrumb */}
                {/* <section className="Cards" id="main">
                    <div className="container">
                        <div className="row"> */}
                            {/* SideNav */}
                            {/* Routes */}
                            {/* HomeCards */}
                            {/* Or CreateBoardroom */}
                            {/* Or Boardrooms */}
                            {/* Or CreateMeeting */}
                            {/* Or CreateOrganization */}
                            {/* Or CreateUser */}
                            {/* Or EditBoardroom */}
                            {/* Or EditMeeting */}
                            {/* Or EditProfile */}
                            {/* Or Forgot */}
                            {/* Or ForgotForm */}
                            {/* Or Register */}
                            {/* Or Scheduled */}
                            {/* Or UserManager */}
                        {/* </div>
                    </div>
                </section> */}

                {/* Footers */}
            </div>
        )
    }
}

export default PageWrapper;