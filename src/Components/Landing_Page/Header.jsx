import React from "react";
import HH from "../../img/Landing_Page/HH.png"
import WOW from 'wowjs';

class Header extends React.Component {

    componentDidMount(){
        new WOW.WOW().init();
    };
    render() {
        return (
            <React.Fragment>
                <section className="Header position-relative bg-purple">
                    <div className="container-fluid h-100">
                        <div className="row h-100 justify-content-center align-items-center">

                            <div className="col-lg-6 col-12 d-flex justify-content-center position-relative h-100 "  >

                                <div className="mr-lg-5">
                                    <div className="mr-lg-5 wow bounceInUp" data-wow-iteration="1">
                                        <div className="text-center text-lg-right d-block mt-5 pt-5 mb-5">
                                            <h2 className="h1 mb-3 text-white">معنا الشحن صار اسهل</h2>
                                            <p className="pragraph-header text-white text-light">نعمل على تقديم خدمة شحن ممُيزة<br /> بمعايير عالمية لأصحاب المتاجر الإلكترونية</p>
                                        </div>
                                        <div className="d-block sign text-center text-lg-right mt-5">
                                            <form action="https://maysanexpress.com/" className="">
                                                <div className="row justify-content-center">
                                                    <div className="form-group col-lg-12 col-10 position-relative">
                                                        <input type="number" className="form-control" placeholder="رقم الجوال" />
                                                        <button type="submit" className="btn btnL bg-orange text-white position-absolute">سجل الان</button>
                                                    </div>
                                                    <div className="col-12">
                                                        <ul className="mt-3">
                                                            <li className="list-inline-item mx-2 text-white">
                                                                <svg className="ml-1" width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#F16724" />
                                                                </svg>
                                                                لا حاجة الى بطاقة ائتمان
                                                            </li>
                                                            <li className="list-inline-item mx-2 text-white">
                                                                <svg className="ml-1" width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#F16724" />
                                                                </svg>
                                                                نظام سهل ومرن
                                                            </li>
                                                            <li className="list-inline-item mx-2 text-white">
                                                                <svg className="ml-1" width={11} height={8} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#F16724" />
                                                                </svg>
                                                                خدمة عملاء
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 p-0 h-100 header-left position-relative d-none d-lg-block" >
                                <img src={HH} className="img-fluid wow rubberBand" data-wow-iteration="1" alt="" />

                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Header;