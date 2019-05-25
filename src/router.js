import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ListTopic from './view/list-topic';
import FormPost from './view/form-post'

class Routes extends React.Component {
  render(){
    return (
      <Switch>
        <Route path="/" exact component={ListTopic} />
        <Route path="/post" exact component={FormPost} />
    </Switch>
    )
  }
}


export default withRouter(connect()(Routes));