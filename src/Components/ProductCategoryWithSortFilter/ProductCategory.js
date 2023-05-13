import React, { useState, useEffect } from 'react';
import { isBrowser, isMobile } from 'react-device-detect';
import { handleClickScroll } from '../../Utils/utilities';

import './ProductCategory.css';

const ProductCategoryDesktopView = React.lazy(() => import('./Des/ProductCategoryDesktopView'));
const ProductCategoryMobileView = React.lazy(() => import('./Mob/ProductCategoryMobileView'));

const ProductCategory = () => {

    const [sort, setSort] = useState('view');
    const [limit, setLimit] = useState(24);
    const [sortType, setSortType] = useState('desc');
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(24);
    const [perPage, setPerPage] = useState(24);
    let totalProducts = 0;
    let page = 1;

    const fetchData = async (sort, limit, sortType, page) => {
        console.log("sort" + sort);
        console.log("limit" + limit);
        console.log("sortType" + sortType);
        const response = await fetch(`https://json.xstack.ir/api/v1/products?limit=${limit}&sort=${sort}&sortType=${sortType}&page=${page}`)
        const data = await response.json();
        console.log(data);
        setPerPage(data.per_page);
        setTotal(data.total_pages * data.per_page);
        totalProducts = (data.total_pages * data.per_page);
        setProducts(data)
        // setProducts(data.data.filter(category => category.category_id === 4) )
    }

    useEffect(() => {

        fetchData(sort, limit, sortType, page);
    }, []);

    const onChange = (page) => {
        console.log(page);
        fetchData(sort, limit, sortType, page);
        handleClickScroll();
    };

    const changeSort = (sortModel) => {
        console.log('changeSort');
        switch (sortModel) {
            case 'new':
                console.log('changeSort new');
                setSort('new');
                fetchData(sortModel, limit, sortType, 1);
                break;
            case 'view':
                console.log('changeSort view');
                setSort('view');
                fetchData(sortModel, limit, sortType, 1);
                break;
            case 'popular':
                console.log('changeSort popular');
                setSort('view');
                fetchData(sortModel, limit, sortType, 1);
                break;
            case 'sell_count':
                console.log('changeSort sale');
                setSort('sell_count');
                fetchData(sortModel, limit, sortType, 1);
                break;
            case 'lowprice':
                console.log('changeSort sale');
                setSort('peice');
                setSortType('asc');
                fetchData(sortModel, limit, sortType, 1);
                break;
            case 'highprice':
                console.log('changeSort sale');
                setSort('peice');
                setSortType('desc');
                fetchData(sortModel, limit, sortType, 1);
                break;

        }
    }

    const changeLimit = (limitCount) => {
        setLimit(limitCount);
        fetchData(sort, limitCount, sortType, 1);
    }

    return (
        <>
            <React.Suspense fallback={<></>}>
                {(isBrowser) && <ProductCategoryDesktopView products={products} changeLimit={changeLimit} changeSort={changeSort} onChange={onChange} total={total} perPage={perPage} limit={limit} sort={sort} sortType={sortType} />}
                {(isMobile) && <ProductCategoryMobileView products={products} changeLimit={changeLimit} changeSort={changeSort} onChange={onChange} total={total} perPage={perPage} />}
            </React.Suspense>
        </>
    )
}

export default ProductCategory