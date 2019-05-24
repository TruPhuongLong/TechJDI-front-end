import React from 'react'
import { connect } from 'react-redux'
import { getTopicsAction } from '../redux/actions/topic-action'
import { query } from '../lib/funcHelp'
import CardTopic from './card-topic'

class ListTopic extends React.Component {

    componentDidMount() {
        const sortVote = this.props.sort;
        const queryStr = query(sortVote, 0)
        this.props.getTopics(queryStr);
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((topic, index) => {
                        return <CardTopic topic={topic} key={index} />
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { list, sort } = state.topicState;
    return { list, sort };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: (query) => {
            return dispatch(getTopicsAction(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTopic)