import './App.css';

import Canvas from './Components/Canvas';

function App() {

  const t = new Date();

  const draw = (canvas) => {
    var context = canvas.getContext('2d');

    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  console.log(t.getTime())

  return (
    <div>
      <Canvas draw={draw}/> 
    </div>
  );
}

export default App;
