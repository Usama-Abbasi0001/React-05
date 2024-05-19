import React from 'react';
import './CardHeart.css';

function CardHeart({united,hading,dollar,amunt,white,idl}) {

  function inter() {
    var a = document.getElementById(idl);
  
      a.style.display = "block";
  }
  
  function leave() {
     var b = document.getElementById(idl);
  
    b.style.display = "none";
  }

  return (
    <>
         <div className='flex flex-col'>
         <div className='w-[300px] h-[320px]  bg-gray-200 rounded-[4px]'>
         <div className='flex justify-center py-4' onMouseEnter={inter} onMouseLeave={leave}>
         <div className='mt-16'><img src={united} alt="" /></div>
         <div className='space-y-3'>
        <div><img src={require('./images/Fill Heart.png')} alt="" /></div>
        <div><img src={require('./images/Fill Eye.png')} alt="" /></div>
        </div>
         </div>
         <div className='w-[300px] rounded-[4px] h-[50px] bg-black text-white text-center text-[20px] pt-2 cursor-pointer' id={idl}> Add To Card</div>
         </div>


         <div className='mt-4'>
        <div className='font-bold'>{hading}</div>

        <div className=' flex space-x-2 items-center'>
        <div className='text-red-600 mt-1'>{dollar}</div>
            <div><img src={require('./images/star.png')} alt="" /></div>
            <div><img src={require('./images/star.png')} alt="" /></div>
            <div><img src={require('./images/star.png')} alt="" /></div>
            <div><img src={white} alt="" /></div>
            <div><img src={white} alt="" /></div>
            <div className='text-gray-600'>{amunt}</div>
        </div>
      </div>



            </div> 
    </>
  )
}

export default CardHeart;
