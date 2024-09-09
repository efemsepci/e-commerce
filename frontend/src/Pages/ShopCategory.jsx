import React, { useContext } from 'react'
import './Style/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item.jsx'

const ShopCategory = (props) => {
  const {products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="shopcategory-indexSort">
        <p>
          <span></span>
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.title} image={item.image} price={item.price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
