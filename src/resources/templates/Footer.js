import React, {Component} from "react";
import {Link} from 'react-router-dom';
class Footer extends Component{
render(){
    return(
        <div id="Footers">
            <footer id="footer" className=" Footer row">
                <div className="col-md-6">
                    <p>Mesh  &copy; 2021</p>
                    <p>Contact:</p>
                    <p><span className="fas fa-envelope-open"></span> email: info@tracom.co.ke</p>
                    <p><span className="fas fa-phone"></span> phone:+5689000775</p>
                </div>
                <div className="col-md-6">
                    <p>Terms and Conditions <span className="fas fa-link"></span></p>
                    <p>Licence and agreement <span className="fas fa-link"></span></p>
                </div>
            </footer>
        </div>
    )
}
}

export default Footer;