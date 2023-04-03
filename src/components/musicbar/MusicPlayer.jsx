import { useContext } from 'react';
import { Context } from '../../contexts/AppContext';

import { BsShuffle, BsRepeat } from 'react-icons/bs';
import { CgPlayTrackPrev, CgPlayTrackNext } from 'react-icons/cg';
import { AiFillPlayCircle } from 'react-icons/ai';

import './style.css';
import { MusicRangeInput } from '../common/MusicRangeInput';

export default function MusicPlayer() {
    const context = useContext(Context);

    return(
        <div className="music-player">
            <div className="player-track">
                <BsShuffle />
                <CgPlayTrackPrev />
                <AiFillPlayCircle />
                <CgPlayTrackNext />
                <BsRepeat />
            </div>
            <div className="music-track">
                <p>{context.state.musicAtual}</p>
                <MusicRangeInput />
                <p>{context.state.musicLength}</p>
            </div>
        </div>
    );
}