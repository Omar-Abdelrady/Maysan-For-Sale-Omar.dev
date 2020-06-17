import React from "react";

class Dashboard_Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="row py-2 justify-content-center justify-content-lg-start">
                    <div className="mx-3 col-2 d-none d-lg-block"></div>
                    <h1 className="mx-5 my-4 px-3 d-block">{this.props.title}</h1>
                </div>
            </React.Fragment>
        )
    }

}

export default Dashboard_Header;