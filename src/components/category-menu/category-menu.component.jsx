import React from "react";
import './category-menu.styles.scss';
import CategoryItems from '../category-items/category-items.component';

const CategoryMenu = ({categories}) => {
    return(
        <div className='categories-container'>
        {categories.map(({title, id, imageUrl}) => (
          <CategoryItems key = {id} title = {title} imageUrl = {imageUrl}/>
        ))}
        
      </div> 
    )
}

export default CategoryMenu;