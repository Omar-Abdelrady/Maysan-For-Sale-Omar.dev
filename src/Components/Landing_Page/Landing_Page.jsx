import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Information from "./Information";
import Express from "./Express";
import Benefit from './Benefit';
import Feedback from './Feedback';
import Shipping from "./Shipping";

class Landing_Page extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="landing-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 p-0 position-sticky Navbar-piernt ">
                                <Navbar />
                            </div>
                            <div className="col-12 p-0 py-5 bg-purple">
                                <Header />
                            </div>
                            <div className="col-12 my-5">
                                <Shipping />
                            </div>
                            <div className="col-12 my-5">
                                <Benefit />
                            </div>
                            <div className="col-12 py-5 bg-orange information">
                                <Information />
                            </div>
                            <div className="col-12 pb-5 px-0 ">
                                <Express />
                            </div>
                            <div className="col-12 my-5">
                                <Feedback feedback={this.props.feedback} />
                            </div>
                            <div className="col-12 p-0 mt-5 pt-5">
                                <Footer />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default Landing_Page;