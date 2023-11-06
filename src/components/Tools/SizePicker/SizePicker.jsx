import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSize } from '../../../redux/slices/simpleToolSlice';
import styles from './SizePicker.module.scss';


const SizePicker = () => {
    const [modalIsActive, setModalisActive] = useState(false);
    const sizes = [{ value: 2 }, { value: 4 }, { value: 6 }, { value: 10 }];
    
    const size = useSelector((state) => state.simpleTool.size)
    const dispatch = useDispatch()

    function setSizeAndModal(size) {
        dispatch(setSize(size));
        console.log(setSize(size));
		setModalisActive(false);
    }

    return (
        <div className={styles.sizePicker} onClick={() => setModalisActive(!modalIsActive)}>
            <div className={styles.sizePicker__lines}>
                {sizes.map((item, i) => (
                    <div
                        className={[styles.sizePicker__line].join(' ')}
                        key={i}
                        style={{ height: sizes[i].value }}></div>
                ))}
            </div>
            <div className={styles.sizePicker__label}>Size</div>
            <div className={styles.sizePicker__arrow}></div>
            <div
                className={[styles.sizePicker__line].join(' ')}
                style={{ height: size }}></div>

            {modalIsActive && (
                <div className={styles.sizePicker__modal}>
                    {sizes.map((item, i) => (
                        <div
                            className={styles.sizePicker__wrapper}
                            key={i}
                            onClick={() => setSizeAndModal(sizes[i].value)}>
                            <div
                                className={[styles.sizePicker__line].join(' ')}
                                style={{ height: sizes[i].value }}></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SizePicker;
