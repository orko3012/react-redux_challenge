import React from 'react'
import { connect } from 'react-redux'

const CounterComponent = ({counter, dispatch}) =>
    <div>
        <p>{counter}</p>
        <button onClick = {()=>dispatch({type: 'ADD'})}>+1</button>
        <button onClick = {()=>dispatch({type: 'REMOVE'})}>-1</button>
        <button onClick = {()=>dispatch({type: 'ADD10'})}>+10</button>
        <button onClick = {()=>dispatch({type: 'REMOVE10'})}>-10</button>
        <button onClick = {()=>dispatch({type: 'RESET'})}>reset</button>
    </div>
    


const mapStateToProps = state => ({
    counter: state
})

export default connect(mapStateToProps)(CounterComponent)