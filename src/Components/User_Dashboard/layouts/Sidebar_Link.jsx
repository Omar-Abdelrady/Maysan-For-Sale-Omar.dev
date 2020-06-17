import React from 'react';
import {Redirect, Link} from "react-router-dom";

class Sidebar_Link extends React.Component {

    /*state = {
        is_clicked: false
    }

    handleLinkClick = (e) => {
        e.preventDefault();
        this.setState({
            is_clicked: true
        });
    };*/

    renderRedirect = () => {
        if (this.props.is_clicked) {
            return <Redirect to='/shipments'/>
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Link
                    to="/shipments"
                    onClick={(e) => {
                        this.props.handleLinkClick(e)
                    }}
                    className="row py-3 d-flex justify-content-center align-items-center"
                >
                    <div className="col-3 text-center">
                        {this.props.logo}
                    </div>
                    <div id="0"
                         className={this.props.is_clicked ? "col-9 px-0 text-right active" : "col-9 px-0 text-right"}>
                        {this.props.title}
                    </div>
                </Link>
            </React.Fragment>
        );
    }

}

export default Sidebar_Link;