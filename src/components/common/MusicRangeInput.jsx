import { useContext } from 'react';
import { Context } from '../../contexts/AppContext';

import './rangeInput.css';

export const MusicRangeInput = () => {
    const context = useContext(Context);

    const handleInputChange = (event) => {
        const min = event.target.min;
        const max = event.target.max;
        const val = event.target.value;
        event.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        context.changeMusicRange(val);
    }

    return(
        <input
            className="slider"
            type="range"
            min={0}
            max={100}
            step={1}
            defaultValue={70}
            onChange={handleInputChange}
        />
    );
}