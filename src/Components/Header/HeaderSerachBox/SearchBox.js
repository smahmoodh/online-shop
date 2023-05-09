import React from "react";
import { Button, Form, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './SearchBox.css';

const onSearch = (value) => console.log(value);

const SearchBox = () => {
    return (
        <div className="search-area">
            <Form method="get" action="/" className="search-form clearfix ">
                <Space.Compact className="input-group" size="large">
                    <Input placeholder="دنبال چه لوازمی هستید؟" />
                    <span className="input-group-prepend">
                        <Button type="primary" className='search_button' danger onClick={onSearch}>
                            <SearchOutlined />
                        </Button>
                    </span>
                </Space.Compact>
            </Form>
        </div>
    )
}

export default SearchBox;