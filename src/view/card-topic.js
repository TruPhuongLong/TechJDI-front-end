import React from 'react'
import { connect } from 'react-redux'

import { voteAction } from '../redux/actions/topic-action'
import {getTopicsAction} from '../redux/actions/topic-action'
import {query} from '../lib/funcHelp'

class Card extends React.Component {

    _vote = (v) => {
        var model = {...this.props.topic}
        model.vote += v;
        this.props.voteFunc(model);

        // refrest page:
        const queryStr = query(this.props.sort, 0)
        this.props.getTopics(queryStr)
    }
    render() {
        const { title, content, vote } = this.props.topic;
        return (
            <div style={{ margin: '50px 0' }}>
                <h1>{title}</h1>
                <p>{content}</p>
                <h3>{vote}</h3>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this._vote(+1)}
                >UpVote</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this._vote(-1)}
                >DownVote</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { sort } = state.topicState;
    return { sort };
}

const mapDispatchToProps = (dispatch) => {
    return {
        voteFunc: (model) => {
            return dispatch(voteAction(model))
        },
        getTopics: (query) => {
            return dispatch(getTopicsAction(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)