import React, {Component} from "react";
import {Link} from 'react-router-dom';

class EditProfile extends Component{

    render(){
        return(
            <div className="col-md-9">
                <div className="card " style={{background: `none !important`}}>
                    <div className="card-title planner-home">
                        <h5 >Profile</h5>
                    </div>
                    <form method="post">
                        <div className="card-body row">

                            <div className="col-md-4 ">
                                <div className="profile-div" id="profile-div">
                                    <img src="/images/profile.png" alt="" className="pic" id="pic" />
                                    <div className="profile-info">
                                        <p>Username: <span ></span></p>
                                        <p>Phone: <span ></span></p>
                                        <p>Role: <span ></span></p>
                                        <p>Id: <span ></span></p>
                                        <p>Email: <span ></span></p>
                                        <p><Link to={{pathname: '/forgot'}} > Reset Password</Link></p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-8 ">
                                <div className="profile-edit">
                                    <div className="form-div">
                                        <div className="form-div-1">
                                            <h3 style={{color: `chocolate`, textAlign: `center`, fontSize: `20px`}}>Edit Profile</h3>
                                            <input className="edit-field" id="Id" type="text"  hidden />
                                            <input className="edit-field" id="org" type="text"  hidden />
                                            <input className="edit-field" id="pass" type="password" hidden />
                                            <label for="name"
                                                style={{color: `bisque`, fontSize: `18px`, font: `Lucida-handwriting`}}>Username</label>
                                            <input className="edit-field" id="name" type="text"  /><br /><br />
                                            <label for="role"
                                                style={{color: `bisque`, fontSize: `18px`, font: `Lucida-handwriting`}}>Role</label>
                                            <input className="edit-field" id="role" type="text"  readonly /><br /><br />
                                            <label for="email"
                                                style={{color: `bisque`, fontSize: `18px`, font: `Lucida-handwriting`}}>E-mail</label>
                                            <input className="edit-field" id="email" type="email" /><br /><br />
                                            <label for="phone"
                                                style={{color: `bisque`, fontSize: `18px`, font: `Lucida-handwriting`}}>Phone</label>
                                            <input className="edit-field" id="phone" type="text"  /><br /><br />
                                            <div>
                                                <button className="btn btn-primary" type="submit" style={{width: `40%`, marginLeft: `25%`, borderRadius: `50%`}}>Edit </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>

            </div>
        )
    }

}

export default EditProfile;