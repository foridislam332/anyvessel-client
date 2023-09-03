import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const RangeSlider = ({ maxValue, value, setValue }) => {
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <div className='slider'>
            <Slider
                min={0}
                max={maxValue}
                tooltip={false}
                value={value}
                onChange={handleChange}
                className='bg-red-500'
            />
        </div>
    );
};

export default RangeSlider;