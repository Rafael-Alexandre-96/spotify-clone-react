import { actions } from './actions';

export const reducer = (state, action) => {

    const updateMusicAtual = (range, musicLength) => {
        let mins = musicLength.split(":")[0];
        let secs = musicLength.split(":")[1];
        secs *= 60;
        let totalTime = secs + mins;
        let atualTime = totalTime * range / 100;
        let atualMin = atualTime / 60;
        console.log(atualTime);
    }

    switch(action.type) {
        case actions.CHANGE_ARTISTS: {
            return { ...state, artists: action.payload };
        }
        case actions.CHANGE_MUSIC_LENGTH: {
            return { ...state, musicLength: action.payload };
        }
        case actions.CHANGE_MUSIC_NAME: {
            return { ...state, musicName: action.payload };
        }
        case actions.CHANGE_MUSIC_RANGE: {
            let { musicAtual } = state;
            musicAtual = updateMusicAtual(state.musicRange, state.musicLength);
            return { ...state, musicRange: action.payload, musicAtual: musicAtual };
        }
        case actions.CHANGE_VOLUME: {
            return { ...state, volume: action.payload };
        }
        default: {
            return { ...state };
        }
    }
}