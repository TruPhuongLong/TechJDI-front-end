import React, { Component } from "react";
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";


import styles from './App.module.css'
import Routes from "./router";
import Header from "./view/header";
import Footer from "./view/footer";
import Loading from './view/loading.js';



class App extends Component {

  render() {
    const {isLoading} = this.props
    return (
      <div>
        <Header />
        <div className={`${styles.body} `}>
          <Routes />
          {
            isLoading ? <Loading /> : null
          }
         </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {isLoading} = state.topicState;
  return {isLoading};
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))