import React, {Component} from "react";

import {Link} from 'react-router-dom';

class HeaderSection extends Component{

    render(){
        return(
                <div id="Headers">
                    <header className="Header" id="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <h3><span className="fas fa-calendar-plus"></span>Welcome <small>Plan for a Meeting</small></h3>
                                </div>
                                <div className="col-md-2">
                                    <div className="dropdown manager">
                                        <button style={{backgroundColor: `#ffffff`}} className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Manager
                                            <span className="caret"></span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link className="dropdown-item" to={{pathname: '/createUser'}} >Add User</Link>
                                            <Link className="dropdown-item" to={{pathname:'/createRoom'}}>Add Boardroom</Link>
                                            <Link className="dropdown-item" to={{pathname: '/users'}}>User Manager</Link>
                                            <Link className="dropdown-item" to={{pathname: '/boardrooms'}}>Boardrooms</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </header>
                    {this.props.children}
                </div>
        )
    }

}

export default HeaderSection;