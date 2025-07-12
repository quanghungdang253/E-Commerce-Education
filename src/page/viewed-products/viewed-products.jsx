import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../features/course/courses-slice';
import Header from '../../common/header/header';
import TopLoadingBar from '../../ui/loading';
import { toggleLike } from '../../features/favorite/user-favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ProductDetailModal from '../home/components/product-detail-modal';
import useFetchCourseDetail from '../../hooks/useFetchCourseDetail';
function ViewProduct() {
    const dispatch = useDispatch();
    const {listCourse} = useSelector((state) => state.useFavorite);
    const {data: products = [], loading,error} = useSelector((state) => state.courses);
      const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [filteredLiked, setFilteredLiked] = useState([]);
   const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const { course: selectedProduct, loading: loadingModal } = useFetchCourseDetail(selectedId);
console.log("priceFilter : " + priceFilter );
console.log("searchQuery : " + searchQuery);

  useEffect(() => {
        if(products.length === 0) {
                dispatch(fetchCourses());
        }
  },[dispatch, products.length]);


  

  useEffect(() => {
    const filterProduct = products.filter((item) =>  listCourse.includes(item.id));
            const text = searchQuery.toLowerCase();
            const filter = filterProduct.filter((item) => {
                 const Name = item.name.toLowerCase().includes(text);

                 let Price = true;

                 if(priceFilter === "low") {
                        Price = item.price < 500000;

                 }
                 else if(priceFilter === 'medium'){
                    Price = item.price >= 500000 && item.price <= 1000000;
                 }
                   else if (priceFilter === 'high'){
                        Price = item.price > 1000000;
                   } 

                   return Name && Price;
            })
setFilteredLiked(filter);
  },[searchQuery, priceFilter,products ,listCourse]);

 const handleProductClick = (productId) => {
    setSelectedId(productId);
    setIsModalOpen(true);
  };


  const handleFavorite = (id,e) => {
         e.stopPropagation();
         dispatch(toggleLike(id));
  }


if(loading) {
    return <TopLoadingBar/>;
}
if(error) {
    return <p className="text-red-500">Lỗi khi tải dữ liệu: {error}</p>;
}

console.log("dữ liệu nhận được là " + filteredLiked);
    return (
        <div>
    <Header
        valueInput={searchQuery}
        setValueInput={setSearchQuery}
        priceMoney={priceFilter}
        setPriceMoney={setPriceFilter}
      />
          <div className="max-w-[1280px] mx-auto px-4">
                {
                    filteredLiked.length === 0 ? (
                            <p className="text-gray-500 mt-6">Không có sản phẩm nào phù hợp với tìm kiếm.</p>
                    ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {filteredLiked.map((item) => (
                                      <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer relative"
                  onClick={() => handleProductClick(item.id)}


              >
                     <button
                        onClick={(e) => handleFavorite(item.id, e)}
                        className="absolute top-3 right-3 text-2xl text-red-500"
                     >   

                     </button>
                           <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-40 object-cover"
                           />
                               <h3 className="font-semibold text-lg">
                                    {item.name}
                             </h3>
                               <p className="text-sm text-gray-600">
                                        {item.shortDesc}  
                              </p>
                         <p className="text-indigo-600 font-bold mt-2">
                                 Giá: {item.price.toLocaleString()}đ
                         </p>
              </div>
                                ))}

                            </div>
                    )
                }


          </div>
           {isModalOpen && (
        <ProductDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          course={selectedProduct}
          loading={loadingModal}
        />
      )}

        </div>
    );
}

export default ViewProduct;