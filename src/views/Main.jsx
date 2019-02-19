import React from 'react'
import { connect } from 'react-redux'

import DummyComponent from '../components/DummyComponent'

import { updateDummyText } from '../redux/actions/dummy'

const Main = ({ dummyReducer, dispatch }) => {
    const updateText = () =>
        dispatch(updateDummyText(new Date().getTime()))

    return (
        <div>
            <h1>Main</h1>
            <button onClick={updateText}>Change</button>
            <DummyComponent text={dummyReducer.dummyText}/>
        </div>
    )
}

export default connect(({ dummyReducer, dispatch }) => ({ dummyReducer, dispatch }))(Main)
