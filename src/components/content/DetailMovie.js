import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import axios from "../../axios";
class DetailMovie extends Component {

    state = {
        movieDetail:[{}],
        showHeight: "50vh",
        colhalfWidth: "100%",
        btnLoveMT : "3vh",
        h1Font: "4rem"
	}
      
    componentDidMount(){
        axios
            .get(`/api/movies/${this.props.match.params.moviesId}`)
            .then(data => {
                this.setState({ 
                    movieDetail: data.data[0]
                });
            })
            .catch(err => console.error(err));
        window.addEventListener('resize', this.handleResize);
        // console.log(window.innerHeight, window.innerWidth);
        console.log("url : "+window.location.href);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = (event) => {
        // console.log(window.innerHeight, window.innerWidth);
        if(window.innerWidth>900){
            this.setState({
                showHeight:"50vh",
                colhalfWidth:"100%",
                btnLoveMT:"3vh"
            })
        }
        else if(window.innerWidth<500){
            this.setState({
                showHeight:"100%",
                colhalfWidth:"50%",
                btnLoveMT:"0",
                h1Font : "2rem"

            })
        }else{
            this.setState({
                btnLoveMT:"0",
                colhalfWidth:"50%",
                h1Font:"3rem",
                showHeight:"100%"
            })
        }
    }

    render() {
        console.log("url2 : "+config.rootPath+"/movies/"+`${this.props.match.params.moviesId}`);
        return (
            <div>
                <div className="show" style={{height: this.state.showHeight}}>
                    <div className="filmDetail ">
                    <img src={this.state.movieDetail.backdrop_path} alt=""></img>
                    </div>
                    <div className="favor" >
                        <h1 style={{fontSize:this.state.h1Font}}>{this.state.movieDetail.name}</h1>
                        <h2>{this.state.movieDetail.release_date}</h2>
                        <br />
                        <div className="row">
                            <div className="col-half" style={{width: this.state.colhalfWidth}}>
                                {/* <button className="btn btn-facebook">
                                    <FontAwesomeIcon icon={['fab', 'facebook']}/> Share</button> */}
                                    <div className="fb-share-button" data-href={config.rootPath+"/movies/"+`${this.props.match.params.moviesId}`} data-layout="button" data-size="large" data-mobile-iframe="true">
                                    {/* <div className="fb-share-button" data-href="https://eslint.org/docs/rules/no-useless-concat" data-layout="button" data-size="large" data-mobile-iframe="true"> */}
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Fmovies%2F335983&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a>
                                    </div>
                            </div>    
                            <div className="col-half" style={{width: this.state.colhalfWidth}}>
                                <button className="btn btn-love"  style={{marginTop: this.state.btnLoveMT}}>
                                    <FontAwesomeIcon icon={faHeart}/> Favorite</button>
                            </div>    
                        </div>
                    </div>
                </div>
                <div className="container mt-3 trailer">
                    <h2><span></span><span className="hightlight">Trailer</span></h2>
                    <div className="card-img-top embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" title={this.state.movieDetail.name} src={`https://www.youtube.com/embed/${this.state.movieDetail.imdb_id}?autoplay=1&mute=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="container mt-5 mb-5 image-inner">
                    <div className="row justify-content-start">
                        <div className="col-sm-12 col-lg-4">
                            <img className="poster" src={this.state.movieDetail.posterUrl}
                                // srcset="https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg 2x"
                                alt={this.state.movieDetail.name}/>
                        </div>
                        <div className="col-sm-12 col-lg-8 content">
                            <h1><span className="hightlight">{this.state.movieDetail.name}</span></h1>
                            <h2>Over view</h2>
                            <span>{this.state.movieDetail.overview}</span>
                            <br/>
                            <h2 className="mt-3">Information</h2>
                            <div>
                                <ul className="infor">
                                    <li className="inforRow">
                                        <div className="inforLabel">Director By:</div>
                                        <div className="inforValue">Anthony Russo, Joe Russo</div>
                                    </li>
                                    <li className="inforRow">
                                        <div className="inforLabel">Written By:</div>
                                        <div className="inforValue">Christopher Markus, Stephen McFeely</div>
                                    </li>
                                    <li className="inforRow">
                                        <div className="inforLabel">Rating:</div>
                                        <div className="inforValue">PG-13</div>
                                    </li>
                                    <li className="inforRow">
                                        <div className="inforLabel">Runtime:</div>
                                        <div className="inforValue">120 minutes</div>
                                    </li>
                                    <li className="inforRow">
                                        <div className="inforLabel">RELEASE DATE:</div>
                                        <div className="inforValue">{this.state.movieDetail.release_date}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>    
        );
    }
}

export default DetailMovie;