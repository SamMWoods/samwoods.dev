import { useEffect, useState } from 'react';

// Utils
import JumpToHyperspace from '../utils/hyperspace';

function Home() {
  // States
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // handle window resize
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  // if window size changes, update canvas size
  useEffect(() => {
    const canvas = document.getElementById('hyperspace');
    canvas.width = dimensions.width;
  }, [dimensions]);

  // init hyperspace
  useEffect(() => {
    window.myJump = new JumpToHyperspace();
  }, []);

  return (
    <>
      <canvas id="hyperspace" />
      <div className="title-container">
        <h1 className="title">Welecome to</h1>
        <h1 className="title colour">Sam Woods'</h1>
        <h1 className="title">Website</h1>
      </div>
    </>
  );
}

export default Home;
