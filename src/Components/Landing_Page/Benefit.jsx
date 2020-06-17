import React from 'react';
import blue_circle from './../../img/Landing_Page/blue_circle.svg';
import right_mark from './../../img/Landing_Page/right_mark.svg';
import orange_circle from './../../img/Landing_Page/orange_circle.svg';
import order_3 from './../../img/Landing_Page/order_3.svg';
import red_circle from './../../img/Landing_Page/red_circle.svg';
import bg_circle from './../../img/Landing_Page/bg-circle.svg';
import WOW from 'wowjs';

class Benefit extends React.Component {


    componentDidMount() {
        new WOW.WOW().init();
    };

    render() {
        return (
            <React.Fragment>
                <div className="benefit my-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 wow col-12 text-lg-right text-center d-flex flex-column justify-content-center bounceInUp" data-wow-iteration="1">
                                <h2 className="py-2">كيف نعمل؟</h2>
                                <h6 className="py-2">اقترب اكثر من تحقيق أهدافك نحو ادارة شحناتك بشكل افضل واكثر كفاءة</h6>
                                <p className="py-2">ما يميزنا أنه فى ميسان نسعى دائما ً الى توفير الحلول اللوجستية فى الوقت والمكان المناسب لتعزيز عمليات التجارة الالكترونية وخدمة أصحاب المتاجر الصغيرة والمتوسطة، كل ما عليك فعله للبدء في شحن طلبات متجرك تسجيل حسابك (مجاناً) ومن ثم أدخل على لوحة التحكم وأصدر طلب الشحن الأول بعدها قم بتأكيد طلبك من خلال وسائل دفع متعددة.</p>
                            </div>
                            <div className="col-lg-6 col-12 text-right d-flex flex-column flex-md-row my-3 my-lg-0">
                                <div className="position-absolute bg-circle d-none d-lg-block">
                                    <img src={bg_circle} />
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                        <div className="box-1 position-relative py-5 pr-4">
                                            <div>بيانات المستلم</div>
                                            <h6 className="mr-3 my-3">قم بتعبئة البيانات المطلوبة</h6>
                                            <p className="mr-3">ادخل معلومات الشحنة والمستلم وسيتم تخزينها فى حسابك</p>
                                            <div className="position-absolute circle">
                                                <img src={blue_circle} />
                                            </div>
                                            <div className="order position-absolute d-flex justify-content-center align-items-center">2</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="col-12 box-2 mx-auto position-relative py-4 pr-4 my-3">
                                            <div className="d-flex justify-content-end align-items-center">
                                                <div className="rec-light mx-1"></div>
                                                <div className="rec-bold d-flex justify-content-center align-items-center m-1">
                                                    <div className="circle d-flex justify-content-center align-items-center">
                                                        <img src={right_mark} />
                                                    </div>
                                                </div>
                                                <div className="rec-light mx-1"></div>
                                            </div>
                                            <h6 className="mr-2 my-3">قم باختيار الباقة المناسبة لك</h6>
                                            <p className="mr-2">يمكنك الختيار من بين الباقات المتاحة او الدفع حسب استخدامك</p>
                                            <div className="position-absolute circle">
                                                <img src={orange_circle} />
                                            </div>
                                            <div className="order position-absolute d-flex justify-content-center align-items-center">1</div>
                                        </div>
                                        <div className="col-12 box-3 m-auto position-relative py-5 pr-4 my-3">
                                            <div className="d-flex justify-content-end align-items-center mb-4 mx-2">
                                                <div className="order-3 d-flex justify-content-center align-items-center">
                                                    <img src={order_3} />
                                                </div>
                                                <div className="order-3-circle mx-2"></div>
                                            </div>
                                            <h6 className="mr-2 my-3">قم باكمال الدفع</h6>
                                            <p className="mr-2">قم باكمال الدفع وسيتم اصدار فاتورة الشحن فى حسابك مباشرة</p>
                                            <div className="position-absolute circle">
                                                <img src={red_circle} />
                                            </div>
                                            <div className="order position-absolute d-flex justify-content-center align-items-center">3</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Benefit;
