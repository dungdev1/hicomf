import React from 'react';
// import F_icon from '../assets/images/F_icon.png';
import logo from '../assets/images/logo.svg';
import noun_Box_1276334 from '../assets/images/noun_Box_1276334.svg';
import noun_event_1379383 from '../assets/images/noun_event_1379383.svg';
import noun_friends_1297819 from '../assets/images/noun_friends_1297819.svg';
import noun_message_2043227 from '../assets/images/noun_message_2043227.svg';
import noun_Newspaper_772219 from '../assets/images/noun_Newspaper_772219.svg';
import noun_pages_734946 from '../assets/images/noun_pages_734946.svg';
import pepple from '../assets/images/people.svg';
import Google__G__Logo from '../assets/images/Google__G__Logo.svg';
import Y_Combinator_logo from '../assets/images/Y_Combinator_logo.svg';
import Amazon_A_Smile from '../assets/images/Amazon.com_A_Smile.svg';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href={window.location.origin}>
          <img src={logo} alt="Hicomf icon" />
        </a>
      </div>
      <div className="menu">
        <p>Menu</p>
        <ul>
          <li className="menu__item">
            <div className="icon">
              <img src={noun_Newspaper_772219} alt="" />
            </div>
            <p>News</p>
            <MoreHorizIcon />
          </li>
          <li className="menu__item">
            <div className="icon">
              <img src={noun_message_2043227} alt="" />
            </div>
            <p>Messages</p>
            <MoreHorizIcon />
          </li>
          <li className="menu__item">
            <div className="icon">
              <img src={noun_friends_1297819} alt="" />
            </div>
            <p>Friends</p>
            <MoreHorizIcon />
          </li>
          <li className="menu__item">
            <div className="icon">
              <img src={pepple} alt="" />
            </div>
            <p>Community</p>
            <MoreHorizIcon />
          </li>
          <li className="menu__item">
            <div className="icon">
              <img src={noun_event_1379383} alt="" />
            </div>
            <p>Events</p>
            <MoreHorizIcon />
          </li>
          <li className="menu__item">
            <div className="icon">
              <img src={noun_pages_734946} alt="" />
            </div>
            <p>Pages</p>
            <MoreHorizIcon />
          </li>
          <li className="menu__item">
            <div className="icon">
              <img src={noun_Box_1276334} alt="" />
            </div>
            <p>Manage apps</p>
            <MoreHorizIcon />
          </li>
        </ul>
      </div>
      <div className="shortcuts">
        <p>Shortcuts</p>
        <div className="shortcut__item">
          <div className="icon">
            <img src={Google__G__Logo} alt="" />
          </div>
          <p>Google Inc</p>
          <MoreHorizIcon />
        </div>
        <div className="shortcut__item">
          <div className="icon">
            <img src={Y_Combinator_logo} alt="" />
          </div>
          <p>Y Combinator</p>
          <MoreHorizIcon />
        </div>
        <div className="shortcut__item">
          <div className="icon">
            <img src={Amazon_A_Smile} alt="" />
          </div>
          <p>Amazon</p>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
