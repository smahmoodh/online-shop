import React from 'react';
import './ProductFilterBox.css';

const ProductFilterBox = () => {
    return (
        <div className="box" id="box_filter">
            <div className="block">
                <div className="header">
                    <span>فیلتر</span>
                </div>
                <div className="body">
                    <form action="https://janebi.com/mobile-accessories" method="GET" id="filter_products" className="filter_products">
                        <div className="filter-box" id="filter_brand">
                            <label className="filter-label" htmlFor="brand_id">برند</label>
                            <input style={{ marginBottom: '10px' }} placeholder="جستجو در برند ها ..." id="searchBrand" className="form-control" type="text" />
                            <div className="brands_list">
                                <ul className="checkboxes">
                                    <li>
                                        <label htmlFor="field_brand_id_0">
                                            <input id="field_brand_id_0" type="checkbox" name="brand_id[]" value="830" />
                                            نیلکین <span>Nillkin</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="field_brand_id_1">
                                            <input id="field_brand_id_1" type="checkbox" name="brand_id[]" value="3346" />
                                            سی‌جی موبایل <span>CG MOBILE</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="field_brand_id_206">
                                            <input id="field_brand_id_206" type="checkbox" name="brand_id[]" value="3324" />
                                            یونیک لیفرو <span>UNIQ LYFRO</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                        </div>
                        <div className="filter-box" id="filter_range">
                            <div className="filter_area" data-filter="price">
                                <label className="filter-label show-ul" htmlFor="price_range">محدوده قیمت مورد نظر</label>
                                <div className="">

                                </div>
                                <br />
                                <div className="input-group">
                                    <input type="number" id="max" name="max" step="1000" value="10931000" className="form-control" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-arrows-h"></i>
                                        </span>
                                    </div>
                                    <input type="number" id="min" name="min" step="1000" value="250" className="form-control" />
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="filter-box" id="filter_status">
                            <div className="clearfix filter_area" data-filter="status">

                                <label className="filter-label-inline inline" htmlFor="status">فقط آیتم‌های موجود</label>
                            </div>
                            <hr />
                        </div>
                        <div className="filter-box" id="filter_off">
                            <div className="clearfix filter_area" data-filter="off">

                                <label className="filter-label-inline inline" htmlFor="off">فقط آیتم‌های تخفیف دار</label>
                            </div>
                            <hr />
                        </div>
                        <div className="filter-box" id="filter_special">
                            <div className="clearfix filter_area" data-filter="special">

                                <label className="filter-label-inline inline" htmlFor="special">فقط آیتم‌های ویژه</label>
                            </div>
                            <hr />
                        </div>
                        <input type="hidden" id="brands" name="brands" value="" />
                        <input type="hidden" id="limit" name="limit" value="48" />
                        <input type="hidden" id="page" name="page" value="1" />
                        <input type="hidden" id="sort" name="sort" value="hit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductFilterBox