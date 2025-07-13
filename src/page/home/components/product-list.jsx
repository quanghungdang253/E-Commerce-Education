import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addView,toggleLike,removeView } from '../../../features/favorite/user-favorite';
import useFetchCourseDetail from '../../../hooks/useFetchCourseDetail';
import ProductDetailModal from './product-detail-modal';
import { faLightbulb, faXmark , faHeart} from '@fortawesome/free-solid-svg-icons';
function ProductList({products}) {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const [modal,setModal] = useState(false);
     const [showSuggestions, setShowSuggestions] = useState(false);
     const { course, loading } = useFetchCourseDetail(index);
     const handleClick = (id) => {
            setIndex(id);
            setModal(true);
        dispatch(addView(id));
     }
     const handleFavorite = (id, e) =>  {
         e.stopPropagation();
         dispatch(toggleLike(id));
     }
     const handleRemove = (id, e) => {
          e.stopPropagation();
          dispatch(removeView(id));
          dispatch(toggleLike(id));
     }
    
const { listLike, listCourse } = useSelector((state) => state.useFavorite);

  const  productSuggestions = products.filter((product) => 
            listLike.includes(product.id) || listCourse.includes(product.id)
 )
    return (
        <div className="mt-6">
        <button
            onClick={() => setShowSuggestions(pre => !pre)}
            className="
                mb-4
              bg-indigo-600
              hover:bg-indigo-700
              text-white px-4 py-2 
                rounded-lg
            "
        >  
           <FontAwesomeIcon icon={faLightbulb} />  Gợi ý sản phẩm
        </button>

        {
         showSuggestions && (
                <div> 
                    <button
                          onClick={() => setShowSuggestions(false)}
                         className="mb-4 bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded ml-3"
                        
                    >

                         <FontAwesomeIcon icon={faXmark} style={{color: "#eb0017",}} />    Ẩn gợi ý 
                    </button>
                        <h2 className="text-lg font-semibold text-indigo-700 mt-4 mb-2">
                         Các sản phẩm gợi ý:
                         </h2>
                        {
                              productSuggestions.length === 0 ? (
                                      <p className="text-gray-500 mb-4">
                                                    Chưa có sản phẩm nào được xem hoặc yêu thích 
                                      </p>

                            ) : (
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">   
                                            {
                                                productSuggestions.map((product) => (
                                                    <div
                                                        key={product.id}
                                                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition relative cursor-pointer"
                                                        onClick={() => handleClick(product.id)}
                                                    >
                                                    <button
                                                        className="
                                                            absolute top-1
                                                            right-1
                                                            text-xs
                                                          bg-red-100 text-red-600
                                                            rounded-full px-2 py-1  hover:bg-red-200
                                                        "
                                                        onClick={(e) => handleRemove(product.id,e)}
                                                        title='Xóa khỏi gợi ý '
                                                    >

                                                <FontAwesomeIcon icon={faXmark} style={{color: "#eb0017",}} />

                                                    </button>
                                                        <img src={product.image} alt={product.name}   className="w-full h-40 object-cover" />

                                                        <div className="p-4"> 
                                                                   <h3 className="font-semibold text-lg">  {product.name}   </h3>
                                                                    <p className="text-sm text-gray-600">  {product.shortDesc}  </p>
                                                                      <p className="text-indigo-600 font-bold mt-2">
                                                                           Giá: {product.price.toLocaleString()}đ
                                                                      </p>
                                                         </div>
                                                         <div className="absolute bottom-0 right-0 pr-4 pb-4 text-red-500 font-bold">
                                                                     Xem chi tiết
                                                         </div>

                                                    </div>
                                                ))
                                            }

                                      </div>
                            )
                        }

                </div>
         )
        }
        {
            !showSuggestions && (
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {products.map((item) => (
                            <div
                                key={item.id}
                                 className="
                                    bg-white shadow-md
                                      rounded-lg overflow-hidden
                                      hover:shadow-xl
                                      transition relative
                                       cursor-pointer"
                                 onClick={() => handleClick(item.id)}
                            >
                                <button
                                    className="absolute
                                               top-1 right-1
                                               text-2xl text-gray-300
                                              hover:text-red-500 transition"
                                    onClick={(e) => handleFavorite(item.id, e)}
                                    >  
                                     <FontAwesomeIcon
                                         icon={faHeart}
                                         style={{ color: listLike.includes(item.id) ? 'red' : 'blue' }} 
                                         className='h-6'
                                     />
                                
                                </button>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-40 object-cover"
                                />
 <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.shortDesc}</p>
                <p className="text-indigo-600 font-bold mt-2">
                  Giá: {item.price.toLocaleString()}đ
                </p>
              </div>
              <div className="
                    absolute bottom-0 right-0
                     p-2 text-black-500
                    font-bold bg-orange-600 text-[12px]
                "
                >
                    Xem chi tiết
              </div>

                            </div>
                        ))}

                     </div>
            )
        }
        {
            modal && (
                <ProductDetailModal
                        isOpen={modal}
                        onClose={() => setModal(false)}
                        course={course}
                        loading={loading}
                    />


            )
        }

            
        </div>
    );
}

export default ProductList;