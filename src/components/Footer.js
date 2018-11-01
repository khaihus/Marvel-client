import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="myFooter" className="sticky-bot">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                                {/* <a target="_blank" without rel="noopener noreferrer" href="#top"> */}
                                    <img src={require("../img/mcu-logo-render.jpg")} alt=""/>
                                {/* </a> */}
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
                                    <a target="_blank" without rel="noopener noreferrer" href="#top">Github</a>
                                </li>
                                <li>
                                    <a target="_blank" without rel="noopener noreferrer" href="https://www.themoviedb.org/">TheMoviedb</a>
                                </li>
                                <li>
                                    <a target="_blank" without rel="noopener noreferrer" href="https://www.facebook.com/Techkids.Code.the.Change">Facebook</a>
                                </li>

                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                                <h5>About Us</h5>
                                <ul>
                                    <li>
                                        <a target="_blank" without rel="noopener noreferrer" href="#top">3 từ thôi: Team pro vl</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                                <div className="social-networks">
                                    <a target="_blank" without rel="noopener noreferrer" href="https://www.facebook.com/Techkids.Code.the.Change" className="twitter">
                                        <i className="">
                                            <img src={require("../img/icons8-facebook-48.png")} alt="" width="30px" height="30px"/>
                                        </i>
                                    </a>
                                    <a target="_blank" without rel="noopener noreferrer" href="https://www.youtube.com/results?search_query=c%C3%BA+l%E1%BB%ABa" className="youtube">
                                        <i className="">
                                            <img src={require("../img/youtube.png")} alt="" width="30px" height="30px"/>
                                        </i>
                                    </a>
                                </div>
                                <a href="#top">
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