import { createContext, useReducer } from 'react';

import { actions } from './actions';
import { globalState } from './data';
import { reducer } from './reducer';

export const Context = createContext();

export const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, globalState);

    const changeArtists = (payload) => {
        dispatch({ type: actions.CHANGE_ARTISTS, payload });
    }

    const changeMusicLength = (payload) => {
        dispatch({ type: actions.CHANGE_MUSIC_LENGTH, payload });
    }

    const changeMusicName = (payload) => {
        dispatch({ type: actions.CHANGE_MUSIC_NAME, payload });
    }

    const changeMusicRange = (payload) => {
        dispatch({ type: actions.CHANGE_MUSIC_RANGE, payload });
    }

    const changeVolume = (payload) => {
        dispatch({ type: actions.CHANGE_VOLUME, payload });
    }

    return(
        <Context.Provider value={{
            state,
            changeArtists,
            changeMusicLength,
            changeMusicName,
            changeMusicRange,
            changeVolume
        }}>
            { children }
        </Context.Provider>
    );
}