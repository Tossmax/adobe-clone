import "./Section1styles.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import first from "../assets/12.jpg";
import sec from "../assets/13.jpg";
import thir from "../assets/14.jpg";
/*import PlayArrowIcon from '@mui/icons-material/PlayArrow';*/

import React from 'react';

const Section1 = () => {
  return (
    <div className="bod">
        <p className="headd">Today's Work in Progress</p>
        <div className="container">
            <div className="first">
                <AddCircleIcon  style={{ color: 'blue', fontSize: 80  }} />
                <p>Add Yours</p>
            </div>
            <div className="second">
                <div className="imgg">
                    <img src={first} alt="yo" className="imag" />
                    <h4>LIVE</h4>
                </div>
                <p>Adobe Live</p>
            </div>
            <div className="second">
                <div className="imgg">
                    <img src={sec} alt="yo" className="imag" />
                    <h4>LIVE</h4>
                </div>
                <p>Adobe Live</p>
            </div>
            <div className="second">
                <div className="imgg">
                    <img src={thir} alt="yo" className="t" />
                    <img src={first} alt="yo" className="tt" />
                    <img src={thir} alt="yo" className="tt" />
                    <img src={sec} alt="yo" className="tt" />
                   
                </div>
                <p className="Pp">video</p>
            </div>
            <div className="second">
                <div className="imgg">
                    <img src={thir} alt="yo" className="t" />
                    <img src={first} alt="yo" className="tt" />
                    <img src={thir} alt="yo" className="tt" />
                    <img src={sec} alt="yo" className="tt" />
                   
                </div>
                <p className="Pp">video</p>
            </div>
            <div className="second">
                <div className="imgg">
                    <img src={thir} alt="yo" className="t" />
                    <img src={first} alt="yo" className="tt" />
                    <img src={thir} alt="yo" className="tt" />
                    <img src={sec} alt="yo" className="tt" />
                   
                </div>
                <p className="Pp">video</p>
            </div>
            <div className="second">
                <div className="imgg">
                    <img src={thir} alt="yo" className="t" />
                    <img src={first} alt="yo" className="tt" />
                    <img src={thir} alt="yo" className="tt" />
                    <img src={sec} alt="yo" className="tt" />
                   
                </div>
                <p className="Pp">video</p>
            </div>
        </div>
    </div>
  )
}

export default Section1