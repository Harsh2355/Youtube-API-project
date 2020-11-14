import React from 'react';
import logo from './logo.svg';
import './App.css';
import youtube from './api/youtube';
import {Grid} from '@material-ui/core';

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
                  key: 'AIzaSyCcioIKipJX6jO4r63Hb04p31upmQ_ybzM',
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
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <SearchBar onSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={7}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={5}>
                            <VideoList videolist={Videos} onClick={this.handleClick}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;
