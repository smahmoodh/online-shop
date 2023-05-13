import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Pagination, Button, Breadcrumb, Select, Space } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import FilterBox from './FilterBox/FilterBox'

import './ProductCategoryMobileView.css'
import ProductItem from '../../ProductItem/ProductItem';


const ProductCategoryMobileView = ({ products, changeLimit, changeSort, onChange, total, perPage }) => {

    const handleChangeLimit = (value) => {
        changeLimit(value);
    };
    const handleChangeSort = (value) => { 
        changeSort(value);
    }
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
  return (
      <>
          <div id='slide_top'>
              <div className="box breadcrumbs clearfix">
                  <Breadcrumb
                      separator=">"
                      items={[
                      {
                          title: 'صفحه اصلی',
                      },
                      {
                          title: <Link to="/mobile-accessories">لوازم جانبی موبایل</Link>,
                      },
                  ]} />
              </div>
          </div>
          <div id='slide_center'>
              <div className='box' id='box_products'>
                  <div className='content'>
                      <div className='header clearfix'>
                          <div className='title'>
                              <h1>پاور بانک (شارژر همراه)</h1>
                          </div>
                      </div>
                      <div className='body clearfix'>
                          <div className='filter_items clearfix form-inline'>
                              <div className='filter-title'>
                                  ترتیب
                                  <Space wrap>
                                      <Select
                                          name="select_sort" id="select_sort"
                                          defaultValue="new"
                                          onChange={handleChangeSort}
                                          options={[
                                              {
                                                  value: 'new',
                                                  label: 'جدیدترین ها',
                                              },
                                              {
                                                  value: 'view',
                                                  label: 'پربازدیدترین ها',
                                              },
                                              {
                                                  value: 'popular',
                                                  label: 'محبوب‌‌ترین',
                                              },
                                              {
                                                  value: 'sell_count',
                                                  label: 'پرفروش‌ترین',
                                              },
                                              {
                                                  value: 'lowprice',
                                                  label: 'ارزان‌ترین',
                                              },
                                              {
                                                  value: 'highprice',
                                                  label: 'گران‌ترین',
                                              },
                                          ]}
                                      />
                                  </Space>
                              </div>
                              <div className='filter-number'>
                                  تعداد نمایش
                                  <Space wrap>
                                      <Select
                                          name="select_limit" id="select_limit"
                                          defaultValue="24"
                                          onChange={handleChangeLimit}
                                          options={[
                                              {
                                                  value: '12',
                                                  label: '12',
                                              },
                                              {
                                                  value: '24',
                                                  label: '24',
                                              },
                                              {
                                                  value: '48',
                                                  label: '48',
                                              },
                                          ]}
                                      />
                                  </Space>
                              </div>
                              <div className='filter-mobile-btn' onClick={showDrawer}>
                                  فیلتر
                                  <a className=" btn-lg btn-light btn-block btn-filter">
                                      <FilterOutlined />
                                  </a>
                                  
                              </div>
                          </div>
                          <div id="products">
                              {products.count > 0 && (
                                  <section className='products items clearfix  mode-1'>
                                      {products.data.map(product => (
                                          <div className='price_on'>
                                              <ProductItem product={product} />
                                          </div>
                                      ))
                                      }
                                  </section>
                              )}
                          </div>
                          <div class="pageslist">
                              <Pagination defaultCurrent={1} total={total} pageSize={perPage} onChange={onChange} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id='slide_bottom'>
              
          </div>
          <FilterBox id="filter_form" cssClass='filter_form' onClose={onClose} open={open} sliderMinValue={1} sliderMaxValue={50000000} />
      </>
  )
}

export default ProductCategoryMobileView