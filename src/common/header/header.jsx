// components/Header.jsx
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import NavigationHeader from './components/navigation-header';
import { Link } from 'react-router-dom';
import Input from '../../ui/input';
export default function Header({
  valueInput,
  setValueInput,
  priceMoney,
  setPriceMoney,
}) {
  return (
    <header className="
            bg-gradient-to-r
          from-blue-500
          via-purple-500
          to-pink-500
            p-4 mb-4
           shadow-md
          text-white
    ">
      <div className="
                flex flex-wrap
                
                items-center
                justify-between
                gap-4
                max-w-[1280px]
                mx-auto
     ">
        <div className="
                flex items-center
                gap-2 text-xl
                font-bold
                cursor-pointer
        ">
               <FaBookOpen className="text-white" />
              <Link to="/">    
                        <span className='text-white'>EduCourses</span>
                  </Link>
        </div>
     
        <div className="
             flex gap-2
             w-full sm:w-auto
             flex-wrap  md:flex-nowrap
             flex-wrap lg:flex-nowrap ">
          <Input
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="Bạn muốn tìm khóa học nào"
          />
        <select
  value={priceMoney}
   onChange={(e) => setPriceMoney(e.target.value)}
  className="
    border px-1 py-1
     text-black rounded-2xl
    transition duration-300
    ease-in-out focus:outline-none
    focus:ring-2 focus:ring-blue-400
   focus:border-blue-500 hover:shadow-lg"
>
  <option value="" className="">Tất cả mức giá</option>
    <option value="low">Thấp (&lt; 500k)</option>
  <option value="medium">Trung bình (500k - 1tr)</option>
  <option value="high">Cao (&gt; 1tr)</option>
</select>

        </div>
        <NavigationHeader />
      </div>
    </header>
  );
}
