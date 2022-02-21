import React, { Component } from "react";
import {Link} from 'react-router-dom';

class ForgotForm extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <div className="card " style={{backgroundColor: `black`, opacity: `70%`}} >
                    <form method="post">
                        <div className="card-title planner-home">
                            <h5  >Reset</h5>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-3 "></div>
                            <div className="col-md-6 ">
                                <div >
                                    <input type="password" name="password" placeholder="New Password" id="input" required />
                                </div><br />
                                <div >
                                    <input type="password" name="repeat_password" placeholder="Confirm Password" id="input2" oninput="checkMatch(this)" required />
                                </div><br />
                                <div>
                                    <button className="btn btn-primary" type="submit" style={{width: `30%`, marginLeft: `10%`, borderRadius: `50%`}}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            </div>
            
        )
    }

}

export default ForgotForm;