import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Col, Row, Pagination, Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import ProductFilterBox from '../../ProductFilterBox/ProductFilterBox';
import ProductItem from '../../ProductItem/ProductItem';

import './ProductCategoryDesktopView.css';


const ProductCategoryDesktopView = ({ products, changeLimit, changeSort, onChange, total, perPage, limit, sort, sortType }) => {

    const handleChangeLimit = (value) => {
        changeLimit(value);
    };
    const handleChangeSort = (value) => {
        changeSort(value);
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
                                                <Button type="link" disabled className={`${sort === 'new' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('new')}>جدیدترین ها</Button>
                                                <Button type="link" className={`${sort === 'view' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('view')}>پربازدیدترین ها</Button>
                                                <Button type="link" disabled className={`${sort === 'popular' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('popular')}>محبوب‌‌ترین</Button>
                                                <Button type="link" className={`${sort === 'sell_count' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('sell_count')}>پرفروش‌ترین</Button>
                                                <Button type="link" disabled className={`${sort === 'price' && sortType === 'asc' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('lowprice')}>ارزان‌ترین</Button>
                                                <Button type="link" disabled className={`${sort === 'price' && sortType === 'desc' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('highprice')}>گران‌ترین</Button>
                                            </Space>
                                        </div>
                                        <div className="filter-number">
                                            <span className="float-left">
                                                تعداد نمایش
                                                <Space size={0}>
                                                    <Button type="link" className={`${limit === 12 ? 'btn-default' : ''}`} onClick={() => handleChangeLimit(12)}>12</Button>
                                                    <Button type="link" className={`${limit === 24 ? 'btn-default' : ''}`} onClick={() => handleChangeLimit(24)}>24</Button>
                                                    <Button type="link" className={`${limit === 48 ? 'btn-default' : ''}`} onClick={() => handleChangeLimit(48)}>48</Button>
                                                </Space>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="products">
                                        {products.count > 0 && (
                                            <Row className='products items clearfix mode-1'>

                                                {products.data.map(product => (
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

export default ProductCategoryDesktopView