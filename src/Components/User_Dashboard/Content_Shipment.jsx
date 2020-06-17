import React from 'react';

class Content_Shipment extends React.Component{
    render() {
        return(
            <React.Fragment>
                <section className="content-shipment">
                    <form action="#" className="">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-12 col-md-6 p-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="عدد القطعة"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="الوزن الإجمالي (بالكيلو)"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 p-3">
                                    <div className="form-group">
                                        <textarea className="form-control" rows="5" placeholder="محتوى الشحنة"></textarea>
                                    </div>
                                </div>
                                <div className="col-12 text-right consent">
                                    <input type="checkbox" id="submit"/>
                                    <label htmlFor="submit" className="mr-2">أقر انا المرسل ان الشخنة لا تخالف <a href="#">سياسة ميسان</a></label>
                                </div>
                                <div className="col-12 p-3 d-lg-flex d-block">
                                    <div className="form-group">
                                        <button className="btn-Form btn submit-btn py-3 mr-auto">ألتالي</button>
                                    </div>
                                    <div className="form-group  mr-auto">
                                        <button className="btn-Form-back btn submit-btn py-3">السابق</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>
                </section>
            </React.Fragment>
        )
    }
}
export default Content_Shipment;