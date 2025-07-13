import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeCart } from '../../features/cart/cart-slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function Cart() {

    let getItem = useSelector((state) => state.cart.items);
    console.log("dữ liệu nhân được là " + getItem); 
    const dispatch = useDispatch();
    return (
        <div className="p-4 max-w-3xl mx-auto min-h-[1000px]">
            <h2 className="
                    text-2xl
               font-bold
               mb-4 text-indigo-700">

                Giỏ hàng của bạn 

            
               </h2>
                

      {getItem.length === 0 ? (
        <p className="text-gray-500">Chưa có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <ul className="space-y-4">

          {getItem.map((item) => (
            <li
              key={item.id}
              className="
                flex items-center 
                justify-between bg-white shadow-md rounded-lg p-4"
            >
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="
                        text-sm
                      text-gray-600">{item.shortDesc}</p>
                <p className="text-indigo-600 font-bold mt-1">
                {console.log(item.price.toLocaleString())}
                  Giá: {item.price.toLocaleString()}đ
                </p>
              </div>
              <button
                onClick={() => dispatch(removeCart(item.id))}
                className="text-red-500 hover:text-red-700 text-xl"
                title="Xóa khỏi giỏ hàng"
              >

                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}

        </div>
    );
}

export default Cart;