import React from 'react';
import { Link } from 'react-router-dom';

class Login_Form extends React.Component {

    render() {
        return (
            <React.Fragment>
                <form
                    className="px-sm-5 px-2 py-4 m-lg-5 _form text-right col-lg-8 col-12"
                >
                    <h2 className="py-5">تسجيل الدخول</h2>
                    <div className="form-group py-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="معرف المستخدم او رقم الهاتف"
                        />
                    </div>
                    <div className="form-group py-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="كلمة المرور"
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row py-2">
                        <Link to="" className="forget-pass align-self-md-center align-self-start my-2">نسيت كلمة المرور؟</Link>
                        <button type="submit" className="btn submit-btn py-3 align-self-center align-self-md-end my-2">الدخول</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Login_Form;