import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Forgot extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <div className="card " style={{backgroundColor: `black`, opacity: `70%`}} >
                    <form method="post">
                        <div className="card-title planner-home">
                            <h5  >Forgot Password</h5>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-3 "></div>
                            <div className="col-md-6 ">
                                <div >
                                    <h6 style={{color: `bisque`}}> Enter Email here to set password</h6>
                                </div>
                                <div >
                                    <input type="email" name="email" placeholder="Email" className="outline" id="input" required />
                                </div><br />
                                <div>
                                    <button className="btn btn-primary" type="submit" style={{width: `30%`, marginLeft: `10%`, borderRadius: `50%`}}>Send</button>
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

export default Forgot;