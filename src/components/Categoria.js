import React, { Component } from 'react';

import Lista from './Lista'


class Categoria extends Component {
    render(){
        return <Lista id={this.props.id}/>
    }
 
}

export default Categoria;