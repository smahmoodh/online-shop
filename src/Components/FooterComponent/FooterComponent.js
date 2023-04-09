import React from 'react';
import { Col, Row, Slider } from 'antd';
import MenuItems from '../MenuItems/MenuItems';
import MenuItem from '../MenuItems/MenuItem/MenuItem';

const FooterComponent = () => {
  return (
      <div>
          <Row gutter={[16, 48]}>
              <Col span={6}>
                  <MenuItems>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                  </MenuItems>
              </Col>
              <Col span={6}>
                  <MenuItems>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                  </MenuItems>
              </Col>
              <Col span={6}>
                  <MenuItems>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                  </MenuItems>
              </Col>
              <Col span={6}>
                  <MenuItems>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                      <MenuItem link='/' title="صفحه اصلی" >
                          صفحه اصلی
                      </MenuItem>
                  </MenuItems>
              </Col>
          </Row>
    </div>
  )
}

export default FooterComponent