import React, { Component } from 'react';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2';
import SlideShow from './components/content/SlideShow';
// import SlideShowTest from './components/SlideShow(False)';
import HomeContent from './components/content/HomeContent';
// import MovieContent from './components/content/MovieContent';
import AllMovies from "./components/containers/AllMovies";
import AllTVshows from "./components/containers/AllTVshows";
import DetailMovie from "./components/content/DetailMovie";
import DetailTVshow from "./components/content/DetailTVshow";
import login from "./components/form/Login";

import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
// import axios from "./axios";
import ScrollToTop from 'react-router-scroll-top'

//css, bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/button.css';
import './css/style.css';
import './css/slideshow.css';
//Import and Create Libs for fontAwesome (a icon library)

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
library.add(fab );


//==============================
//        Patch 1.4 Caution!
// Chưa có check if gọi database bị false
// Bố cục card chưa chặt chẽ (grid)
//==============================

class App extends Component {

  componentDidCatch(){
    // document.body.scrollTop = 0;
    
    //lấy dữ liệu từ server
  }

  render() {

    return (
      // <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <header className="App-header sticky-top">
              <NavBar/>
              <NavBar2/>
            </header>
            <Route exact path="/Login" component={login}></Route>
            <div className="middleP">
              <div className="slideshow">
                <Route exact path="/" component={SlideShow} />
              </div>
              <div className="homecontent">
                <Route exact path="/" component={HomeContent} />
              </div>
                {/* <Route exact path="/movies" component={MovieContent} /> */}
                <Route exact path="/movies" component={AllMovies} />
                <Route exact path="/tvshows" component={AllTVshows} />
                {/* <Route exact path={`/movies/1`} component={DetailMovie}/> */}
                <Route path="/movies/:moviesId" render={(props)=>{
                    return <DetailMovie {...props}  />
                  }} />
                <Route path="/tvshows/:tvshowId" render={(props)=>{
                    return <DetailTVshow {...props}  />
                  }} />
            </div>
            <Footer/>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
