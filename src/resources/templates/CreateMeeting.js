import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Select from 'react-select';


const userOptions = [];
const boardOptions = [];


const users = [
    { userId: 'userid1', userName: 'Mesh' },
    { userId: 'userid2', userName: 'Ezra' },
    { userId: 'userid3', userName: 'Kimani' },
    { userId: 'userid4', userName: 'Rono' }
  ];
  
const boardrooms = [
    { boardId: 'userid1', boardName: 'Block A' },
    { boardId: 'userid2', boardName: 'Block B' },
    { boardId: 'userid3', boardName: 'Block C' },
    { boardId: 'userid4', boardName: 'Block E' }
];

for(let x of users){
    var option = {value: x.userId, label: x.userName};
    userOptions.push(option);
}

for(let x of boardrooms){
    var option = {value: x.boardId, label: x.boardName};
    boardOptions.push(option);
}

class CreateMeeting extends Component{
    
      

    render(){
        return(
            <div className="col-md-9">
                <div className="card " >
                    <form method="post" >
                        <div className="card-title planner-home">
                            <h5 style={{color: `bisque`}} >Create Meeting</h5>
                        </div>
                        <div className="card-body row">
                            <div className="error-div col-md-12">
                                <div >
                                    <p className="text-danger"></p>
                                </div>
                                <div >
                                    <p className="text-warning"></p>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div >
                                    <input  className="form-control" placeholder="Meeting Topic" required />
                                </div><br />
                                <div >
                                    <textarea  className="form-control" cols="12" rows="5"></textarea>
                                </div><br />
                                <div >
                                    <label className="col-form-label col-md-4"  >Capacity:</label>
                                    <input type="number" min="1" required />
                                </div><br />
                                <div className='row' >
                                    <label className="col-form-label col-md-4"  >Co- Owners:</label>
                                    <Select
                                        className="col-md-8"
                                        options={userOptions}
                                        isMulti
                                    />
                                </div><br />
                            </div>
                            <div className="col-md-6 ">
                                <div className='row' >
                                    <label className="col-form-label col-md-4"  >Boardroom:</label>
                                    <Select
                                        className=" col-md-7"
                                        options={boardOptions}
                                    />
                                </div><br />
                                <div >
                                    <label className="col-form-label col-md-4"  >Meet Start:</label>
                                    <input type="time" required min="now" />
                                </div><br />
                                <div >
                                    <label className="col-form-label col-md-4"  >Meet End:</label>
                                    <input type="time" required min="now" />
                                </div><br />
                                <div >
                                    <label className="col-form-label col-md-4"  >Dates: </label>
                                    <DatePicker format="YYYY-MM-DD" multiple plugins={[<DatePanel/>]}/>
                                </div><br />
                                <br />
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

export default CreateMeeting;