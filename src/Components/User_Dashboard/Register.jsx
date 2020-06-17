import React from 'react';
import Header from './layouts/Header';
import Design from './layouts/Design';
import Register_Form from './Register_Form';
import Footer from './layouts/Footer';

class Register extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid login">
                    <div className="row position-relative">
                        <div className="user col-lg-9 col-12 position-relative">
                            <div className="container">
                                <Header />
                                <Register_Form
                                    handleRegisterFormChange={this.props.handleRegisterFormChange}
                                    handleRegisterFormSubmit={this.props.handleRegisterFormSubmit}
                                    errors={this.props.errors}
                                />
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

export default Register;