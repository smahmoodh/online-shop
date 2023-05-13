import React, { useState } from 'react'
import { Drawer, Form, Input, Slider, Space, Switch } from 'antd'
import { FilterOutlined, SwapOutlined } from '@ant-design/icons'

import './FilterBox.css'

const FilterBox = ({ cssClass, onClose, open, sliderMinValue, sliderMaxValue }) => {
    const [inputMaxValue, setInputMaxValue] = useState(sliderMaxValue);
    const [inputMinValue, setInputMinValue] = useState(sliderMinValue);
    const onChange = (newValue) => {
        console.log(newValue);
        setInputMinValue(newValue[0]);
        setInputMaxValue(newValue[1]);
    };
    return (
        <Drawer title="فیلتر کردن" zIndex={1002} className={cssClass} placement="right" onClose={onClose} open={open} getContainer={'#root'}>
            <div id='filter_htmlForm'>

                <Form action='' id='filter_products' className='filter_products'>
                    <div className='filter-box' id='filter_range'>
                        <div className='filter_area' data-filter='price'>
                            <label className='filter-label' htmlFor='price_range'>محدوده قیمت مورد نظر</label>
                            <div className='' >
                                <Slider
                                    range={{
                                        draggableTrack: true,
                                    }}
                                    min={sliderMinValue}
                                    max={sliderMaxValue}
                                    reverse={true}
                                    step={1000}
                                    onChange={onChange}
                                    defaultValue={[sliderMinValue, sliderMaxValue]}
                                />
                                <Space.Compact className='values-box' block>
                                    <Input value={inputMaxValue} className='max-value' />
                                    <span className='swap-icon'>
                                        <SwapOutlined />
                                    </span>
                                    <Input value={inputMinValue} className='min-value' />
                                </Space.Compact>
                            </div>
                        </div>
                    </div>
                    <div className='filter-box' id='filter_special'>
                        <div className='clearfix filter_area' data-filter='special'>
                            <span className='toggle-slide-area'>
                                <span className='toggles toggle-light' style={{ height: '22px', width: '70px' }}>
                                    <div className='toggle-slide'>
                                        <div className='toggle-inner' style={{ width: '118px', marginLeft: '-48px' }}>
                                            <Switch checkedChildren="بله" unCheckedChildren="خیر" />
                                        </div>
                                    </div>
                                </span>
                            </span>
                            <label className='filter-label-inline inline' htmlFor='special'>فقط آیتم‌های ویژه</label>
                        </div>
                    </div>

                </Form>


                <div className='area-filter-btn'>
                    <a className='btn btn-lg btn-custom btn-block btn-filter'>
                        <FilterOutlined />
                        اعمال فیلتر
                    </a>
                </div>
            </div>
        </Drawer>
    )
}

export default FilterBox