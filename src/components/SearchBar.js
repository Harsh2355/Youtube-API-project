import React from 'react';

import {Paper,TextField} from '@material-ui/core';

class SearchBar extends React.Component{
    state={
        searchTerm:"",
    }

    handleChange= (e)=>{
        this.setState({
            searchTerm: e.target.value,
        })
    }

    handleSubmit= (e)=>{
        const searchItem = this.state.searchTerm;
        
        e.preventDefault();

        this.props.onSubmit(searchItem);
    }

    render(){
        return(
            <Paper elevation={0} style={{ padding:'25px' }} >
                <form onSubmit={ this.handleSubmit }>
                    <TextField fullWidth label='Search...' onChange={ this.handleChange }>

                    </TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;