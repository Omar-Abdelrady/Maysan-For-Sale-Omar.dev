import React from 'react';
import Logo from './../../../img/logo 1.png';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    render() {

        let link = "";
        let btn = "";
        switch (window.location.pathname) {
            case "/login":
                link = "سجل الان";
                btn = "/register";
                break;
            case "/register":
            case "/verify":
            case "/resend":
                link = "الدخول";
                btn = "/login";
                break;
        }

        return (
            <React.Fragment>
                <header className="d-flex justify-content-between align-items-center my-5">
                    <section>
                        <img src={Logo} alt="LOGO"/>
                    </section>
                    <Link to={btn} className="btn login_btn px-3 py-2">{link}</Link>
                </header>
            </React.Fragment>
        )
    }

}

export default Header;