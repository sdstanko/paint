import React from 'react';
import ColorPicker from './ColorPicker/ColorPicker';
import SizePicker from './SizePicker/SizePicker';
import styles from './Tools.module.scss';

const Tools = () => {
    return (
        <div className={styles.tools}>
            <SizePicker/>
            <ColorPicker/>
        </div>
    );
};

export default Tools;
