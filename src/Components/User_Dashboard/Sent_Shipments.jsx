import React from 'react';
import Navbar from './layouts/Navbar';
import Sidebar_ from './layouts/Sidebar';
import Table from './Sent_Shipments_Table';
import Footer from "./layouts/Footer";

class Sent_Shipments extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="sent_shipments">
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mx-3 col-2 d-none d-lg-block"></div>
                            <h1 className="text-lg-right text-center mx-5 my-5 px-3">الشحنات المرسلة</h1>
                        </div>
                        <div className="row justify-content-around">
                            <div className="h-100 d-xl-block d-none">
                                <Sidebar_/>
                            </div>
                            <div className="col-xl-9 col-11 px-0 h-100">
                                <Table sent_shipments={this.props.sent_shipments}/>
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

export default Sent_Shipments;