import './rangeInput.css';

export const RangeInput = () => {
    const handleInputChange = (event) => {
        const min = event.target.min;
        const max = event.target.max;
        const val = event.target.value;
        event.target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    }

    return(
        <input
            className="slider"
            type="range"
            min={1}
            max={100}
            defaultValue={70}
            onChange={handleInputChange}
        />
    );
}