import React from "react";
import Logo from './../../img/Landing_Page/footer-logo.svg'
import User_Footer from '../User_Dashboard/layouts/Footer';
import visa from '../../img/visa-mastercard-discover-american-express_364451.png';
import visa2 from '../../img/Landing_Page/BlogPicMain3677-636677051245215173.png'
class Footer extends React.Component {


    render() {
        return (
            <React.Fragment>
                <section className="footer pt-5">
                    <div className="container ">
                        <div className="row position-relative">
                            <div className="col-12 mb-sm-5 popup position-absolute">
                                <div className="pl-4 pr-4 pt-3 pb-3">
                                    <div className="row">
                                        <div className='text-md-right col-12 col-lg-8 text-center'>
                                            <h3>لا تضيع وقتك ووقت عملائك بعد الان</h3>
                                            <p>
                                                نجيك لحد باب البيت وناخذ طلبك ونغلفه
وبعدين نشحنه الييييييييين الباب
                                            </p>
                                        </div>
                                        <div className="text-md-right col-12 col-lg-4 text-center d-flex justify-content-center align-items-center">
                                            <a href="#" className='bg-orange text-bold btn btn-Form'>ابدء الشحن الان</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 pt-5 mt-5 text-center">
                                <div className="logo my-5 mt-md-0 pt-5">
                                    <img src={Logo} className='img-fluid' alt="Logo" />
                                </div>
                                <div className="social-links">
                                    <ul className="list-inline">
                                        <li className="list-inline-item mx-lg-2 mx-1">
                                            <a href="#">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.9711 27.5711C6.36877 27.5711 0.185547 21.3878 0.185547 13.7855C0.185547 6.18321 6.36877 0 13.9711 0C21.5734 0 27.7566 6.18321 27.7566 13.7855C27.8073 21.3878 21.5734 27.5711 13.9711 27.5711Z" fill="white" />
                                                    <path d="M21.7763 14.7989V19.9685C21.7763 20.1205 21.6749 20.2219 21.5229 20.2219H18.8367C18.6847 20.2219 18.5833 20.1205 18.5833 19.9685V15.1537C18.5833 13.8866 18.1272 13.025 17.0122 13.025C16.1506 13.025 15.6437 13.5825 15.3903 14.1907C15.289 14.3934 15.289 14.6469 15.289 14.9509V19.9685C15.289 20.1205 15.1876 20.2219 15.0356 20.2219H12.3494C12.1974 20.2219 12.096 20.1205 12.096 19.9685C12.096 18.7014 12.1467 12.5182 12.096 11.0484C12.096 10.8964 12.1974 10.795 12.3494 10.795H14.9849C15.1369 10.795 15.2383 10.8964 15.2383 11.0484V12.1634C15.2383 12.1634 15.2383 12.1634 15.2383 12.2141V12.1634C15.6437 11.5046 16.404 10.5923 18.0765 10.5923C20.2558 10.5923 21.7763 11.91 21.7763 14.7989ZM7.63598 20.1712H10.3221C10.4742 20.1712 10.5755 20.0698 10.5755 19.9178V11.0484C10.5755 10.8964 10.4742 10.795 10.3221 10.795H7.63598C7.48393 10.795 7.38257 10.8964 7.38257 11.0484V19.9685C7.38257 20.0698 7.48393 20.1712 7.63598 20.1712Z" fill="#613EA4" />
                                                    <path d="M8.85207 9.6292C9.77577 9.6292 10.5246 8.88038 10.5246 7.95668C10.5246 7.03298 9.77577 6.28418 8.85207 6.28418C7.92837 6.28418 7.17957 7.03298 7.17957 7.95668C7.17957 8.88038 7.92837 9.6292 8.85207 9.6292Z" fill="#613EA4" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mx-lg-2 mx-1">
                                            <a href="#">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.9204 26.0505C20.5822 26.0505 25.9827 20.65 25.9827 13.9881C25.9827 7.32628 20.5822 1.92578 13.9204 1.92578C7.25852 1.92578 1.85803 7.32628 1.85803 13.9881C1.85803 20.65 7.25852 26.0505 13.9204 26.0505Z" fill="#613EA4" />
                                                    <path d="M13.9204 27.875C6.31807 27.875 0.185547 21.6918 0.185547 14.1401C0.185547 6.53781 6.36875 0.405273 13.9204 0.405273C21.472 0.405273 27.6552 6.58849 27.6552 14.1401C27.6552 21.6918 21.5227 27.875 13.9204 27.875ZM18.5831 8.51441C18.0256 8.51441 17.5695 8.97055 17.5695 9.52805C17.5695 10.0856 18.0256 10.5417 18.5831 10.5417C19.1406 10.5417 19.5968 10.0856 19.5968 9.52805C19.5968 8.97055 19.1406 8.51441 18.5831 8.51441ZM14.0218 9.83215C11.6904 9.83215 9.76447 11.7581 9.76447 14.0894C9.76447 16.4208 11.6904 18.3467 14.0218 18.3467C16.3531 18.3467 18.2791 16.4208 18.2791 14.0894C18.3297 11.7581 16.4038 9.83215 14.0218 9.83215ZM14.0218 16.8263C12.5013 16.8263 11.2849 15.6099 11.2849 14.0894C11.2849 12.569 12.5013 11.3526 14.0218 11.3526C15.5422 11.3526 16.7586 12.569 16.7586 14.0894C16.7586 15.6099 15.5422 16.8263 14.0218 16.8263ZM22.6377 10.5417C22.6377 7.65281 20.3063 5.32144 17.4175 5.32144H10.5247C7.63583 5.32144 5.30443 7.65281 5.30443 10.5417V17.4345C5.30443 20.3233 7.63583 22.6547 10.5247 22.6547H17.4175C20.3063 22.6547 22.6377 20.3233 22.6377 17.4345V10.5417ZM21.0159 17.4345C21.0159 19.4111 19.3941 21.0329 17.4175 21.0329H10.5247C8.5481 21.0329 6.92626 19.4111 6.92626 17.4345V10.5417C6.92626 8.56509 8.5481 6.94327 10.5247 6.94327H17.4175C19.3941 6.94327 21.0159 8.56509 21.0159 10.5417V17.4345Z" fill="white" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mx-lg-2 mx-1 twitter-logo">
                                            <a href="#" className="">
                                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.9151 1.81871C16.4083 2.07212 15.8508 2.17348 15.2933 2.27484C15.5467 2.22416 15.9521 1.76802 16.1042 1.5653C16.3576 1.2612 16.5603 0.957106 16.6617 0.602332C16.6617 0.55165 16.6617 0.551651 16.6617 0.500969C16.611 0.500969 16.611 0.500969 16.5603 0.500969C15.9521 0.855744 15.2933 1.05847 14.6344 1.2612C14.5837 1.2612 14.533 1.26121 14.4823 1.21052C14.4317 1.15984 14.381 1.10916 14.3303 1.05848C14.0262 0.805065 13.7221 0.602333 13.418 0.500969C12.9619 0.298241 12.4551 0.247559 11.9989 0.247559C11.5428 0.298241 11.036 0.399606 10.6305 0.653017C10.2251 0.855745 9.8196 1.15984 9.5155 1.5653C9.21141 1.97075 8.95801 2.3762 8.85664 2.88303C8.75528 3.33916 8.75529 3.79531 8.80597 4.25145C8.80597 4.35281 8.80595 4.35281 8.75527 4.35281C6.1198 3.94735 3.8898 2.9844 2.11593 0.957112C2.01456 0.855748 2.01455 0.855748 1.91319 0.957112C1.15296 2.1228 1.50775 3.99803 2.47071 4.96099C2.62276 5.06236 2.72411 5.2144 2.87616 5.31577C2.82548 5.31577 2.16661 5.26509 1.60911 4.96099C1.50774 4.91031 1.50774 4.961 1.50774 5.01168C1.50774 5.11304 1.50774 5.26508 1.50774 5.41713C1.65978 6.58282 2.47069 7.69783 3.58569 8.15397C3.73774 8.20465 3.88981 8.25533 3.99117 8.30602C3.73776 8.3567 3.48435 8.40738 2.72412 8.35669C2.62276 8.35669 2.57207 8.40737 2.62275 8.45806C3.18025 9.97852 4.39663 10.4347 5.25823 10.6881C5.35959 10.6881 5.51161 10.6881 5.61298 10.7388C5.30888 11.1949 4.29525 11.5497 3.78843 11.7017C2.92684 12.0058 1.96386 12.1579 1.05159 12.0565C0.89954 12.0565 0.848877 12.0565 0.848877 12.0565C0.798195 12.0565 0.848864 12.1072 0.899546 12.1579C1.10227 12.2592 1.25434 12.4113 1.45707 12.5126C2.06525 12.8167 2.67343 13.0701 3.28161 13.2222C6.57595 14.1345 10.2757 13.4756 12.7592 10.9922C14.6851 9.06624 15.3946 6.3801 15.3946 3.74463C15.3946 3.64326 15.496 3.59258 15.5974 3.54189C16.1042 3.18712 16.5096 2.73099 16.8644 2.22416C16.9658 2.1228 16.9658 2.02144 16.9658 1.97075C16.9658 1.76803 16.9658 1.76802 16.9151 1.81871Z" fill="#613EA4" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.17053 13.4758C6.17053 13.4248 6.47684 13.4758 6.17053 13.4758C6.17053 13.4248 6.22158 13.4758 6.17053 13.4758Z" fill="white" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="list-inline-item mx-lg-2 mx-1">
                                            <a href="#">
                                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.8362 27.8243C6.23389 27.8243 0 21.6411 0 13.9881C0 6.38575 6.18321 0.151855 13.8362 0.151855C21.4385 0.151855 27.6724 6.33507 27.6724 13.9881C27.6724 21.6411 21.4892 27.8243 13.8362 27.8243Z" fill="white" />
                                                    <path d="M22.1481 11.9101C22.1481 9.93345 20.577 8.3623 18.6004 8.3623H9.37624C7.39964 8.3623 5.82849 9.93345 5.82849 11.9101V16.218C5.82849 18.1946 7.39964 19.7658 9.37624 19.7658H18.6004C20.577 19.7658 22.1481 18.1946 22.1481 16.218V11.9101ZM16.3197 14.2921L12.6199 16.3194C12.4679 16.4208 12.3158 16.2687 12.3158 16.1167V11.9607C12.3158 11.758 12.4679 11.6566 12.6199 11.758L16.3197 13.8867C16.5224 13.9373 16.4717 14.1908 16.3197 14.2921Z" fill="#613EA4" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="links col-6 col-md-2 text-center pt-5 mt-md-5 text-md-right">
                                <h6 className="text-white text-bold">الشركة</h6>
                                <ul>
                                    <li className=""><a className="text-decoration-none text-white" href="https://maysanexpress.com">المدونة</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/about">من نحن</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com">الوظائف</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com">الاعلام</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com">المنتجات</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com">الشركاء</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com">الاسعار</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/contact-us">تواصل معنا</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/contact-us">الدعم الفني</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://new.maysanexpress.com/platform/ar">تسجيل حساب</a></li>
                                </ul>
                            </div>
                            <div className="links col-6 col-md-2 text-center pt-5 mt-md-5 text-md-right">
                                <h6 className="text-white text-bold">الربط</h6>
                                <ul>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/">Shopifay</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/">اوبن كارت</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/">ماجينتو</a></li>
                                </ul>
                            </div>
                            <div className="links col-6 col-md-2 text-center pt-5 mt-md-5 text-md-right">
                                <h6 className="text-white text-bold">الوثائق القانونية</h6>
                                <ul>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/page/3/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9+%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9">سياسة الخصوصية</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/">اتفاقية الاستخدام</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/">المنتجات المحظورة شحنها</a></li>
                                </ul>
                            </div>
                            <div className="links col-6 col-md-2 pt-5 mt-md-5 text-center text-md-right">
                                <h6 className="text-white text-bold">المركز التعليمي</h6>
                                <ul className="h-100">
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/faqs">كيفية استخدام المنصة</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com/faqs">كيف تقوم بشحن طلبك الاول</a></li>
                                    <li><a className="text-decoration-none text-white" href="https://maysanexpress.com">وسائل الدفع المتاحة</a></li>
                                </ul>
                            </div>
                            <div className="col-md-12 col-6 order-1 order-md-0 my-4 text-sm-left text-center">
                                <div className="my-2">
                                    <img src={visa2} className="img-fluid" alt="" />
                                    <img src={visa} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-md-12 col-6 my-2 order-0 order-md-1 text-right">
                                <User_Footer />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Footer;