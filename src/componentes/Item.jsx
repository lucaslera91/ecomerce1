import React from 'react'
import { Link} from "react-router-dom";
import {formatNumber} from "../helper"

function Item({item, text}) {
   
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    //const setBg = () => {
    //  const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //  document.body.style.backgroundColor = "#" + randomColor;
    //  color.innerHTML = "#" + randomColor;
    //}

    
    return (
        <div className='col-4 m-2 text-dark' style={{minWidth: '300px', maxWidth: "400px"}}>
            <div className="container-fluid w-100 border-bottom border-dark p-1 bg-light shadow rounded-xl" style={{borderRadius: '2rem'}}>
            <div className='w-100 py-1'>
                <h4 className='d-flex justify-content-center align-items-center text-dark' style={{height: 60}}>{item.title}</h4>
            </div>
            <div className='w-100 py-1'>
                <Link to={`/computers/detail/${item.id}`}>
                    <img className="img-fluid img-thumbnail rounded border border-muted" style={{height: 200}} src={item.picture} alt=''/>
                </Link>
            </div>
            <div>
                <Link to={`/computers/detail/${item.id}`}>
                <button className="bg-light w-75 border border-muted my-1 rounded text-dark" >Ver mas detalles!</button>
                </Link>
            </div>
            
            <div className='text-dark'>
               Stock: {item.stock}
            </div>
            <div className='text-dark'>
               Precio: $ {formatNumber(item.price)}
            </div>
        </div>
        </div>
        
    )
}
export default Item
