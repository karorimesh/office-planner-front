import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component{

    render(){
        return(
            <div className='row'>
                <div className='col-md-3'></div>
                <div className="col-md-6">
                <div className="card " style={{backgroundColor: `black`, opacity: `70%`}} >
                    <form method="post">
                        <input type="hidden" name="token"/>
                        <div className="card-title planner-home">
                            <h5  >Register</h5>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-3 "></div>
                            <div className="col-md-6 ">
                                <div >
                                    <p className="text-danger"></p>
                                </div>
                                <div style={{color: `bisque`, marginLeft: `10%`}}>
                                    <p className="text-warning"> &nbsp; <Link to={{pathname: '/login'}}  style={{color: `yellowgreen`}}>Login?</Link></p>
                                </div>
                                <div >
                                    <input type="text" name="username" placeholder="Username" className="outline" id="username" />
                                </div><br />
                                <div >
                                    <input type="text" name="phone" placeholder="i.e +25477679808" className="outline" id="phone" />
                                </div><br />
                                <div >
                                    <input type="password" name="password" placeholder="New Password" className="outline" id="input" required />
                                </div><br />
                                <div >
                                    <input type="password" name="repeat_password" placeholder="Confirm Password" className="outline" id="input2" oninput="checkMatch(this)" required />
                                </div><br />


                                <div>
                                    <button className="btn btn-primary" type="submit" style={{width: `30%`, marginLeft: `10%`, borderRadius: `50%`}}>Register</button>
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

export default Register;