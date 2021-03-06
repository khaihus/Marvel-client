import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                            <div className="col-12 col-sm-12 col-md-4 col-lg-3 ">
                                <h5>Core Team</h5>
                                <ul className="text-left nameTeam ">
                                    <li>
                                        CSS, Res: <a target="_blank" className="text-right" without rel="noopener noreferrer" href="https://www.facebook.com/beovuive1">  Nguyễn Quang Trường</a>
                                    </li>
                                    <li>
                                        News Handler: <a target="_blank" without rel="noopener noreferrer" href="https://www.facebook.com/t0ank55">  Bùi Anh Tú</a>
                                    </li>
                                    <li>
                                        React, Design: <a target="_blank" without rel="noopener noreferrer" href="https://www.facebook.com/huskhai3k">  Vũ Đức Khải</a>
                                    </li>
                                    <li>
                                        Backend God: <a target="_blank" without rel="noopener noreferrer" href="https://www.facebook.com/nguyengoc.hie">  Nguyễn Ngọc Hiếu</a>
                                    </li>
                                    <li>
                                        Supporter:  
                                        <a target="_blank" without rel="noopener noreferrer" href="https://www.facebook.com/huynhtuan.huy.5">  Huỳnh Tuấn Huy</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-12 col-sm-12  col-md-4 col-lg-2">
                                <h5>Source</h5>
                                <ul>
                                <li>
                                    <a target="_blank" without rel="noopener noreferrer" href="#top">Github</a>
                                </li>
                                <li>
                                    <a target="_blank" without rel="noopener noreferrer" href="https://www.themoviedb.org/">TheMoviedb</a>
                                </li>
                                <li>
                                    <a target="_blank" without rel="noopener noreferrer" href="https://developers.facebook.com/">Facebook</a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                                <h5>About Us</h5>
                                <ul>
                                    <li>
                                        {/* <a target="_blank" without rel="noopener noreferrer" href={`/about`}>Marvel's fan Team</a> */}
                                        <Link to={"/about"}>Marvel's fan Team</Link>
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
                                    <button type="button" className="btn btn-default">
                                    <a target="_blank" without rel="noopener noreferrer" href="https://www.facebook.com/messages/t/huskhai3k">Contact to Dev</a>
                                    </button>
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