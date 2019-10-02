import React, { Component } from 'react';
import Header from '../components/headers';
import Content from '../components/contents';
import Footer from '../components/footers'
class MasterLayout extends Component {
    render() { 
        return ( <div>
            <Header/>
            <Content/>
            <Footer/>

        </div> );
    }
}
 
export default MasterLayout;