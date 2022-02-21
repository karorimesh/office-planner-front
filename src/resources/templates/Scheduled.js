import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Scheduled extends Component{

    render(){
        return(
            <div className="col-md-9">
                <div className="card " style={{ background: `none !important` }}>
                    <div className="card-title planner-home ">
                        <h5 style={{ color: `bisque` }}>Meetings</h5>

                    </div>
                    <div className="card-body row" style={{ paddingTop: `0px !important` }}>
                        <div className="col-md-12 ">

                            <div className='col-md-12 row' >
                                <div className='search col-md-8 row'>
                                    <form className='row'>
                                        <div className=''>
                                            <input type="hidden" name="dir" />
                                            <input type="hidden" name="field" />
                                            <input type="text" name="keyword" className="form-control" placeholder="Search" />
                                        </div>

                                        <div className=''>
                                            <button type="submit" className="btn btn-outline-light"><i className="fas fa-search" style={{ color: `gray` }}></i></button>
                                            {/* <input type="button" value="clear" id="clear" onclick="btnClear()"> */}
                                        </div>
                                    </form>
                                </div>
                                <div className='col-md-4'>
                                    <div style={{ marginLeft: `100%` }}>
                                        <Link to={{ pathname: '/sort' }} ><i style={{ color: `gray` }} className="sort fas fa-sort"></i></Link>
                                    </div>
                                </div>
                            </div>


                            <div className="meet-desc" style={{ margin: `0px` }}>
                                <div className="outer">
                                    <div style={{ width: `80%`, display: `flex`, flexDirection: `column` }}>
                                        <div className="meeting">
                                            <h3 style={{ textAlign: `left` }}><span ></span></h3>
                                        </div>
                                        <div className="meet-info">
                                            <div style={{ marginRight: `20px` }}>
                                                <p>Owners: <span ></span></p>
                                            </div>
                                            <div style={{ marginRight: `20px` }}>
                                                <p>Date: <span ></span></p>
                                            </div>
                                            <div style={{ marginRight: `20px` }}>
                                                <p>Time: <span ></span> - <span ></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: `10%` }}><Link to="home" style={{ fontSize: `40px` }}><i className="fas fa-edit"></i></Link>
                                    </div>
                                    <div style={{ width: `10%` }}><Link to="home" style={{ fontSize: `40px` }}><i className="fas fa-trash"></i></Link>
                                    </div>
                                    <div id="details" className='more-details'>
                                        <p>Meeting Name: <span></span></p>
                                        <p>Description: <span></span></p>
                                        <p>Owner: </p>
                                        <p>Co-Owners: <span ></span></p>
                                        <p>Location: <span ></span></p>
                                        <p>Starts: <span ></span></p>
                                        <p>Ends: <span ></span></p>
                                        <p>Date: <span ></span></p>
                                        <p>Capacity: <span ></span></p>
                                    </div>

                                </div>
                            </div>
                            <div  className="add-meet">
                                <Link to={{pathname: '/createRoom'}} style={{fontSize: `40px`}}><i className="fas fa-plus" style={{borderRadius: `50px`}}></i></Link>
                            </div>
                            <div className="pages">
                                &nbsp;
                                <Link to={{pathname: '/previous'}}><i className="fas fa-arrow-circle-left"></i></Link>
                                {/* <span ><i className="fas fa-arrow-circle-left"></i></span> */}
                                &nbsp;
                                <span >
                                    <Link to={{pathname: '/page'}}>1</Link>
                                    {/* <span >1</span> */}
                                    &nbsp;
                                </span>
                                &nbsp;
                                <Link  to={{pathname: '/next'}}><i className="fas fa-arrow-circle-right"></i></Link>
                                {/* <span ><i className="fas fa-arrow-circle-right"></i></span> */}
                                &nbsp;
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

export default Scheduled;