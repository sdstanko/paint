import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styles from './Actions.module.scss'
import paintIcon from '../../assets/icons/paint.png'
import {
    increaseCurrentCounter,
    decreaseCurrentCounter,
} from '../../redux/slices/actionCounterSlice';

const Actions = ({ filename }) => {
    const currentCounter = useSelector((state) => state.actionCounter.current);
    const allCounter = useSelector((state) => state.actionCounter.all);
    const dispatch = useDispatch()
    
    function undo() {
        if (currentCounter > 0) dispatch(decreaseCurrentCounter());
    }

    function redo() {
        if (currentCounter < allCounter) dispatch(increaseCurrentCounter());
    }

    return (
        <div className={styles.actions}>
            <img src={paintIcon} className={styles.paintIcon} />
            <div className={styles.separator}></div>
            <div className={styles.btns}>
                <button
                    className={[styles.action, styles.undo].join(' ')}
                    onClick={() => undo()}></button>
                <button
                    className={[styles.action, styles.redo].join(' ')}
                    onClick={() => redo()}></button>
            </div>
            <div className={styles.separator}></div>
            <h1 className={styles.filename}>{filename} - Paint</h1>
        </div>
    );
};
 
export default Actions;