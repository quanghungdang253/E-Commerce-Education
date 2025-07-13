import React from 'react';
import { FaHome, FaBookOpen, FaHeart ,  FaShoppingCart } from 'react-icons/fa';
import NavLinkItem from '../../../ui/nav-link';
const  NavigationHeader = () => {
    return (
        <nav className='flex gap-6'>
             <NavLinkItem 
                to="/" icon={FaHome} label="Trang chủ"
              />
             <NavLinkItem 
                to="/History" icon={FaBookOpen} label="Lịch sử"
             />
             <NavLinkItem 
                to="/Favorite" icon={FaHeart} label="Khóa học yêu thích"
             />
               <NavLinkItem 
                       to="/Cart" 
                       icon={FaShoppingCart} 
                         label="Giỏ hàng"
            />
        </nav>
    );
}

export default NavigationHeader;