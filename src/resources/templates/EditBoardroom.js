import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditBoardroom extends Component{
    render(){
        return(
            <div className="col-md-9">
                <div className="card " >
                    <form  method="post">
                        <div className="card-title planner-home">
                            <h5 >Edit Boardroom</h5>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-6 ">
                                <div >
                                    <input className="form-control" placeholder="Boardroom Name" required />
                                    <input className="form-control" placeholder="Boardroom Id" required readonly type="hidden" />
                                    <input className="form-control" placeholder="Boardroom Id" required readonly type="hidden" />
                                </div><br />
                                <div >
                                    <input className="form-control" placeholder="Boardroom Location" type="text" required />
                                </div><br />
                                <div >
                                    <label className="col-form-label col-md-4"  >Capacity:</label>
                                    <input placeholder="Boardroom Capacity" type="number" required />
                                </div><br />
                                <div>
                                    <div className="form-group row" >
                                        <label className="col-form-label col-md-4">Features:</label>
                                        <div>
                                            <input id="tv" type="checkbox" value="true" />
                                            <label >TV</label><br />
                                            <input type="checkbox" id="whiteboard" value="true" />
                                            <label >WhiteBoard</label><br />
                                            <input type="checkbox" id="phone" value="true" />
                                            <label > Phone</label><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div >
                                    <label className="col-form-label col-md-12  "  >Other Features:</label><br />
                                    <textarea rows="5" cols="12" className="form-control">Other Features/Description</textarea>
                                </div><br /><br />
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

export default EditBoardroom;