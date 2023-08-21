import { useEffect } from 'react';

import JumpToHyperspace from '../utils/hyperspace';

function Home() {
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
