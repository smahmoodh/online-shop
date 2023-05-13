import React, { useEffect, useState } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';

import './Product.css';

const ProductDesktopView = React.lazy(() => import('./Des/ProductDesktopView'));
const ProductMobileView = React.lazy(() => import('./Mob/ProductMobileView'));

const Product = () => {
    const location = useLocation();
    const [product, setProduct] = useState();
    const [relatedProducts, setRelatedProducts] = useState();
    let address = '';
    let hasRelated = false;

    const fetchData = async (address) => {
        const response = await fetch(
            `https://json.xstack.ir/api/v1${address}`
        );
        const data = await response.json();
        console.log(data);
        setProduct(data);
        fetchRelatedProducts(data.category.slug);
    }
    const fetchRelatedProducts = async (address) => {
        const response = await fetch(
            `https://json.xstack.ir/api/v1/category/${address}?limit=15`
        );
        const data = await response.json();
        console.log(data);
        if (data[0].products.length)
            hasRelated = true;
        setRelatedProducts(data[0].products);

    }
    useEffect(() => {
        address = location.pathname;
        console.log(address);
        fetchData(address);
    }, []);




    if (product === undefined || relatedProducts === undefined) {
        console.log(product === undefined && relatedProducts === undefined);
        return <div>Loading ...</div>
    }
    return (
        <>
            <React.Suspense fallback={<></>}>
                {(isBrowser) && <ProductDesktopView product={product} relatedProducts={relatedProducts} />}
                {(isMobile) && <ProductMobileView product={product} relatedProducts={relatedProducts} />}
            </React.Suspense>
            {/* <BrowserView>
                <ProductDesktopView product={product} relatedProducts={relatedProducts} />
            </BrowserView>
            <MobileView>
                <ProductMobileView product={product} relatedProducts={relatedProducts} />
            </MobileView> */}
        </>
    )
}

export default Product