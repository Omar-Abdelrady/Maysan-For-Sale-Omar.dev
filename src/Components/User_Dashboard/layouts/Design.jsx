import React from 'react';
import Design_01 from './../../../img/design_01.png';
import Design_02 from './../../../img/design_02.png';

class Design extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="designs position-absolute col-4 d-none d-lg-block">
                    <img src={Design_01} alt="Design_01" className="img-fluid position-absolute" />
                    <img src={Design_02} alt="Design_02" className="img-fluid position-absolute" />
                </section>
            </React.Fragment>
        )
    }
}

export default Design;