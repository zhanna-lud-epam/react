// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//     <App />,
//      document.getElementById('root')
// );
import { createStore } from 'redux';

function playList(state = [], action){
    if (action.type === 'ADD_TRACK'){
        return[
            ...state,
            action.payload
        ];

    }
    return state;

}

const store = createStore(playList);
const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];

store.subscribe(() => {
    console.log('subscribe', store.getState());
    const list = document.querySelectorAll('.list')[0];
    list.innerHTML = '';
    trackInput.value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });

})


addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    store.dispatch({type: 'ADD_TRACK', payload: trackName});
})

