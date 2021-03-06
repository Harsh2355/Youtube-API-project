import React from 'react';

import { Grid } from '@material-ui/core';

import SideVideo from './SideVideo';

const VideoList = (props)=>{
    let videolist=props.videolist;
    const sideVideoList = videolist.map((video,id)=> <SideVideo key={id} item={video} onClick={props.onClick}/> );
    return(
        <Grid container spacing={0}>
            {sideVideoList}
        </Grid>
    )
}


export default VideoList;