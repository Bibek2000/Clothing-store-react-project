import React from "react";
import './category-items.styles.scss';

const CategoryItems = ({imageUrl, title}) => {
    return(
        <div className='category-container'>
          <div className='background-image' 
          style={{
            backgroundImage: `url(${imageUrl})`
          }}></div> 
        <div className='category-body-container'>
          <h1>{title}</h1>
          <p>Shop Now</p>
        </div>
      </div>
    )
}

export default CategoryItems;