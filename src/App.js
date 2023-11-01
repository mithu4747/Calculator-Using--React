import { useState ,useCallback } from 'react';
import './App.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';



function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  const [result,setResult] = useState("")
  const handleClick = (e)=>{
    setResult(result.concat(e.target.name));

  }
  const clear = ()=>{
    setResult("");

  }
  const backspace = ()=>{
  setResult(result.slice(0,- 1));
  }
  const calculate = ()=>{
    try {
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error!!!")
    }
      
   
      
  
    
  
  }
  return (
  
    <>
     <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

<div className='container shadow '>

  <form> 
    <input type='text' value={result}/>
  </form>
  <div className='keypad'>
    <button className='highlight' onClick={clear} id='clear'>Clear</button>
    <button className='highlight' onClick={backspace} id='backspace'>C</button>
    <button className='highlight' name='/' onClick={handleClick}>&divide;</button>
    <button name='7' onClick={handleClick}>7</button>
    <button  name='8' onClick={handleClick}>8</button>
    <button name='9' onClick={handleClick}>9</button>
    <button  className='highlight' name='*' onClick={handleClick}>&times;</button>
    <button name='4' onClick={handleClick}>4</button>
    <button name='5' onClick={handleClick}>5</button>
    <button name='6' onClick={handleClick}>6</button>
    <button className='highlight' name='-' onClick={handleClick}>&ndash;</button>
    <button name='1' onClick={handleClick}>1</button>
    <button name='2' onClick={handleClick}>2</button>
    <button name='3' onClick={handleClick}>3</button>
    <button className='highlight' name='+' onClick={handleClick}>+</button>
    <button name='0' onClick={handleClick}>0</button>
    <button name='.'  onClick={handleClick}>.</button>
    <button className='highlight' name='=' id='result' onClick={calculate}>=</button>

  </div>

</div>
    </>
  );
}

export default App;
