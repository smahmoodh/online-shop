import React from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import './ProductItem.css'

const ProductItemDesktopView = React.lazy(() => import('./Des/ProductItemDesktopView'));
const ProductItemMobileView = React.lazy(() => import('./Mob/ProductItemMobileView'));


const ProductItem = ({ product, slider }) => {

    return (
        <>
            <React.Suspense fallback={<></>}>
                {(isBrowser) && <ProductItemDesktopView product={product} />}
                {(isMobile) && <ProductItemMobileView product={product} />}
            </React.Suspense>
        </>
    )
}


export default ProductItem