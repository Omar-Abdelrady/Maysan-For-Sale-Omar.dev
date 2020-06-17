import React from "react";


class Graph extends React.Component {


    state = {
        button: [
            true,
            false
        ]
    };

    handelButtonClick = (e) => {
        e.preventDefault();
        let button = this.state.button;
        button = button.filter((button) => {
            button = false;
        });
        button[e.target.id] = true;
        this.setState({button});
    };


    render() {
        return (
            <React.Fragment>

                <section className="graph bg-white">
                    <div className="container-fluid h-100">
                        <div className="row py-3 h-100">
                            <div className="col-12 head p">
                                <div className="text-right">
                                    <a href="#"
                                       id="0"
                                       className={
                                           this.state.button[0] ? "py-1 px-5 btn btn-Form month mx-2"
                                               : "text-purple py-1 btn btn-outline-light px-5 weak mx-2"
                                       }
                                       onClick={(e) => {
                                           this.handelButtonClick(e)
                                       }}
                                    >
                                        الشهر
                                    </a>
                                    <a href="#"
                                       id="1"
                                       className={
                                           this.state.button[1] ? "py-1 px-4 btn btn-Form month mx-2"
                                               : "text-purple py-1 btn btn-outline-light px-4 weak mx-2"
                                       }
                                       onClick={(e) => {
                                           this.handelButtonClick(e)
                                       }}
                                    >
                                        الاسبوع
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 pt-3 position-relative">
                                <div className="graphs p-3 d-flex justify-content-around align-items-end mt-3">
                                    <div
                                        className="border-graph d-flex justify-content-around align-items-end h-100 w-100 pl-3">

                                        {this.props.graph.map((element, index) => {

                                            let purple_div = {
                                                height: element.purple
                                            };

                                            let orange_div = {
                                                height: element.orange
                                            };

                                            return (
                                                <div
                                                    className="h-100 super d-flex justify-content-between align-items-end"
                                                    key={index}>
                                                    <div className="small " style={orange_div}></div>
                                                    <div className="graph-iteam" style={purple_div}></div>
                                                </div>
                                            )
                                        })}

                                    </div>


                                    <div className="left-graph d-inline mr-3">
                                        <ul className="h-100">
                                            <li className="">006</li>
                                            <li className="">005</li>
                                            <li className="">004</li>
                                            <li className="">003</li>
                                            <li className="">002</li>
                                            <li className="">001</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="under-graph posiation-absliute">
                                    <ul className="d-flex justify-content-around">
                                        <li>001</li>
                                        <li>002</li>
                                        <li>003</li>
                                        <li>004</li>
                                        <li>005</li>
                                        <li>006</li>
                                        <li>007</li>
                                        <li>008</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Graph;