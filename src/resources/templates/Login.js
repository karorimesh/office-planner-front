import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as AuthActions from '../store/actions/AuthActions';


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToprops = dispatch => {
    return {
        login: (email,password) =>{
            dispatch(AuthActions.login(email,password));
        }
    }
}

class Login extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <div className="card " style={{backgroundColor: `black`, opacity: `70%`}} >
                    <form onSubmit={e => {
                        e.preventDefault();
                        this.props.login(this.props.values.username,this.props.values.password)
                    }} data-sb-form-api-token="API_TOKEN">
                        <div className="card-title planner-home">
                            <h5  >Login</h5>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-3 "></div>
                            <div className="col-md-6 ">
                                <div className="errorHandle">
                                    <p className="text-danger">error!!</p>
                                </div>
                                <div className="errorHandle">
                                    <p className="text-warning">You have logged out.</p>
                                </div>
                                <div >
                                    <input type="text" name="username" placeholder="Username" className="outline" id="input" value={this.props.values['username']}
                                     onChange={this.props.handleChange} />
                                </div><br />
                                <div >
                                    <input type="password" name="password" placeholder="Password" className="outline" id="input2" required value={this.props.values['password']}
                                     onChange={this.props.handleChange}/>
                                </div><br />
                                <div ><a style={{color: `bisque`}} >Forgot Password?</a></div><br />

                                <div>
                                    <button className="btn btn-primary" type="submit" style={{width: `30%`, marginLeft: `10%`, borderRadius: `50%`}}>Login</button>
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

export default connect(
    mapStateToProps,
    mapDispatchToprops
) (withFormik({
    mapPropsToValues: () => ({
        username: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Enter username"),
        password:Yup.string().required('Password required')
    }),
    handleSubmit:(values,{setSubmitting}, login) =>{
        console.log('login attempt', values);
        alert("Form has been submitted dope!", JSON.stringify(values));
        // login()
    }
})(Login));