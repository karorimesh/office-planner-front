import React, {Component} from "react";

class ContentWrapper extends Component{
    render(){
        return(
            <section className="Cards" id="main">
                <div className="container">
                    <div className="row">

                        {this.props.children}

                    </div>
                </div>
            </section> 
        )
    }
}

export default ContentWrapper;