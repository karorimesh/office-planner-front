import React, {Component} from "react";
import {Link} from 'react-router-dom';

class CreateUser extends Component{

    render(){
        return(
            <div className="col-md-9">
                <div className="card " >
                    <form  method="post" >
                        <div className="card-title planner-home">
                            <h5 >Create User</h5>
                        </div>

                        <div className="card-body row">
                            <div className="col-md-3 "></div>
                            <div className="col-md-6 ">
                                <div className="error-div">
                                    <div >
                                        <p className="text-danger"></p>
                                    </div>
                                    <div >
                                        <p className="text-warning"></p>
                                    </div>
                                </div>
                                <div >
                                    <input type="email" required className="email" placeholder="New User Email"  />
                                </div>
                                <div style={{display: `flex !important;`}} className=" row col-md-12">
                                    <div><label className="row col-md-6" for="role">Role:</label></div>
                                    <div id="role" className="col-md-6">
                                        <input type="radio" id="admin" name="fav_language" value="admin"  required />
                                        <label for="admin">Admin</label><br />
                                        <input type="radio" id="officer" name="fav_language" value="officer" 
                                            required />
                                        <label for="officer">Officer</label><br />
                                        <input type="radio" id="Employee" name="fav_language" value="employee" 
                                            required />
                                        <label for="Employee">Employee</label><br />
                                    </div>
                                </div><br />
                                <div>
                                    <button className="btn btn-primary" type="submit" style={{width: `50%`, marginLeft: `25%`, borderRadius: `50%`}}>Create</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default CreateUser;