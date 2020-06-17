import React from 'react';
import Header from './layouts/Header';
import Design from './layouts/Design';
import Login_Form from './Login_Form';
import Footer from './layouts/Footer';

class Login extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid login">
                    <div className="row position-relative">
                        <div className="user col-lg-9 col-12 position-relative">
                            <div className="container">
                                <Header />
                                <Login_Form />
                                <Footer />
                            </div>
                        </div>
                        <div className="design col-3 d-none d-lg-block"></div>
                        <Design />
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Login;