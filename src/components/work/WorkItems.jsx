import React, { Fragment } from 'react';
import './work.css';

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <h4 className="work__backgroundTitle">{item.backgroundTitle}</h4>
        <h4 className="work__backgroundDate">
          <font color='Black'>Date:</font> {item.backgroundDate}
          <br></br>
          <font color='Black'>Software:</font> {item.backgroundTech}
        </h4>
        <h4 className="work__background">{item.background}</h4>
        {
          item.link != "" &&
          <a href={item.link} className="work__button" target="_blank">
            More Details <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        }
    </div>
  )
}

export default WorkItems;