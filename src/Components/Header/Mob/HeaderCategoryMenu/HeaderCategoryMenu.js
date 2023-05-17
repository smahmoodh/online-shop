import React, { useEffect, useState } from "react";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './HeaderCategoryMenu.css';

const HeaderCategoryMenu = ({onClose}) => {


    const fetchData = async () => {
        const response = await fetch("https://json.xstack.ir/api/v1/categories");
        const data = await response.json();
        console.log(data);
        // makeCategoryTree(data.data);
    }

    useEffect(() => {
        fetchData()
    }, [])
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
    const items = [
        getItem('کالای دیجیتال', 'sub1', null, [
            getItem(<Link to='/category/goshy-mobayl'>گوشی موبایل</Link>, '1'),
            getItem(<Link to='/category/tblt'>تبلت</Link>, '2'),
            getItem(<Link to='/category/lptap'>لپتاپ</Link>, '3'),
            getItem(<Link to='/category/kampyotr-shkhsy'>کامپیوتر شخصی</Link>, '4'),
        ]),
        getItem('لباس', 'sub2', null, [
            getItem(<Link to='/category/pyrahn-mrdanh'>پیراهن مردانه</Link>, '5'),
            getItem(<Link to='/category/shloar-mrdanh'>شلوار مردانه</Link>, '6'),
            getItem(<Link to='/category/lbas-bchh-ganh'>لباس بچه گانه</Link>, '7'),
        ]),
        getItem('کیف و کفش', 'sub3', null, [
            getItem(<Link to='/category/kyf-znanh'>کیف زنانه</Link>, '8'),
            getItem(<Link to='/category/kfsh-znanh'>کفش زنانه</Link>, '9'),
            getItem(<Link to='/category/kyf-mrdanh'>کیف مردانه</Link>, '10'),
            getItem(<Link to='/category/kfsh-mrdanh'>کفش مردانه</Link>, '11'),
        ]),
    ];
    

    const makeCategoryTree = (categoryList) => {
        console.log("makeCategoryTree");
        console.log(categoryList);
        let catList = [];
        let i = 1,j = 1;
        categoryList.length > 0 && (
            categoryList.map((category, index) => {
                if (category.parent_id === null) {
                    rootSubmenuKeys.push('sub'+(index+1))
                    let item = {};
                    console.log('cat' + index + 1);
                    item.key = 'sub' + (index + 1);
                    item.icon = null;
                    item.label = category.name;
                    item.type = undefined;
                    j++;
                    item.children = [];
                    catList.push(item);
                } else {
                    let upd_obj = categoryList.findIndex((obj => obj.id == category.parent_id));
                    
                    let item = {};
                    item.key = `${i}`;
                    item.icon = undefined;
                    item.label = category.name;
                    item.type = undefined;
                    item.children = undefined;
                    i++;
                    // catList[upd_obj].hasSub = true;
                    catList[upd_obj].children.push(item);
                }
            })
        )
        // makeMenuItems(catList);
        
        items = [...catList]
        console.log("/+/+/+/+/+/+/+/+/+/+/+/+");
        console.log(catList);
        console.log(items);
        console.log("/+/+/+/+/+/+/+/+/+/+/+/+");
        // setItems(catList);

    }
    

        const [openKeys, setOpenKeys] = useState(['sub1']);
        const onOpenChange = (keys) => {
            const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
            if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                setOpenKeys(keys);
            } else {
                setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
            }
    };
    const onClick = (e) => {
        console.log('click ', e);
    };
    // if (!loading) {
    //     return <div>Loading...</div>;
    // }
    return (

        <>
            <Menu
                mode="inline"
                onOpenChange={onOpenChange}
                onClick={onClose}
                items={items}
            />
            
        </>
    )
}

export default HeaderCategoryMenu