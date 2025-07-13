import Home from "../page/home/home";
import ViewProduct from "../page/viewed-products/viewed-products";
import FavoriteProduct from "../page/favorite-products/favorite-products";
import Cart from "../page/cart/cart";
const routers = [
     {
        id: 0, path: "/", element: Home
     },
     {
         id: 1, path: "/Favorite",  element: FavoriteProduct
     },
     {
        id: 2, path: "/History", element: ViewProduct
     },
     {
       id: 3, path: "/Cart" , element: Cart
     }
]

export default routers;