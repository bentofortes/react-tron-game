import React, {
    useRef,
    useEffect,
    useState
} from "react";

import frameCounter from "../Helpers/Clock";


const Canvas = props => {
    
    const { draw, ...rest } = props;
    const canvasRef = useRef(null);

    const [condition, setCondition] = useState(true);

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    useEffect(() => {
        draw(canvas)
    }, [draw, canvas])

    return (
        <canvas ref={canvasRef} {...rest}/>
    )
}

export default Canvas