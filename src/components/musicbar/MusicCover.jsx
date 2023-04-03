import { useContext } from 'react';
import { Context } from '../../contexts/AppContext';

import { BsHeart, BsPip } from 'react-icons/bs';

import './style.css';

export default function MusicCover() {
    const context = useContext(Context);

    return(
        <div className="music-cover">
            <div className="cover"></div>
            <div className="data">
                <p className="title">{context.state.musicName}</p>
                <p className="artist">{context.state.artists}</p>
            </div>
            <div className="menu">
                <BsHeart />
                <BsPip />
            </div>
        </div>
    );
}