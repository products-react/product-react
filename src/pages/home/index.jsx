import React, { Component } from 'react';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                <div className="col-md-3">
                        <div style={{width:'100%', hieght:'5em'}}>
                            <a href={window.location.origin+"/1"}>
                                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg" alt="" style={{width:'100%', hieght:'100%'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{width:'100%', hieght:'5em'}}>
                            <a href={window.location.origin+"/2"}>
                                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg" alt="" style={{width:'100%', hieght:'100%'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{width:'100%', hieght:'5em'}}>
                            <a href={window.location.origin+"/3"}>
                                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg" alt="" style={{width:'100%', hieght:'100%'}}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{width:'100%', hieght:'5em'}}>
                            <a href={window.location.origin+"/4"}>
                                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg" alt="" style={{width:'100%', hieght:'100%'}}/>
                            </a>
                        </div>
                    </div>
                </div> 
                
            </div>
         );
    }
}
 
export default Home;