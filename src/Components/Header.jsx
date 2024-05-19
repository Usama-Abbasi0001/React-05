import React from 'react'
import './Header.css';
function Header() {
  return (
    <div id='navbar' className='lg:text-[18px] md:text-[16px] text-[14px]'>
      <div className='lg:basis-[70%] basis-[75%] lg:text-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" className='text-white hover:text-red-400' ><u>ShopNow</u></a></div>
      <div className='basis-[20%] lg:text-[18px] md:text-[16px] text-[14px]' id='eng'>
      <div>English</div>
      <div><img src={require('./images/DropDown.png')} alt="" /></div>
      </div>
    </div>
  )
}

export default Header;
