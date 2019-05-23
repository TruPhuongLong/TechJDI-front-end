import React from 'react'
import { connect } from 'react-redux'

import { voteAction } from '../redux/actions/topic-action'


class Card extends React.Component {

    _vote = (v) => {
        var model = {...this.props.topic}
        model.vote += v;
        this.props.voteFunc(model);
    }
    render() {
        const { title, body, id, vote } = this.props.topic;
        return (
            <div style={{ margin: '50px 0' }}>
                <h1>{id} : {title}</h1>
                <p>{body}</p>
                <h3>{vote}</h3>
                <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => this._vote(+1)}
                >UpVote</button>
                <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => this._vote(-1)}
                >DownVote</button>
            </div>
        )
    }
}




const mapDispatchToProps = (dispatch) => {
    return {
        voteFunc: (model) => {
            return dispatch(voteAction(model))
        }
    }
}

export default connect(null, mapDispatchToProps)(Card)