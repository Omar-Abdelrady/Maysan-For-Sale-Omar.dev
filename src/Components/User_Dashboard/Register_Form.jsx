import React from 'react';
import { Link } from 'react-router-dom';

class Register_Form extends React.Component {

    render() {
        const errors = this.props.errors;
        return (
            <React.Fragment>
                <form
                    className="m-lg-5 px-5 _form text-right col-lg-8 col-12 my-3"
                    onSubmit={(e) => {this.props.handleRegisterFormSubmit(e)}}
                >
                    <h2 className="pb-5">التسجيل</h2>
                    {
                        this.props.errors &&
                            Object.keys(errors).map(function (keyName, keyIndex) {
                                return (
                                    <div className="alert alert-danger" role="alert" key={keyIndex}>
                                        {errors[keyName]}
                                    </div>
                                )
                            })
                    }
                    <div className="row h-auto">
                        <div className="form-group py-2 col-md-6 col-12">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="الاسم الاول"
                                onChange={(e) => {this.props.handleRegisterFormChange(e)}}
                            />
                            <span>{}</span>
                        </div>
                        <div className="form-group py-2 col-md-6 col-12">
                            <input
                                type="text"
                                className="form-control"
                                name="surname"
                                placeholder="الاسم التاني"
                                onChange={(e) => {this.props.handleRegisterFormChange(e)}}
                            />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="البريد الالكتروني"
                            onChange={(e) => {this.props.handleRegisterFormChange(e)}}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control"
                            name="mobile"
                            placeholder="رقم الهاتف"
                            onChange={(e) => {this.props.handleRegisterFormChange(e)}}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="كلمة المرور"
                            onChange={(e) => {this.props.handleRegisterFormChange(e)}}
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="password"
                            className="form-control"
                            name="password_confirmation"
                            placeholder="تأكيد كلمة المرور"
                            onChange={(e) => {this.props.handleRegisterFormChange(e)}}
                        />
                    </div>

                    <div className="d-flex py-2">
                        <button type="submit"  className="btn submit-btn py-3 mr-lg-auto m-auto">
                            التسجيل
                        </button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Register_Form;