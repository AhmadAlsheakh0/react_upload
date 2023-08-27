import { useState } from "react";
import { Link } from "react-router-dom";

function BackgroundColor (){
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = () => {
    const newColor = backgroundColor == 'white' ? 'teal' : 'white';
    setBackgroundColor(newColor);
  };

  return (
    <div style={{backgroundColor}}>
      <button id="colorbtn" onClick={changeBackgroundColor}>Change Background Color</button><br/><br/>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default BackgroundColor;