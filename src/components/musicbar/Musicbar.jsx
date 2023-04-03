import MusicCover from './MusicCover';
import MusicPlayer from './MusicPlayer';
import MusicVolume from './MusicVolume';

import './style.css';

export default function Musicbar() {
    return(
        <div className="musicbar">
            <MusicCover />
            <MusicPlayer />
            <MusicVolume />
        </div>
    );
}