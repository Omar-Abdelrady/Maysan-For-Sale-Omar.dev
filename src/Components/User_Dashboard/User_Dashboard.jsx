import React from "react";
import {Route} from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Dashboard_Header from './layouts/Dashboard_Header';
import Sidebar_ from "./layouts/Sidebar";
import Footer from "./layouts/Footer";

import New_Shipment_Form from "./New_Shipment_Form";
import Sent_Shipments_Table from "./Sent_Shipments_Table";
import Statistics from "./Statistics";

class User_Dashboard extends React.Component {

    state = {
        title: ''
    };

    setDashboardHeading = (title) => {
        this.setState({title});
    };

    render() {
        return (
            <React.Fragment>
                <section className="user-dashboard">
                    <Navbar
                        notifications_counter={this.props.notifications_counter}
                    />

                    <div className="container-fluid">

                        <Dashboard_Header
                            title={this.state.title}
                        />

                        <div className="row justify-content-around justify-content-xl-start">

                            <div className="d-none sidebar_ d-xl-flex justify-content-center">
                                <Sidebar_/>
                            </div>

                            <div className="col-xl-9 col-11 px-0 h-100">
                                <Route path="/dashboard/new-shipment">
                                    <New_Shipment_Form/>
                                </Route>
                                <Route path="/dashboard/shipments">
                                    <Sent_Shipments_Table
                                        sent_shipments={this.props.sent_shipments}
                                    />
                                </Route>
                                <Route path="/dashboard" exact>
                                    <Statistics
                                        graph={this.props.graph}
                                        setHeading={this.setDashboardHeading}
                                    />
                                </Route>
                            </div>

                        </div>

                    </div>

                    <div className="my-5">
                        <Footer/>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default User_Dashboard;