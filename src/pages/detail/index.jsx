import React, { Component } from 'react';
class Detail extends Component {
    render() {
        const {match} = this.props; 
        return (
           <div>
               <h1>detail</h1>
               <p>This is {match.params.id}</p>
           </div>
        );
    }
}
 
export default Detail;