import React from 'react';
import logo from './logo.svg';
import './App.css';
import youtube from './api/youtube';
import {Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideocamIcon from '@material-ui/icons/Videocam';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';


class App extends React.Component{
    state={
      Videos:[],
      selectedVideo:null,
    }

    handleSubmit = async (searchTerm) => {
        const response= await youtube.get('search',{
        params:{
                  part:'snippet',
                  maxResults:5,
                  key: 'AIzaSyAH-FAD2Qv0X22Dp0VjkIrZUlglbDedGis',
                  q: searchTerm,
            }
        }
    );
    console.log(response);
    this.setState({
      Videos:response.data.items,
      selectedVideo:response.data.items[0],
    });
  }

  handleClick= (video)=>{
      this.setState({
          selectedVideo:video,
      });
  }

    render(){
       const {selectedVideo,Videos}=this.state;
        return(
            <div className="app-container">
            <Grid justify="center" container>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid container className="header-container" >
                        <Grid item xs={2} >
                            <div className = 'youtube-img'>
                                <MenuIcon style={{marginLeft:"10px"}}/> 
                                <div className = 'youtube-icon'><YouTubeIcon style={{color: "red"}} /></div>
                                <div className="youtube-title">
                                    YouTube
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={8}>
                            <SearchBar onSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid xs={2} >
                            <VideocamIcon className='header-icon'/>
                            <AppsIcon className='header-icon' />
                            <NotificationsIcon className='header-icon' />
                        </Grid>
                        </Grid>
                        <Grid container className="video-container">
                        <Grid item xs={7} className="displayed-video">
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={3.5} className="side-videos">
                            <VideoList videolist={Videos} onClick={this.handleClick}/>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default App;
