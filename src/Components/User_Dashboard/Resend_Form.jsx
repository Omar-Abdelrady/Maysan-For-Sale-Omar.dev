import React from 'react';
import {Link} from 'react-router-dom';

class Resend_Form extends React.Component {

    render() {

        return (
            <React.Fragment>
                <form
                    className="m-lg-5 px-5 _form text-center col-12"
                    onSubmit={(e) => {
                        this.props.handleUserResendSubmit(e)
                    }}
                >
                    {
                        this.props.error &&
                        <div className="alert alert-danger">
                            {this.props.error}
                        </div>
                    }
                    <h2 className="py-5 text-center">من فضلك ادخل رقم الهاتف</h2>
                    <div className="form-group d-flex justify-content-center align-items-center py-2">
                        <input
                            type="text"
                            className="form-control col-md-6 col-sm-10 col-12"
                            placeholder="رقم الهاتف"
                            value={this.props.mobile}
                            onChange={(e) => {
                                this.props.handleUserResendChange(e)
                            }}
                        />
                    </div>
                    <div className="d-flex mb-5 p-4 flex-column justify-content-center align-items-center">
                        <button type="submit" className="btn submit-btn py-3">التالى</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Resend_Form;