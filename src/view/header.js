import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTopicsAction, sortAction } from '../redux/actions/topic-action'
import { Sort } from '../lib/contance'
import { query } from '../lib/funcHelp'

class Header extends React.Component {

    _sort = (s) => {
        const queryStr = query(s, 0)
        this.props.sortFunc(s)
        this.props.getTopics(queryStr)
        
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/get" >List Topic</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/post" >Create Topic</Link>
                    </li>
                </ul>
                <div className="dropdown">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                        Sort
                </button>
                    <div className="dropdown-menu">
                        <button
                            className="btn"
                            onClick={() => this._sort(Sort.descending)}
                        >{Sort.descending}</button>
                        <button
                            className="btn"
                            onClick={() => this._sort(Sort.ascending)}
                        >{Sort.ascending}</button>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    const { sort } = state.topicState;
    return { sort };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: (query) => {
            return dispatch(getTopicsAction(query))
        },
        sortFunc: (s) => {
            return dispatch(sortAction(s))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)