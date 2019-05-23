import React from 'react'
import {connect} from 'react-redux'
import {getTopicsAction} from '../redux/actions/topic-action'

import CardTopic from './card-topic'

class ListTopic extends React.Component{

    componentDidMount(){
        this.props.getTopics();
    }

    render(){
        const {list} = this.props;
        return (
            <div>
                {
                    list.map((topic, index) => {
                        return <CardTopic topic={topic} key={index}/>
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const {list} = state.topicState;
    return {list};
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: () => {
            return dispatch(getTopicsAction())
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListTopic)