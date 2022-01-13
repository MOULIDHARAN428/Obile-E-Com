import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import About from './AboutComponent'
import Store from './StoreComponent'
import Footer from './FooterComponent';
import Men from './MenComponent';
import Women from './WomenComponent';
import Kids from './KidsComponent';
import Signup from './signupComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    render(){
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={ Home } />
                        <Route path="/contact" component={ Contact } />
                        <Route path="/about" component={ About } />
                        <Route path="/signup" component={ Signup }/>
                        <Route exact path="/store" component={ Store } /> 
                        <Route path="/store/kids" component={ Kids } />
                        <Route path="/store/women" component={ Women } />
                        <Route path="/store/men" component={ Men } />
                        
                        <Redirect to="/home" />

                    </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;
