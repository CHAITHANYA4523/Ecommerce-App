import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer"to={`/product/${id}`}>
        <div className="overflow-hidden">
          {image && image.length > 0 ? (
            <img
                className="hover:scale-110 transition ease-in-out"
                src={image[0]}
                alt={name}
            />
        ) : (
            <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span>No Image</span>
            </div>
        )}
        </div>
        <p className="pt-3 text-sm">{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
