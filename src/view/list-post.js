import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import {getTopicsAction} from '../redux/actions/topic-action'

import CardPost from './card-post'

class ListTopic extends React.Component{

    componentDidMount(){
        this.props.getTopics();
    }

    render(){
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((post, index) => {
                        return <CardPost post={post} key={index}/>
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const {isLoading, list} = state.topicState;
    return {isLoading, list};
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: () => {
            return dispatch(getTopicsAction())
        }
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListTopic))