import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="
                bg-gray-900
                text-white
                  py-12
                  px-4 sm:px-8 
        ">
        <div className="
             max-w-screen-xl
             mx-auto grid
             grid-cols-1 
             md:grid-cols-4
             gap-10
        
        "> 
                <div> 
                        <h2 className="text-xl font-bold mb-4">Antoree.com</h2>  
                          <p className="text-sm leading-relaxed">
                              Nền tảng giáo dục trực tuyến kết nối người học và giáo viên trên toàn thế giới. Học mọi lúc, mọi nơi.
                          </p>
                </div>
                  <div>
                     <h2 className="text-xl font-bold mb-4">Liên kết nhanh</h2>
         <ul className="space-y-2 text-sm">
             <li>
                <a href="#" className="hover:underline">Trang chủ</a>
            </li>
              <li>
                        <a href="#" className="hover:underline">Khóa học</a>
                </li>
                 <li>
                        <a href="#" className="hover:underline">Blog</a>
                 </li>
                 <li>
                     <a href="#" className="hover:underline">Liên hệ</a>
                 </li>
             </ul>
        </div>
                   <div>
                     <h2 className="text-xl font-bold mb-4">Hỗ trợ</h2>
                <ul className="space-y-2 text-sm">
                         <li>Email: cskh@antoree.com</li>
                        <li>Hotline: 0877709376</li>
                        <li>Trụ sở chính: 187/7 Điện Biên Phủ, P. Đa Kao, Q 1, TP Hồ Chí Minh, Việt Nam</li>
                </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Theo dõi chúng tôi</h2>
          <div className="flex gap-4">
             <a href="#" className="hover:text-blue-500">
                     <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
                <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
                <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-700">
                         <FaLinkedin size={20} />
            </a>
          </div>
        </div>
  <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
             © 2025 Antoree Pte.Ltd
      </div>
        </div>

        </footer>
    );
}

export default Footer;