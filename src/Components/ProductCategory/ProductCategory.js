import React, { useState, useEffect } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Col, Row, Pagination, Button, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { handleClickScroll } from '../../Utils/utilities';

import './ProductCategory.css';
import ProductFilterBox from '../ProductFilterBox/ProductFilterBox';
import ProductItem from '../ProductItem/ProductItem';

const ProductCategory = () => {
    
    const [params, setParams] = useState(null);
    const [sort, setSort] = useState('view');
    const [limit, setLimit] = useState(24);
    const [sortType, setSortType] = useState('desc');
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(24);
    const [perPage, setPerPage] = useState(24);
    let totalProducts = 0;
    let address = '';
    let page = 1;
    const location = useLocation();

    const fetchData = async (address = '', sort, limit, sortType, page) => {
        console.log("sort" + sort);
        console.log("limit" + limit);
        console.log("sortType" + sortType);

        // const response = await fetch(`https://json.xstack.ir/api/v1/products?limit=${limit}&sort=${sort}&sortType=${sortType}&page=${page}`);
        // const data = await response.json();
        // console.log(data);
        // setPerPage(data.per_page);
        // setTotal(data.total_pages * data.per_page);
        // totalProducts = (data.total_pages * data.per_page);
        // setProducts(data)
        
        
        // const response = await fetch(`https://json.xstack.ir/api/v1${address}?limit=${limit}&sort=${sort}&sortType=${sortType}&page=${page}`);
        // const data = await response.json();

        const response = await fetch(
            `https://json.xstack.ir/api/v1${address}?limit=${limit}&sort=${sort}&sortType=${sortType}&page=${page}`
        ).then((response) => response.json())
            .then(data => {
                console.log(data);
                setProducts(data[0].products)
                console.log(data[0].products);
                setPerPage(perPage);
                setTotal(data[0].products.length);
                totalProducts = (data[0].products.length);

                
            });
                
        
        // setProducts(data.data.filter(category => category.category_id === 4) )
    }

    useEffect(() => {
        address = location.pathname;
        fetchData(address, sort, limit, sortType, page);
    }, []);
    useEffect(() => {
        console.log('Location changed');
        address = location.pathname;
        fetchData(address, sort, limit, sortType, page);

    }, [location]);

    const onChange = (page) => {
        console.log(page);
        fetchData(address, sort, limit, sortType, page);
        handleClickScroll();
    };

    const changeSort = (sortModel) => {
        console.log('changeSort');
        switch (sortModel) {
            case 'new':
                console.log('changeSort new');
                setSort('new');
                fetchData(address, sortModel, limit, sortType, 1);
                break;
            case 'view':
                console.log('changeSort view');
                setSort('view');
                fetchData(address, sortModel, limit, sortType, 1);
                break;
            case 'popular':
                console.log('changeSort popular');
                setSort('view');
                fetchData(address, sortModel, limit, sortType, 1);
                break;
            case 'sell_count':
                console.log('changeSort sale');
                setSort('sell_count');
                fetchData(address, sortModel, limit, sortType, 1);
                break;
            case 'lowprice':
                console.log('changeSort sale');
                setSort('peice');
                setSortType('asc');
                fetchData(address, sortModel, limit, sortType, 1);
                break;
            case 'highprice':
                console.log('changeSort sale');
                setSort('peice');
                setSortType('desc');
                fetchData(address, sortModel, limit, sortType, 1);
                break;

        }
    }

    const changeLimit = (limitCount) => {
        setLimit(limitCount);
        fetchData(address, sort, limitCount, sortType, 1);
    }

    return (
        <>
            

            <div className='sides'>
                <div className='side_top'>
                    <div className="breadcrumbs clearfix">
                        <LeftOutlined />
                        <Link to="/" dideo-checked="true">جانبی</Link>
                        <LeftOutlined />
                        <Link to="/mobile-accessories" dideo-checked="true">لوازم جانبی موبایل</Link>
                    </div>
                </div>
                <Row>
                    <Col
                        id='side_right'
                        xs={6} lg={6} pull-lg={18} pull-xs={18} pull-ms={0}
                    >
                        <ProductFilterBox />
                    </Col >
                    <Col
                        id='side_center'
                        xs={18} lg={18} push-lg={6} push-xs={6} push-ms={0}
                    >
                        <div id='box_products' className='box'>
                            <div className='content  header-box '>
                                <div className="header clearfix">
                                    <div className="title">
                                        <h1>لوازم جانبی موبایل</h1>
                                    </div>
                                </div>
                                <div className='body clearfix'>
                                    <div className="filter_items clearfix form-inline">
                                        <div className="filter-title">
                                            <Space wrap className="btn-sorts">
                                                <Button type="link" className={`${sort === 'new' ? 'btn-default':''}`} onClick={() => changeSort('new')}>جدیدترین ها</Button>
                                                <Button type="link" className={`${sort === 'view' ? 'btn-default' : ''}`} onClick={() => changeSort('view')}>پربازدیدترین ها</Button>
                                                <Button type="link" className={`${sort === 'popular' ? 'btn-default' : ''}`} onClick={() => changeSort('popular')}>محبوب‌‌ترین</Button>
                                                <Button type="link" className={`${sort === 'sell_count' ? 'btn-default' : ''}`} onClick={() => changeSort('sell_count')}>پرفروش‌ترین</Button>
                                                <Button type="link" className={`${sort === 'price' && sortType ==='asc' ? 'btn-default':''}`} onClick={() => changeSort('lowprice')}>ارزان‌ترین</Button>
                                                <Button type="link" className={`${sort === 'price' && sortType === 'desc' ? 'btn-default':''}`} onClick={() => changeSort('highprice')}>گران‌ترین</Button>
                                            </Space>
                                        </div>
                                        <div className="filter-number">
                                            <span className="float-left">
                                                تعداد نمایش
                                                <Space size={0}>
                                                    <Button type="link" className={`${limit === 12 ? 'btn-default' : ''}`} onClick={() => changeLimit(12)}>12</Button>
                                                    <Button type="link" className={`${limit === 24 ? 'btn-default' : ''}`} onClick={() => changeLimit(24)}>24</Button>
                                                    <Button type="link" className={`${limit === 48 ? 'btn-default' : ''}`} onClick={() => changeLimit(48)}>48</Button>
                                                </Space>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="products">
                                        {products.length > 0 && (
                                            <Row className='products items clearfix mode-1'>

                                                {products.map(product => (
                                                    <Col className='price_on'
                                                        xs={24} sm={12} md={8} lg={8} xl={6}
                                                        key={product.id}
                                                    >
                                                        <ProductItem product={product} />
                                                    </Col>
                                                ))
                                                }

                                            </Row>
                                        )}
                                    </div>
                                </div>
                                <div className="pageslist">
                                    <Pagination defaultCurrent={1} total={total} pageSize={perPage} onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row >
                
            </div >
        </>
    )
}

export default ProductCategory