import { FiSearch, FiBookOpen, FiHeart } from "react-icons/fi";
import { MdHomeFilled } from 'react-icons/md'
import { BsFillPlusSquareFill } from 'react-icons/bs'

export default function NavLeft() {
    return(
        <nav className="navleft">
            <ul>
                <li className="nav-link"><MdHomeFilled />Início</li>
                <li className="nav-link"><FiSearch />Buscar</li>
                <li className="nav-link"><FiBookOpen />Sua Biblioteca</li>
            </ul>
            <ul>
                <li className="nav-link"><BsFillPlusSquareFill />Criar playlist</li>
                <li className="nav-link"><FiHeart />Músicas Curtidas</li>
            </ul>
        </nav>
    );
}