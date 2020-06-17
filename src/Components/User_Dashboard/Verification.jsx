import React from 'react';
import Header from './layouts/Header';
import Design from './layouts/Design';
import Verification_Form from './Verification_Form';
import Footer from './layouts/Footer';

class Verification extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid login">
                    <div className="row position-relative">
                        <div className="user col-lg-9 col-12 position-relative">
                            <div className="container">
                                <Header/>
                                <Verification_Form
                                    inputs={this.props.inputs}
                                    handleVerificationCodeChange={this.props.handleVerificationCodeChange}
                                    handleVerificationCodeSubmit={this.props.handleVerificationCodeSubmit}
                                    handleVerificationCodeResend={this.props.handleVerificationCodeResend}
                                    is_verified={this.props.is_verified}
                                    errors={this.props.errors}
                                    v_error={this.props.v_error}
                                    counter={this.props.counter}
                                    resend_status={this.props.resend_status}
                                />
                                <div className="pt-5">
                                    <Footer/>
                                </div>
                            </div>
                        </div>
                        <div className="design col-3 d-none d-lg-block"></div>
                        <Design/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Verification;