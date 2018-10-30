import React, { Component } from 'react';

class MovieContent extends Component {

    render() {
        return (
            <div className="card mt-3 mb-3">
                <img className="card-img-top" src={this.props.detail.posterUrl} alt={this.props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.detail.name}</h5>
                    <p className="card-text"><small className="text-muted">{this.props.detail.release_date}</small></p>
                </div>
            </div> 
        );
    }
}

export default MovieContent;