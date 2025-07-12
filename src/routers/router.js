import Home from "../page/home/home";
import ViewProduct from "../page/viewed-products/viewed-products";
import FavoriteProduct from "../page/favorite-products/favorite-products";

const routers = [
     {
        id: 0, path: "/", element: Home
     },
     {
         id: 1, path: "/Favorite",  element: FavoriteProduct
     },
     {
        id: 2, path: "/History", element: ViewProduct
     }
]

export default routers;