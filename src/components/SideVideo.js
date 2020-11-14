import React from 'react';

import { Grid,Paper,Typography } from '@material-ui/core';

const SideVideo = (props)=>{
    let item=props.item;
    let selNewVid= props.onClick;
    return (
        <Grid item xs={12}>
            <Paper style={{display:'flex',alignItems:'center', cursor:'pointer'}} onClick={()=> selNewVid(item)}>
                <img style={{marginRight:'20px',width:'50%', height:'100%'}} alt='thumbnail' src={item.snippet.thumbnails.medium.url} />
                <Typography variant='subtitle2'>
                    <b>{item.snippet.title}</b>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SideVideo;