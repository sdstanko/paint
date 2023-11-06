import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    increaseCurrentCounter,
    increaseAllCounter,
    setAllCounter,
} from '../../redux/slices/actionCounterSlice';
import { flagInactiveStrokes } from '../../utils/flagInactiveStrokes';
import { renderField } from '../../utils/renderField';
import styles from './Field.module.scss';

const Field = () => {
    const dispatch = useDispatch();
    const size = useSelector((state) => state.simpleTool.size);
    const primaryColor = useSelector((state) => state.simpleTool.primaryColor);
    const counter = useSelector((state) => state.actionCounter.current);
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [allStrokes, setAllStrokes] = useState([]);
    const [visibleStrokes, setVisibleStrokes] = useState([]);
    const defaultCurrentStroke = {
        size: size,
        color: primaryColor,
        cords: [],
        active: true,
    };
    const [currentStroke, setCurrentStroke] = useState(defaultCurrentStroke);

    useEffect(() => setCurrentStroke(defaultCurrentStroke), [primaryColor, size]);

    useEffect(() => {
        let activeStrokes = allStrokes.filter((stroke) => stroke.active === true);
        let activeAndVisibleStrokes = activeStrokes.filter((stroke, index) => {
            return index < counter;
        });

        setVisibleStrokes(activeAndVisibleStrokes);
    }, [counter]);

    useEffect(() => {
        setCurrentStroke(defaultCurrentStroke);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        renderField(visibleStrokes, ctx)
    }, [visibleStrokes]);

    // Function for starting the drawing
    const startDrawing = (e) => {
        setCurrentStroke({
            ...currentStroke,
            cords: [...currentStroke.cords, [e.nativeEvent.offsetX, e.nativeEvent.offsetY]],
        });

        ctxRef.current.strokeStyle = primaryColor;
        ctxRef.current.lineWidth = size;
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

        setIsDrawing(true);
    };

    // Function for ending the drawing
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
        setAllStrokes([...allStrokes, currentStroke]);
        dispatch(increaseCurrentCounter());
        dispatch(increaseAllCounter());

        if (counter < allStrokes.length) {
            let filteredStrokes = flagInactiveStrokes(allStrokes, counter);
            setAllStrokes([...filteredStrokes, currentStroke]);
            dispatch(setAllCounter(visibleStrokes.length + 1));
        }
    };

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctxRef.current.stroke();

        setCurrentStroke({
            ...currentStroke,
            cords: [...currentStroke.cords, [e.nativeEvent.offsetX, e.nativeEvent.offsetY]],
        });
    };

    return (
        <div>
            <canvas
                className={styles.field}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                ref={canvasRef}>    
            </canvas>
        </div>
    );
};

export default Field;
