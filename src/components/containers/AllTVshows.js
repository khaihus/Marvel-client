import React, { Component } from 'react';
import axios from "../../axios";
import EachTVshow from '../content/EachTVshow';
import { Link } from "react-router-dom";  

class AllTVshows extends Component {
    state = {
        tvContent:[{}]
	}

    componentDidMount(){
        axios
            .get(`/api/tv`)
            .then(data => {
                this.setState({ 
                    tvContent: data.data
                });
            })
            .catch(err => console.error(err));
    }
    render() {
        const allTVshow = this.state.tvContent.map(content=>(
            <div key={content._id} className="col-4"> 
                <Link to = {`/tvshows/${content.id}`} className="elementlink">
                    <EachTVshow detail={content}  />
                </Link>
            </div>
        ));
        return (
            <div>
                <div style={{position: "absolute", top: "15%", left: "0", width:"100%",  zIndex: "2"}} >
                    <h1 style={{fontSize:"8rem",color: "white",textAlign:"center"}}>TV SERIES</h1>
                </div>
                <img style={{width:"100%",zIndex:"10",marginTop:"-40px"}} src="https://terrigen-cdn-dev.marvel.com/content/prod//2x/thegifteds2-com_mas_dsk_01.jpg" alt="Cú lừa"/>
                
                <div className="container" style={{position:"relative",marginTop: "-80px",backgroundColor:"#3c4043"}}>
                    <div className="card-group mt-3 mb-3">
                        {allTVshow}
                    </div>
                </div>
            </div>
        );
    }
}

export default AllTVshows;