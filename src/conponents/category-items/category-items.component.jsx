import React from "react";
import './category-items.styles.scss';

const CategoryItems = ({imageUrl, title, id}) => {
    return(
        <div key={id} className='category-container'>
          <div className='background-image' 
          style={{
            backgroundImage: `url(${imageUrl})`
          }}></div> 
        <div className='category-body-container' key={id}>
          <h1>{title}</h1>
          <p>Shop Now</p>
        </div>
      </div>
    )
}

export default CategoryItems;