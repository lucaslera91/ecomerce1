import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'

export default function ItemDetail({ item, text }) {
    console.log(item)
    const [bigImg, setImg] = useState()
    
    return (
        <div className='w-100 d-flex justify-content-center text-light' style={{ minHeight: '100vh' }}>
            <div className='container-fluid border-secondary rounded w-100 m-2 h-100vh'>
                <div className='row border border-1'>
                    <div className='col-2 '>
                        <img className='img-fluid border border-2 border-secondary rounded my-2' onClick={()=>{setImg(item.picture)}} style={{ maxSize: '30px' }} src={item.picture} alt="" />
                        <img className='img-fluid border border-2 border-secondary rounded my-2' onClick={()=>{setImg(item.picture1)}} style={{ maxSize: '30px' }} src={item.picture1} alt="" />
                        <img className='img-fluid border border-2 border-secondary rounded my-2' onClick={()=>{setImg(item.picture2)}} style={{ maxSize: '30px' }} src={item.picture2} alt="" />
                        <img className='img-fluid border border-2 border-secondary rounded my-2' onClick={()=>{setImg(item.picture3)}} style={{ maxSize: '30px' }} src={item.picture3} alt="" />
                    </div>
                    
                    <div className='col-8 d-flex justify-content-center align-items-center'>
                        <img className='img-fluid border border-1 rounded' src={bigImg} alt="" />
                    </div>

                    <div className='col-2 d-flex justify-content-center align-items-center flex-column'>
                        <div>
                            <div className='py-3'>
                                {item.descripcion}
                            </div>
                            <div >
                                <h3 className="font-weight-bold">${item.price}</h3>
                            </div>
                        </div>
                        <div className='w-100 d-flex justify-content-center flex-column'>
                            <h3>Stock: {item.stock}</h3>
                            <ItemCount text={text} stock={item.stock} start={1}></ItemCount>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}