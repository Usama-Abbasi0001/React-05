import React from 'react'
import './Sixitems.css';
function SixItems(props) {
  return (
    <>
    <div className='lg:mt-[5rem] mt-[3rem] mx-auto'>
        <div className='w-[180px] h-[150px]' id='items'>
            <div><img src={props.ximage} alt="" /></div>
            <div>{props.name}</div>
        </div>
    </div>
      
    </>
  )
}

export default SixItems;
