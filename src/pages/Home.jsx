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
        <h1 className="title colour">Sam Woods'</h1>
        <h1 className="title">Website</h1>
        <div className="input-wrapper">
          <input aria-label="Ask us anything" />
          <span className="placeholder"></span>
        </div>
      </div>
    </>
  );
}

export default Home;
