import React, { Component } from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
/* import '../App.css'; */
import ProfileBookShelf from './ProfileBookShelf';
import Nav from "./Header";

class Profile extends Component {

    render() {
        return (
            <div className='container' style={{ marginTop: '10%' }}>

                <Nav />

                <div id="1A" className="row" style={{ backgroundColor: '#F6F6F6', marginBottom: '50px'  }}>

                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col1A" className="col-sm-4 col-md-4 col-lg-4 " style={{ marginTop: '50px' , marginBottom: '50px', }} >
                        <img id="" className="img-responsive img-circle" src={require("../img/patProfile.png")} alt="profilepic" />
                    </div>
                    <div id="col2A" className="col-sm-1 col-md-1 col-lg-1"></div>
                    <div id="col2A" className="col-sm-6 col-md-6 col-lg-6">
                    
                        <div id="1B" className="row" style={{ backgroundColor: '#F6F6F6', marginBottom: '10px' }}>
                            <div id="col1B" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <br/>
                                <h2>pat_hustad <Button style={{ backgroundColor: 'black' }} className="btn-primary btn btn-xs">Edit Profile </Button><Glyphicon glyph="glyphicon glyphicon-cog" style={{ color: 'black', margin: '2%' }} /></h2>
                            </div>
                        </div>

                        <div id="2B" className="row" style={{ backgroundColor: '#F6F6F6(157, 156, 228)', marginBottom: '10px' }}>
                            <div id="col1C" className="col-sm-4 col-md-4 col-lg-4"><a href="" style={{ color: 'black' }} ><h4>521 Stories </h4></a>    <a href="" style={{ color: 'black' }} ><h4>12.4k Followers</h4></a>    <a href="" style={{ color: 'black' }} ><h4>2,759 Following</h4></a></div>
                            <div id="col2C" className="col-sm-2 col-md-2 col-lg-2"></div>
                            <div id="col3C" className="col-sm-2 col-md-2 col-lg-2"></div>
                        </div>

                        <div id="3B" className="row" style={{ backgroundColor: '#F6F6F6(146, 231, 146)', marginBottom: '10px' }}>
                            <div id="col1D" className="col-sm-12 col-md-12 col-lg-12"><span role="img"><h4>🌴🌴Software + Design + Surfing🌴🌴</h4></span>
                            </div>
                        </div>
                        <div id="4B" className="row" style={{ backgroundColor: '#F6F6F6(146, 231, 146)', marginBottom: '12px' }}>
                            <div id="col1E" className="col-sm-12 col-md-12 col-lg-12"><a href="" style={{ color: 'black' }} ><h4>www.pathustad.com</h4></a>
                            <br/>
                            </div>
                        </div>
                        <a href="/create"><button type="submit" style={{ backgroundColor: 'black' }} className="btn-primary btn"> Create New Story <Glyphicon glyph="glyphicon glyphicon-plus"/></button></a>
                    </div>

                </div>

                <div className="row" style={{ backgroundColor: '#F6F6F6' }}>
                    <div id="col3A" className="col-sm-5 col-md-5 col-lg-5"></div>
                    <div id="col3A" className="col-sm-1 col-md-1 col-lg-1"><span style={{ color: 'black', marginBottom: '5%' }} ><strong></strong></span></div>
                    <div id="col4A" className="col-sm-1 col-md-1 col-lg-1"><span style={{ color: 'black', marginBottom: '5%' }} ><strong></strong></span></div>
                    <div id="col3A" className="col-sm-5 col-md-5 col-lg-5"></div>
                </div>

                <div className="row">
                    <ProfileBookShelf />
                </div>
            </div>
        );
    }
}

export default Profile;
