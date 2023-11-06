import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setActiveColor,
    setPrimaryColor,
    setSecondaryColor,
} from '../../../redux/slices/simpleToolSlice';
import ChooseColorItem from './ChooseColorItem';
import { defaultColors } from '../../../data/colors';
import styles from './ColorPicker.module.scss';

const ColorPicker = () => {
    const activeColor = useSelector((state) => state.simpleTool.activeColor);
    const primaryColor = useSelector((state) => state.simpleTool.primaryColor);
    const secondaryColor = useSelector((state) => state.simpleTool.secondaryColor);
    const dispatch = useDispatch()

    const [colorPicker, setColorPicker] = useState('#000000');

    function chooseColor(color) {
        setColorPicker(color);
        if (activeColor === 1) {
            dispatch(setPrimaryColor(color));
        } else {
            dispatch(setSecondaryColor(color))
        }
    }

    return (
        <div className={styles.colorPicker}>
            <ChooseColorItem
                id={1}
                color={primaryColor}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
            />
            <ChooseColorItem
                id={2}
                color={secondaryColor}
                activeColor={activeColor}
                setActiveColor={setActiveColor}
            />
            <div className={styles.colorPicker__palette}>
                {defaultColors.map((color, i) => (
                    <div
                        style={{ backgroundColor: color }}
                        className={styles.colorPicker__square}
                        key={i}
                        onClick={() => chooseColor(color)}></div>
                ))}
            </div>
            <input type="color" onChange={(event) => chooseColor(event.target.value)} />
        </div>
    );
};

export default ColorPicker;
