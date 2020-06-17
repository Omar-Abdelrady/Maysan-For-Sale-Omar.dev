import React from 'react';
import { Carousel } from 'react-bootstrap';
import feedback from './.././../img/Landing_Page/feedback.svg';
import signature from './../../img/Landing_Page/signature.svg';
import comment_photo from './../../img/Landing_Page/comment_photo.png';
import feedback_01 from './../../img/Landing_Page/feedback_right_top.png';
import feedback_02 from './../../img/Landing_Page/feedback_left_middle.png';
import feedback_03 from './../../img/Landing_Page/feedback_middle_bottom.png';
import feedback_04 from './../../img/Landing_Page/feedback_middle_top.png';
import feedback_05 from './../../img/Landing_Page/feedback_right_middle.png';
import feedback_06 from './../../img/Landing_Page/feedback_left_bottom.png';
import WOW from 'wowjs';


class Feedback extends React.Component {

    componentDidMount() {
        new WOW.WOW().init();
    };
    render() {
        return (
            <React.Fragment>
                <section className="feedback my-5 wow zoomInDown" >
                    <div className="container">
                        <h2 className="text-center">ماذا يقول عملائنا عنا</h2>
                        <div className="row d-flex justify-content-center align-items-center">
                            <Carousel controls={false} className="col-12 col-md-6 my-5 position-relative" interval={2500}>
                                {
                                    this.props.feedback.map((element, index) => {
                                        return (
                                            <Carousel.Item key={index}>
                                                <div className="feed mb-1"></div>
                                                <div className="paragraph p-5 d-flex flex-column align-items-center position-relative">
                                                    <div className="comment-photo position-absolute">
                                                        <img src={comment_photo} className="img-fluid" />
                                                    </div>
                                                    <h6 className="mb-0">{element['name']}</h6>
                                                    <div className="comment">
                                                        <img src={feedback} className="img-fluid" />
                                                        <img src={feedback} className="img-fluid" />
                                                    </div>
                                                    <p className="text-center px-4 py-3">{element['feedback']}</p>
                                                    <div>
                                                        <img src={signature} className="img-fluid" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default Feedback;