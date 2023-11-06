import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setActiveColor } from '../../../redux/slices/simpleToolSlice';
import styles from './ColorPicker.module.scss'

const ChooseColorItem = ({color, id}) => {
	const activeColor = useSelector((state) => state.simpleTool.activeColor);
	const dispatch = useDispatch();

	return (
		<div 
			className={[styles.chooseColorItem, 
				activeColor === id ? styles.chooseColorItem__selected : ''].join(' ')}
			onClick={() => dispatch(setActiveColor(id))}
		>
			<div className={styles.colorBlock} style={{backgroundColor: color}}></div>
			<div>Color</div>
			<div>{id}</div>
		</div>
	);
}
 
export default ChooseColorItem;