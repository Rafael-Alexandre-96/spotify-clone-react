import { useState, useEffect } from 'react';

import './style.css';

export default function Playlist() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        setPlaylists([
            'Playlist #01',
            'Playlist #02',
            'Playlist #03',
            'Playlist #04',
            'Playlist #05',
            'Playlist #06',
            'Playlist #07',
            'Playlist #08',
            'Playlist #09',
            'Playlist #10'
        ]);
    }, []);

    return(
        <nav className="playlist">
            <ul>
                {playlists.map((playlist) => (<li className="playlist-link" key={playlist}>{playlist}</li>))}
            </ul>
            
        </nav>
    );
}