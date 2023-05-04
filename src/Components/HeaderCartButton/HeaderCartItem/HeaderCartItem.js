import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import './HeaderCartItem.css';

const HeaderCartItem = () => {
  return (
      <>
          <li id="basket-163168-187387">
              <div className="item">
                  <div className="image">
                      <img src="https://janebi.com/janebi/9fd2/files/thumb/253877.jpg" alt="" />
                  </div>
                  <div className="details">
                      <div className="details-top">
                          <div className="title">هندزفری جک 3.5 میلیمتری akg سامسونگ Samsung EO-IG955 AKG Earphone (مشکی | های‌کپی A++ | ساخت ویتنام)</div>
                          <a className="btn btn-delete" title="حذف" data-delete="163168-187387" >
                              <DeleteOutlined />
                          </a>
                      </div>
                      <div className="price_variant">
                          <span className="number-buy">
                              <span>1 عدد</span>
                              <span className="item-color">رنگ</span>
                          </span>
                          <span className="price-buy">398,000 <span>تومان</span></span>
                      </div>
                  </div>
              </div>
          </li>
      </>
  )
}

export default HeaderCartItem