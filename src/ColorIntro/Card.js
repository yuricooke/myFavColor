import React from 'react';
import "./Card.css";
import LockIcon from '@mui/icons-material/Lock';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';


function Card({ color, hexCode, onChangeColor }) {
  const handleColorChange = () => {
    onChangeColor(color);
  };

  const colorHex = `#${color}`;


  return (
    <div className="col-md-3">
      <div className="card-w shadow rounded bg-white">
        <div className={`card-color ${color} d-flex flex-column py-md-3`}>
          <h3 id={`color-${color}`}>{hexCode}</h3>
          <p>{color}</p>
        </div>
      </div>
      <div className="my-3 card-w">
        <button className="btn rounded-pill btn-tools disabled" disabled>
            <LockIcon />
        </button>
        <button className="btn rounded-pill btn-tools disabled" disabled>
          <DragIndicatorIcon/>
        </button>
        <button className="btn rounded-pill btn-tools disabled" disabled>
          <StarOutlineIcon/>
        </button>
        <button
          className="btn rounded-pill btn-tools"
          onClick={handleColorChange}
          title="refresh"
        >
          <AutorenewIcon/>
        </button>
      </div>
    </div>
  );
}

export default Card;
