 import React, { useState, useEffect } from 'react'
 import "./Popular.css"
 import "../Item/Item.jsx"
 import ProductService from '../../Services/ProductService'
import Item from '../Item/Item.jsx'

 const Popular = () => {
    const [popular, setPopular] = useState([]);
    const popularIds = [3,9,16,18];

    const fetchPopularByIds = async () => {
        try{
            const requests = popularIds.map(id => ProductService.getProductById(id));
            const fetchedPopular = await Promise.all(requests);
            setPopular(fetchedPopular);
        }catch (error){
            console.error("Error fetching popular: ", error);
        }
    }

    useEffect(() => {
        fetchPopularByIds();
      }, []);
  return (
    <div className='popular'>
      <h1>POPULAR</h1>
      <hr/>
      <div className="popular-item">
        {popular.map((item,i) =>{
            return <Item key={i} id={item.data.id} name={item.data.title} image={item.data.image} price={item.data.price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
