import React from 'react';

import {Paper,Typography} from '@material-ui/core';

class VideoDetails extends React.Component{
   
    render(){
        const video= this.props.video;
        if(video==null){ return (<div></div>)}
        let url=`https://www.youtube.com/embed/${video.id.videoId}`;
        console.log(video);
        return (
            <div id="videodetails" style={{ marginLeft:'7%', height:"80%"}}>
                <Paper elevation={0}  style={{height:'70%'}}>
                    <iframe height='100%' width='100%' frameBorder='0' title='Video Player' src={url} allowFullScreen/>
                </Paper>
                <Paper elevation={6} style={{padding:'15px'}}>
                    <Typography variant="h5">{video.snippet.title}-{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </div>    
        )
    }
}



export default VideoDetails;