import React from 'react';

import {Paper,Typography} from '@material-ui/core';

class VideoDetails extends React.Component{
   
    render(){
        const video= this.props.video;
        console.log(video);
        if(video==null){ return (<div></div>)}
        let url=`https://www.youtube.com/embed/${video.id.videoId}`;
        console.log(video);
        return (
            <div id="videodetails" style={{ marginLeft:'7%', height:"550px"}}>
                <Paper elevation={0}  style={{height:'70%'}}>
                    <iframe height='380px' width='100%' frameBorder='0' title='Video Player' src={url} allowFullScreen/>
                </Paper>
                <Paper elevation={6} style={{padding:'15px'}}>
                    <Typography variant="h6" style={{marginBottom:"15px"}} >
                        {video.snippet.title}
                    </Typography>
                    <hr />
                    <Typography variant="h6" style={{marginBottom:"15px", fontSize:"16px", fontWeight:"bold", display:"inline", marginRight:"460px"}} >
                        {video.snippet.channelTitle}
                    </Typography>
                    <button style={{ padding:"5px",fontSize: "16px", backgroundColor:"red",color:"white"}}>
                        Subscribe
                    </button>
                    <Typography variant="subtitle2" style={{marginTop:"20px"}}>{video.snippet.description}</Typography>
                </Paper>
            </div>    
        )
    }
}



export default VideoDetails;