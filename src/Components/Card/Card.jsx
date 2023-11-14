import React from 'react';
import './Card.css'
//destructurar el objeto
const Card = ({img,title,price,condition,shipping}) =>{
    
    /* console.log(producto.title) */
    return(
        <div className='contariner-card'>
            <img src ={img} alt="" />
            <div className='product-details'>
                <h6>{title}</h6>
                <p><span>Precio:{price} </span> </p>
                <p><span>Condicion:{condition} </span> </p>
                {/* cuando hay una sola condicion, usamos cortocircuito */}
                {shipping && <p className='free-shipping'>Free Shipping</p> }
            </div>
        </div>
    )
}

export {Card}