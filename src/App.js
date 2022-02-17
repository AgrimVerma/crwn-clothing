import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
//import { Navigate } from 'react-router';

import Header from './components/header/header.component';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout-page/checkout.component';

import SigninAndSignupPage from './pages/signin-signupPage/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
        });
      }
      else{
        setCurrentUser( userAuth );
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/shop/*" element={<ShopPage/>} />
          <Route path="/signin" element={<SigninAndSignupPage />} /*render={() => this.props.currentUser ? (<Navigate  to='/' replace />) : (<SigninAndSignupPage />) }*/  />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
