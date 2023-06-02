import './Section2styles.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import bdim from '../assets/jst.jpg';
import prof from '../assets/n.jpg';
import youu from '../assets/you.jpg';
import nft from '../assets/new.jpg';
import virtualR from '../assets/vr.jpg';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';

import React from 'react';

const Section2 = () => {
  return (
    <div className="contain">
      <div className="third">
        <div className="fav">
          <FavoriteIcon className="ic" />
          <h4 className="brd">For You</h4>
        </div>
        <div class="vl"></div>
        <div className="fav me">
          <StarIcon className="ic" opacity="0.6" />
          <h4>Your Subscriptions</h4>
        </div>
      </div>
      <span className="bar"></span>
      <p className="uppp">Projects from creatives you follow and more</p>
      <div className="bd">
        <div className="content">
          <img src={bdim} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content one">
          <img src={youu} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content one">
          <img src={nft} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content one">
          <img src={virtualR} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content">
          <img src={bdim} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content one">
          <img src={youu} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content one">
          <img src={nft} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content one">
          <img src={virtualR} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
        <div className="content one">
          <img src={youu} alt="come" className="bimag" />
          <div className="icons-rate">
            <div className="fi">
              <img src={prof} alt="go" className="fil" />
              <p>Ahmed Ogunbiyi</p>
            </div>
            <div className="left">
              <ThumbUpAltIcon opacity="0.6" />
              <p>500</p>
            </div>
            <div className="right">
              <RemoveRedEyeSharpIcon opacity="0.6" />
              <p>52k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
