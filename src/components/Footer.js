import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="myFooter" className="sticky-bot">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                                <a href="#top">
                                    <img src={require("../img/A.jpg")} alt=""/>
                                </a>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                                <h5>Marvel fan film</h5>
                                <ul>
                                    <li>
                                        Nguyễn Quang Trường
                                    </li>
                                    <li>
                                        Bùi Anh Tú
                                    </li>
                                    <li>
                                        Vũ Đức Khải
                                    </li>
                                    <li>
                                        Nguyễn Ngọc Hiếu
                                    </li>
                                    <li>
                                        Supporter: Huỳnh Tuấn Huy
                                    </li>

                                </ul>
                            </div>
                            <div className="col-12 col-sm-12  col-md-4 col-lg-2">
                                <h5>Source</h5>
                                <li>
                                    <a href="#top">Github</a>
                                </li>
                                <li>
                                    <a href="#top">Movie.org</a>
                                </li>
                                <li>
                                    <a href="#top">Facebook </a>
                                </li>

                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                                <h5>About Us</h5>
                                <ul>
                                    <li>
                                        <a href="#top">3 từ thôi: Team pro vl</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                                <div className="social-networks">
                                    <a href="#top" className="twitter">
                                        <i className="">
                                            <img src={require("../img/icons8-facebook-48.png")} alt="" width="30px" height="30px"/>
                                        </i>
                                    </a>
                                    <a href="#top" className="facebook">
                                        <i className="">
                                            <img src={require("../img/icons8-twitter-64.png")} alt="" width="30px" height="30px"/>
                                        </i>
                                    </a>
                                    <a href="#top" className="youtube">
                                        <i className="">
                                            <img src={require("../img/youtube.png")} alt="" width="30px" height="30px"/>
                                        </i>
                                    </a>
                                </div>
                                <a href="feedback.html">
                                    <button type="button" className="btn btn-default">Feedback</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2018 Bản quyền thuộc về Team Marvel fan phim </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;