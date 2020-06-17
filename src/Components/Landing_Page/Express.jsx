import React from "react";
import ex from '../../img/Group 141.png'
import expp from '../../img/Group.svg';
import WOW from "wowjs";

class Express extends React.Component {


    componentDidMount() {
        new WOW.WOW().init();
    };

    render() {
        return (
            <React.Fragment>
                <section className="express">
                    <div className="container-fluid container-lg px-lg-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-xl-7">
                                <div className="edit-height " style={{height:'390px'}}>

                                    <div className="img-car position-relative h-100  " >
                                        <img src={ex} className="img-fluid w-100 http://localhost:3000/Maysan bounceIn   " data-wow-iteration="1" alt="" />
                                        <div className="position-absolute expp" >
                                            <img src={expp} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 my-4 col-xl-5 text-center" >
								<div>
									                                <p className="text-white my-4">
                                    أكثر من ١٠٠ متجر يثقون فى ميسان شاركنا النجاح مع أول طلب شحن لك
                                </p>
                                <a href="https://maysanexpress.com/" className="btn bg-purple btn-sign text-bold text-white">ابدء الشحن الان</a>

								</div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )

    }
}
export default Express;