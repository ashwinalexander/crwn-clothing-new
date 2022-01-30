import React from 'react';
import './menu-item.styles.scss';

//higher order component = takes a component as an argument and returns a modified component
import { withRouter } from 'react-router-dom';

//functional since we do not need our component to hold any state
const MenuItem = ({ title, imageUrl, history, match, size, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(`${match.url}${linkUrl}`);
    }}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

//higher order component = takes a component as an argument and returns a modified component
export default withRouter(MenuItem);
