import NavLeft from './NavLeft';
import Playlist from './Playlist';
import Logo from './Logo';
import { Border, DownloadApp } from './Others';

import './style.css';

export default function Sidebar() {
    return(
        <div className="sidebar">
            <Logo />
            <NavLeft />
            <Border />
            <Playlist />
            <DownloadApp />
        </div>
    );
}