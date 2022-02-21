import React, {Component, useState} from "react";
import {Link} from 'react-router-dom';
import {Calendar} from 'react-multi-date-picker';
import { date } from "yup";

class SideNav extends Component{

    constructor(props){
        super(props)
        this.state = {
            dateString: new Date()
        }
    }

    render(){
        return(
            <div id="SideBar" className="col-md-3">
                
                <div className="list-group">
                    <Link to={{pathname: '/home'}} className="list-group-item list-group-item-action ">
                        <span className="glyphicon glyphicon-cog"></span> Home
                    </Link>
                    <Calendar
                        value={this.state.dateString}
                        onChange={(value)=>{this.setState({dateString: new Date(value)})}}>
                        <Link to={{ pathname: '/meetings/1/?keyword=' + this.state.dateString.toLocaleDateString('fr-CA') }} >
                            View Meetings
                        </Link>
                    </Calendar>
                    {console.log(this.state)}
                    {/* <form  method="post">
                        <input id="datepicker" name="date" style={{color: `bisque`}} placeholder="Pick a date" />
                        <button type="submit" className="list-group-item list-group-item-action"><span className="fas fa-calendar-day"></span> View My Meetings </button>
                    </form> */}
                    <Link to={{pathname: '/meetings'}} className="list-group-item list-group-item-action"><span className="fas fa-calendar"></span> All Meetings </Link>
                    <Link to={{pathname: '/users'}} className="list-group-item list-group-item-action"><span className="fas fa-user"></span> Users </Link>
                    <Link to={{pathname: '/boardrooms'}} className="list-group-item list-group-item-action"><span className="fas fa-home"></span> Boardrooms </Link>
                    

                </div>
            </div>
        )
    }

}

export default SideNav;