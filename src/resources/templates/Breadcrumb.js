import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Breadcrumb extends Component{

    render(){
        return(
            <section className="Breadcrumb" id="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li>Home</li>
                    </ol>
                </div>
            </section>
        )
    }
}

export default Breadcrumb;