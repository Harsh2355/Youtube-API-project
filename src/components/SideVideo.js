import React from 'react';
import '../App.css';

import { Grid,Paper,Typography } from '@material-ui/core';

const SideVideo = (props)=>{
    let item=props.item;
    let selNewVid= props.onClick;
    return (
        <Grid item xs={12} className="side-vid-box">
            <Paper style={{display:'flex',alignItems:'center', cursor:'pointer'}} onClick={()=> selNewVid(item)}>
                <img style={{marginRight:'20px',width:'50%', height:'100%'}} alt='thumbnail' src={item.snippet.thumbnails.medium.url} />
                <Typography variant='subtitle2' style={{fontSize:"12px",}}>
                    <b>{item.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SideVideo;