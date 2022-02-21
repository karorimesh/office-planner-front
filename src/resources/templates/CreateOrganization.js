import React,{Component} from "react";
import {Link} from 'react-router-dom';

class CreateOrganization extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-9">
                <div className="card " >
                    <form  method="post" >
                        <div className="card-title planner-home">
                            <h5  >Create Organization</h5>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-6 ">
                                <div >
                                    <input className="form-control" placeholder="Organization Name"  type="text" required />
                                </div><br />
                                <div >
                                    <input className="form-control" placeholder="Registration Number" type="text"  required />
                                </div><br />
                                <div >
                                    <input className="form-control" placeholder="Office Admin Email" type="text"  required />
                                </div><br />
                            </div>
                            <div className="col-md-6 ">
                                <div >
                                    <label className="col-form-label col-md-12  "  >Description:</label><br />
                                    <textarea rows="5" cols="12" className="form-control" ></textarea>
                                </div><br /><br />
                                <div>
                                    <button className="btn btn-primary" type="submit" style={{width: `50%`, marginLeft: `25%`, borderRadius: `50%`}}>Create</button>
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

export default CreateOrganization;