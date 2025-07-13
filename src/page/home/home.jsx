import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header  from '../../common/header/header';
import TopLoadingBar from '../../ui/loading';
import ProductList from './components/product-list';
import MainChatBot from '../../chat/main-chat-bot';
import useFetchCourses from '../../hooks/useFetchCourses';
import LoadingSkeleton from '../../ui/loading-skeleton';
import Footer from '../../common/footer/footer';
function Home() {
  const {value,loading, error} = useFetchCourses();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [filteredCourses, setFilterCourses] = useState([]);
  useEffect(() => {
       window.scrollTo({
          top: 0,
          behavior: 'smooth'
           
       })
  },[])
    useEffect(() => {
    const keyword = searchQuery.toLowerCase();

    const filtered = value.filter((item) => {
      
      const matchesKeyword = item.name.toLowerCase().includes(keyword);

      let matchesPrice = true;
      if (priceFilter === 'low') {
             matchesPrice = item.price < 500000;
      }

         else if (priceFilter === 'medium') {
                      matchesPrice = item.price >= 500000 && item.price <= 1000000;
      } 

          else if (priceFilter === 'high') {
            matchesPrice = item.price > 1000000;
      } 

      return matchesKeyword && matchesPrice;
    });

    setFilterCourses(filtered);
  }, [value, searchQuery, priceFilter]);

  
    return (
        <div className="
                relative
                min-h-screen
                bg-gradient-to-br
                from-white
                to-slate-200 
                animate-gradient-move
                bg-[length:400%_400%] 
        ">
            <Header
               valueInput={searchQuery}
               setValueInput={setSearchQuery}
               priceMoney={priceFilter}
               setPriceMoney={setPriceFilter}
            />
       <div className="
            max-w-[1280px]
            mx-auto px-4 py-0
       
       "> 
       {loading && <LoadingSkeleton />}
        {error && <p className="text-red-500">
                Lỗi khi tải dữ liệu.
        </p>}
        {!loading && !error && <ProductList products={filteredCourses} />
        
        
        }
       
                             </div>
                             <MainChatBot />
                             
                     
        </div>
    );
}

export default Home;