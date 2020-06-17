import React from 'react';
import Send_Steps from "./Send_Steps";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import New_Shipment_Form from "./New_Shipment_Form";
import Content_Shipment from "./Content_Shipment";

class Shipments extends React.Component{
    render() {
        return(
            <React.Fragment>
                <section className="bg-img">
                    <Navbar />
                    <div className="container-fluid mt-5">
                        <div className="row justify-content-center text-right">
                            <div className="col-lg-3 d-none d-lg-inline-block"></div>
                            <div className="col-9 text-center text-lg-right "><h1 className="h1">أرسل شحنة جددة</h1></div>
                            <div className="col-lg-3 d-none d-lg-inline-block mt-5">
                                <Sidebar />
                            </div>
                            <div className="col-9 mt-5">
                                <div className="container">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-12 text-center">
                                            <Send_Steps />
                                            {/*<New_Shipment_Form />*/}
                                            <Content_Shipment />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Shipments;