import React, { Component } from 'react';
import axios from "../../axios";
import EachMovie from '../content/EachMovie';
// import DetailMovie from "../content/DetailMovie";
import { Link } from "react-router-dom";  

class AllMovies extends Component {
    state = {
        movieContents:[{}]
	}
      
    componentDidMount(){
        axios
            .get(`/api/movies/`)
            .then(data => {
                this.setState({ 
                    movieContents: data.data
                });
            })
            .catch(err => console.error(err));
    }

    render() {
        const allMovie = this.state.movieContents.map(content => (
            <div key={content._id} className="col-4"> 
                <Link to = {`/movies/${content.moviesId}`} className="elementlink">
                    <EachMovie detail={content}  />
                </Link>
            </div>
        ));
        
        return (
            <div>
                <div style={{position: "absolute", top: "15%", left: "0", width:"100%",  zIndex: "2"}} >
                    <h1 style={{fontSize:"8rem",color: "white",textAlign:"center"}}>MOVIES</h1>
                </div>
                <img style={{width:"100%",zIndex:"10",marginTop:"-40px"}} src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/daredevils3-com_mas_dsk_01.jpg" alt="Cú lừa"/>
                
                <div className="container " style={{position:"relative",marginTop: "-80px",backgroundColor:"#3c4043"}}>
                    <div className="card-group mt-3 mb-3">
                        {allMovie}
                    </div>
                </div>
            </div>  
        );
    }
}

export default AllMovies;