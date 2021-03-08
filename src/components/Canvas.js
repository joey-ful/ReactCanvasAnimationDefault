import useCanvas from '../Hooks/useCanvas.js';

const Canvas = props => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas;