import React from "react";
import img from "../../img/Firefox - Mac & Windows 1.png";
import icon from '../../img/Landing_Page/orange_circle.png';
import WOW from 'wowjs';

class Shipping extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    };
    render() {
        return (
            <React.Fragment>
                <section className="shipping">
                    <div className="container">
                        <div className="row justify-content-center align-items-center " >
                            <div className="col-12">
                                <h2 className="text-purple text-center py-2">
                                    طريقة شحن جديدة
                                </h2>
                                <p className="text-center my-3 paragraph">
                                    لا يعد هناك حاجة للانتظار في طوابير لشحن الطرود الأن قم بأصدار طلبات الشحن وأنت في مكانك من خلال منصة ميسان رح توفر وقت وجهد لتتفرغ أكثر لتجارتك الإلكترونية
                                </p>
                            </div>
                            <div className="col-12 position-relative content d-grid my-3">
                                <img src={img} className="img-fluid w-100 wow bounceIn" alt="" data-wow-iteration="1"/>
                                <div className="position-absolute D1">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Shipping;