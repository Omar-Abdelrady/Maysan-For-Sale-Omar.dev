import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from './Components/User_Dashboard/Login';
import Register from './Components/User_Dashboard/Register';
import Verification from './Components/User_Dashboard/Verification';
import Resend from './Components/User_Dashboard/Resend';

import Landing_Page from './Components/Landing_Page/Landing_Page';

import User_Dashboard from './Components/User_Dashboard/User_Dashboard';

import axios from 'axios';

class App extends React.Component {

    state = {
        register_inputs: {
            'name': '',
            'surname': '',
            'email': '',
            'mobile': '',
            'password': '',
            'password_confirmation': ''
        },
        verification_code: {
            'n1': '',
            'n2': '',
            'n3': '',
            'n4': ''
        },
        vc_inputs: [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ],
        sent_shipments: [
            {
                'shipment_number': 6541981,
                'sent_date': '2020/20/22',
                'shipper_data': 'محمد عبدالله',
                'recipient_data': 'احمد سعيد',
                'recipient_address': 'حي، شارع، مبنى',
                'shipment_content': 'صندوق',
                'shipment_status': 'خرجت للتوصيل'
            },
            {
                'shipment_number': 6541981,
                'sent_date': '2020/20/22',
                'shipper_data': 'محمد عبدالله',
                'recipient_data': 'احمد سعيد',
                'recipient_address': 'حي، شارع، مبنى',
                'shipment_content': 'صندوق',
                'shipment_status': 'خرجت للتوصيل'
            },
            {
                'shipment_number': 6541981,
                'sent_date': '2020/20/22',
                'shipper_data': 'محمد عبدالله',
                'recipient_data': 'احمد سعيد',
                'recipient_address': 'حي، شارع، مبنى',
                'shipment_content': 'صندوق',
                'shipment_status': 'خرجت للتوصيل'
            },
            {
                'shipment_number': 6541981,
                'sent_date': '2020/20/22',
                'shipper_data': 'محمد عبدالله',
                'recipient_data': 'احمد سعيد',
                'recipient_address': 'حي، شارع، مبنى',
                'shipment_content': 'صندوق',
                'shipment_status': 'خرجت للتوصيل'
            },
            {
                'shipment_number': 6541981,
                'sent_date': '2020/20/22',
                'shipper_data': 'محمد عبدالله',
                'recipient_data': 'احمد سعيد',
                'recipient_address': 'حي، شارع، مبنى',
                'shipment_content': 'صندوق',
                'shipment_status': 'خرجت للتوصيل'
            },
            {
                'shipment_number': 6541981,
                'sent_date': '2020/20/22',
                'shipper_data': 'محمد عبدالله',
                'recipient_data': 'احمد سعيد',
                'recipient_address': 'حي، شارع، مبنى',
                'shipment_content': 'صندوق',
                'shipment_status': 'خرجت للتوصيل'
            },
            {
                'shipment_number': 6541981,
                'sent_date': '2020/20/22',
                'shipper_data': 'محمد عبدالله',
                'recipient_data': 'احمد سعيد',
                'recipient_address': 'حي، شارع، مبنى',
                'shipment_content': 'صندوق',
                'shipment_status': 'خرجت للتوصيل'
            }
        ],
        Feedback: [
            {
                'name': 'تركي',
                'feedback': 'مررة ممتازين وسريعين شكرا لكم'
            },
            {
                'name': 'عبدالله',
                'feedback': 'جربتكم أول مرة وما عجبتني الخدمة بس لما تواصلت معهم ما تركوني الا وانا راضي شكراً لكم'
            },
            {
                'name': 'فارس',
                'feedback': 'شكرا لكم الان صرت اقدر اوفر لعملائي شحن اسرع'
            },
            {
                'name': 'نوره',
                'feedback': 'الله يسعدكم اسعاركم تفرق والجودة بعد'
            }
        ],
        notifications_counter: 5,
        graph: [
            {
                purple: "50%",
                orange: "20%",
            },
            {
                purple: "30%",
                orange: "40%",
            },
            {
                purple: "70%",
                orange: "60%",
            },
            {
                purple: "40%",
                orange: "30%",
            },
            {
                purple: "80%",
                orange: "20%",
            },
            {
                purple: "50%",
                orange: "20%",
            },
            {
                purple: "50%",
                orange: "10%",
            },
            {
                purple: "90%",
                orange: "10%",
            }
        ],
        errors: {},
        verify_errors: {},
        is_verified: false,
        v_error: '',
        resend_mobile: '',
        resend_error: '',
        counter: 2,
        resend_status: ''
    };

