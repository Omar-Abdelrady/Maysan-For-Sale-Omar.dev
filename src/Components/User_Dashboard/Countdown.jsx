import React from 'react';

function Countdown(props) {
    let [counter, setCounter] = React.useState(120);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    if (counter > 0) {
        return (
            <React.Fragment>
                <p className="pt-3">اعادة الارسال خلال : {counter}</p>
                <button
                    type="button"
                    className="text-center btn btn-light resend disable"
                    disabled
                >
                    اعادة ارسال الرمز
                </button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p className="pt-3">اعادة الارسال خلال : {counter}</p>
                <button
                    onClick={(e) => {
                        props.handleVerificationCodeResend(e);
                        setCounter(counter + 120)
                    }}
                    className="text-center btn btn-light resend"
                >
                    اعادة ارسال الرمز
                </button>
            </React.Fragment>
        );
    }
}

export default Countdown;