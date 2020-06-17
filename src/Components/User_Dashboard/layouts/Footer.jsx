import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <footer className="col-12 px-0">
                    <ul className="d-flex px-5 mx-lg-5 flex-md-row flex-column">
                        <li className="px-2 text-center">شبكة ميسان للخدمات اللوجستية 2020</li>
                        <li className="px-2 text-center">
                            <a href="#">اتفاقية الاستخدام</a>
                        </li>
                        <li className="px-2 text-center">
                            <a href="#">سياسة الخصوصية</a>
                        </li>
                        <li className="px-2 text-center">
                            <a href="#">المساعدة</a>
                        </li>
                    </ul>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;