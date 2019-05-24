import React from 'react'
import {connect} from 'react-redux'

import {createTopicAction} from '../redux/actions/topic-action'

class FormPost extends React.Component {

    state = {
        title: "",
        content: "",
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {title, content} = this.state;
        this.props.createTopic({title, content})
    }

    _onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        const {title, content} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="title" 
                        placeholder="Enter title" 
                        name="title" 
                        value={title}
                        onChange={this._onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">content:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="content" 
                        placeholder="Enter content" 
                        name="content" 
                        value={content}
                        onChange={this._onChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTopic: (model) => {
            console.log(model)
            return dispatch(createTopicAction(model))
        }
    }
}

export default connect(null, mapDispatchToProps)(FormPost)