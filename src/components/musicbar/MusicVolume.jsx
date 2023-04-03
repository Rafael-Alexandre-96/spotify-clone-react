import { RangeInput } from '../common/RangeInput';

import { AiOutlineFullscreen } from 'react-icons/ai';
import { TbMicrophone2 } from 'react-icons/tb';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { FiVolume1 } from 'react-icons/fi';
import { MdDevicesOther } from 'react-icons/md';

import './style.css';

export default function MusicVolume() {
    return(
        <div className="music-volume">
            <TbMicrophone2 />
            <HiOutlineQueueList />
            <MdDevicesOther />
            <FiVolume1 />
            <RangeInput />
            <AiOutlineFullscreen />
        </div>
    );
}