    handleRegisterFormChange = (e) => {
        this.setState({
            register_inputs: {
                ...this.state.register_inputs,
                [e.target.name]: e.target.value
            }
        });
    };

    handleRegisterFormSubmit = (e) => {

        e.preventDefault();

        const data = this.state.register_inputs;

        localStorage.setItem('mobile', data.mobile);

        axios.post(`http://127.0.0.1:8000/api/user/register`, data)
            .then(res => {
                const data = JSON.stringify(res.data);
                localStorage.setItem('token', data);
                window.location.href = 'http://localhost:3000/verify';
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    };

    handleVerificationCodeChange = (e, index) => {

        this.setState({
            verification_code: {
                ...this.state.verification_code,
                [e.target.name]: e.target.value
            }
        });

        let i = index - 1;
        if (i >= 0) {
            this.state.vc_inputs[i].current.focus();
        }
    };

    handleVerificationCodeSubmit = (e) => {
        e.preventDefault();

        const code = this.state.verification_code;
        let n = '';

        Object.keys(code).map(function (keyName) {
            n = n + code[keyName];
        });

        const config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        };

        const data = {
            'code': [...n].reverse().join('')
        };

        axios.post(`http://127.0.0.1:8000/api/user/verify`, data, config)
            .then(res => {
                const data = res.data;
                if ('error' in data) {
                    this.setState({
                        v_error: res.data['error'],
                        verify_errors: {}
                    })
                } else {
                    this.setState({
                        is_verified: true,
                        verify_errors: {}
                    });
                }
                //window.location.href = "";
            })
            .catch(error => {
                this.setState({
                    verify_errors: error.response.data.errors,
                    v_error: ''
                })
            })
    };

    handleVerificationCodeResend = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        };
        axios.post(`http://127.0.0.1:8000/api/user/resend`, {}, config)
            .then(res => {
                console.log(res);
                this.setState({
                    resend_status: res.data
                });
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    handleUserResendChange = (e) => {
        this.setState({
            resend_mobile: e.target.value
        });
    };

    handleUserResendSubmit = (e) => {
        e.preventDefault();
        const mobile = this.state.resend_mobile;
        localStorage.setItem('mobile', mobile);
        axios.post(`http://127.0.0.1:8000/api/user/resendUser`, {mobile})
            .then(res => {
                const data = res.data;
                if ('activated' in data) {
                    this.setState({
                        resend_error: data.activated
                    });
                } else {
                    const token = JSON.stringify(res.data);
                    localStorage.setItem('token', token);
                    window.location.href = 'http://localhost:3000/verify';
                }
            })
            .catch(error => {
                this.setState({
                    resend_error: error.response.data
                })
            })
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register
                            handleRegisterFormChange={this.handleRegisterFormChange}
                            handleRegisterFormSubmit={this.handleRegisterFormSubmit}
                            errors={this.state.errors}
                        />
                    </Route>
                    <Route path="/verify">
                        <Verification
                            inputs={this.state.vc_inputs}
                            handleVerificationCodeChange={this.handleVerificationCodeChange}
                            handleVerificationCodeSubmit={this.handleVerificationCodeSubmit}
                            handleVerificationCodeResend={this.handleVerificationCodeResend}
                            is_verified={this.state.is_verified}
                            errors={this.state.verify_errors}
                            v_error={this.state.v_error}
                            counter={this.state.counter}
                            resend_status={this.state.resend_status}
                        />
                    </Route>
                    <Route path="/resend">
                        <Resend
                            mobile={this.state.resend_mobile}
                            error={this.state.resend_error}
                            handleUserResendChange={this.handleUserResendChange}
                            handleUserResendSubmit={this.handleUserResendSubmit}
                        />
                    </Route>

                    <Route path="/dashboard">
                        <User_Dashboard
                            graph={this.state.graph}
                            sent_shipments={this.state.sent_shipments}
                            notifications_counter={this.state.notifications_counter}
                        />
                    </Route>

                    <Route path="/">
                        <Landing_Page feedback={this.state.Feedback} handle={this.handle}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;