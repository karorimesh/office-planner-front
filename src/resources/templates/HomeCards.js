import React, {Component} from "react";
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
  


class HomeCards extends Component{
    render(){
        return(
            <div className="col-md-9">
                <div className="card " >
                    <div className="card-title planner-home">
                        <h5 >Meeting Planner</h5>
                    </div>
                    <div className="card-body row">


                        <div className="col-md-3 ">
                            <div className="card functions" >
                                <div className="card-body">
                                    <h2 className="card-title"><span className="fas fa-user"></span>Me</h2>
                                    <Link to={{pathname:'/profile'}}>My Profile</Link><br />
                                    <Link to={{pathname:'/meetings'}}> My Meetings</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 ">
                            <div className="card functions" >
                                <div className="card-body">
                                    <h4 className="card-title"><span className="fas fa-calendar"></span> Meetings</h4>
                                    <Link to={{pathname:'/meetings'}}>All Meetings</Link><br />
                                    <Link to={{pathname: '/boardrooms'}}>Boardrooms</Link><br />
                                    <Link to={{pathname: '/createMeet'}}> Schedule Meeting</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 ">
                            <div className="card functions" >
                                <div className="card-body">
                                    <h2 className="card-title"><span className="fas fa-user-friends"></span>Users</h2>
                                    <Link to={{pathname: '/users'}}>Users</Link><br />
                                    <Link  to={{pathname: '/createUser'}}> New User</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 ">
                            <div className="card functions" >
                                <div className="card-body">
                                    <h2 className="card-title"><span className="fas fa-wrench"></span>Extras</h2>
                                    <Link to={{pathname: '/logs'}}>Get Logs</Link><br />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {}
}
  
function withRouter(Component) {
    return function ComponentWithRouterProp(props) {
        let location = useLocation();
        return (
            <Component
                {...props}
                router={{ location }}
            />
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HomeCards));
