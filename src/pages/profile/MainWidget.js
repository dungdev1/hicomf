import React, { useContext } from 'react';
import Button from '../../components/Button';
import { ProfileContext } from '../../contexts/ProfileContext';
import FriendCardWidget from './FriendCardWidget';

import './MainWidget.scss';
import SongCardWidget from './SongCardWidget';

function _calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function MainWidget() {
  const user = useContext(ProfileContext);
  const [yearOlds, relationship] = [
    user.data.birthday ? _calculateAge(user.data.birthday) : 47,
    user.data.relationship || "Single"
  ];

  const friends = [
    {
      name: "Nguyễn Kính",
      avatarPic: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/104130061_986157808506189_220685228059190847_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=VIp6NkemUxoAX_e-h2d&_nc_ht=scontent.fsgn5-6.fna&oh=6214a19201e34a19adb8509d200548f2&oe=5FC4F85F",
      company: "AirBnb",
    },
    {
      name: "Hoàng Quân",
      avatarPic: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/87378736_1199262343753750_7313895264283000832_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=9eIDn7yAk64AX_5trJC&_nc_ht=scontent.fsgn5-5.fna&oh=fe9385d6885e402f9f3ed91e5188aee4&oe=5FC845B5",
      company: "Instagram"
    },
    {
      name: "Lương Lê",
      avatarPic: "https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/103668260_2791321927765304_2493694662540850875_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=LImLSwSVofEAX8fPlTy&_nc_ht=scontent.fsgn5-7.fna&oh=aa2cc4874d488910bc2d86b621ffb977&oe=5FC888CE",
      company: "Facebook"
    },
  ];

  const songs = [
    {
      name: "Battle Symphony",
      songPic: "https://i.scdn.co/image/ab67616d0000b273047b4a6f732e2dda7b3e1157",
      singer: "Linkin Park",
      songLength: "3:56"
    },
    {
      name: "Space Oddity",
      songPic: "https://i1.sndcdn.com/artworks-000142961868-hd4ub6-t500x500.jpg",
      singer: "David Bowie",
      songLength: "3:46"
    },
    {
      name: "Animus Vox",
      songPic: "https://m.media-amazon.com/images/I/815hrzTlawL._SS500_.jpg",
      singer: "The Glitch Mob",
      songLength: "6:44"
    },
    {
      name: "Firefly",
      songPic: "https://i.scdn.co/image/ab67616d0000b2735a839069fd0ac3836a960c60",
      singer: "City Of The Sun",
      songLength: "5:48"
    },
  ];

  return (
    <div className="MainWidget">
      <div className="component about">
        <div className="component__header">
          <h4>About</h4>
          <p>More</p>
        </div>
        <div className="yearOlds__relationship">
          <p>{yearOlds} years, {relationship}</p>
        </div>
        <div className="links">
          <div className="link-item instagram">
            <Button
              iconName="instagram"
              fill="#d3d8e0"
              stroke="#d3d8e0"
              strokeWidth="0.5"
              width="19.893"
              height="19.893"
              className="button"
            />
            <div className="link-name">
              <p>elonmusk</p>
            </div>
          </div>
          <div className="link-item twitter">
            <Button
              iconName="twitter"
              fill="#d3d8e0"
              stroke="#d3d8e0"
              width="20.053"
              height="16.289"
              className="button"
            />
            <div className="link-name">
              <p>@elonmusk</p>
            </div>
          </div>
        </div>
      </div>
      <div className="component friend">
        <div className="component__header">
          <h4>Friends</h4>
          <p>All</p>
        </div>
        {friends.map(friend => {
          return <FriendCardWidget {...friend} />;
        })}
      </div>
      <div className="component favorite-songs">
        <div className="component__header">
          <h4>Favorite songs</h4>
          <p>All</p>
        </div>
        {songs.map(song => {
          return <SongCardWidget {...song} />;
        })}
      </div>
    </div>
  );
}

export default MainWidget;