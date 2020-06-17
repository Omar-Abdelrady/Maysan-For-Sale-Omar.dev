import React from 'react';
import {Link} from 'react-router-dom';
import Countdown from './Countdown';

class Verification_Form extends React.Component {

    verificationSuccess = () => {
        if (this.props.is_verified) {
            return (
                <div className="alert alert-success text-center my-4" role="alert">
                    تم تفعيل حسابك
                </div>
            )
        } else if (this.props.v_error) {
            return (
                <div className="alert alert-danger text-center my-4" role="alert">
                    {this.props.v_error}
                </div>
            )
        }
    };

    render() {
        let errors = this.props.errors;

        return (
            <React.Fragment>
                <form className="m-lg-5 px-5 _form text-right col-12"
                      onSubmit={(e) => {
                          this.props.handleVerificationCodeSubmit(e)
                      }}
                >
                    <h2 className="pb-1">رمز التحقق</h2>
                    <h6>فضلاً قم بادخال رمز التحقق المرسل على جوالك</h6>
                    {this.verificationSuccess()}
                    {
                        this.props.errors &&
                        Object.keys(errors).map(function (keyName, keyIndex) {
                            return (
                                <div className="alert alert-danger text-center my-4" role="alert" key={keyIndex}>
                                    {errors[keyName]}
                                </div>
                            )
                        })
                    }
                    {
                        this.props.resend_status &&
                        <div className="alert alert-info text-center my-4">
                            {this.props.resend_status}
                        </div>
                    }
                    <h6 className="text-center mt-5">تم ارسال الرمز الى {
                        localStorage.getItem('mobile')
                    }</h6>
                    <div className="h-auto verify d-flex justify-content-center my-4">
                        {
                            this.props.inputs.map((input, index) => {
                                let name = 'n' + (index + 1);
                                return (
                                    <div className="form-group mx-2" key={index}>
                                        <input type="text" name={name} maxLength="1" className="form-control"
                                               ref={input} onChange={(e) => {
                                            this.props.handleVerificationCodeChange(e, index)
                                        }}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="d-flex mb-5 p-4 flex-column justify-content-center align-items-center">
                        <button type="submit" className="btn submit-btn py-2">التالى</button>
                        <Countdown
                            handleVerificationCodeResend={this.props.handleVerificationCodeResend}
                            counter={this.props.counter}
                        />
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Verification_Form;