import './searchBox.css';
import React from "react";
import { Button, Input, Space } from 'antd';
import {
    SearchOutlined
} from '@ant-design/icons';

const onSearch = (value) => console.log(value);

const SearchBox = () => {
    return (
        <div className="search-box">
            <Space.Compact size="large" style={{ width: '100%' }}>
                <Input defaultValue="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…"  style={{ width: '70%' }} />
                <Button type="primary" danger onClick={onSearch}>
                    <SearchOutlined />
                </Button>
            </Space.Compact>
        </div>
    )
}

export default SearchBox;