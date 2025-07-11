import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header  from '../../common/header/header';
import TopLoadingBar from '../../ui/loading';
import useFetchCourses from '../../hooks/useFetchCourses';
function Home() {
  const {courses,loading, error} = useFetchCourses();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [filteredCourses, setFilterCourses] = useState([]);

    useEffect(() => {
    const keyword = searchQuery.toLowerCase();

    const filtered = courses.filter((item) => {
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
  }, [courses, searchQuery, priceFilter]);

  
    return (
        <div className="
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
        </div>
    );
}

export default Home;