import React, { useEffect, useState } from "react";
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './HeaderCategoryMenu.css';

const HeaderCategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const [tmpcategories, settmpCategories] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://json.xstack.ir/api/v1/categories");
        const data = await response.json();
        console.log(data);
        makeCategoryTree(data.data);
        settmpCategories(data.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const makeCategoryTree = (categoryList) => {
        console.log("makeCategoryTree");
        console.log(categoryList);
        let catList = [];
        categoryList.length > 0 && (
            categoryList.map((category) => {
                if (category.parent_id === null) {

                    category.children = [];
                    category.hasSub = false;
                    catList.push(category);
                } else {
                    let upd_obj = categoryList.findIndex((obj => obj.id == category.parent_id));
                    catList[upd_obj].hasSub = true;
                    catList[upd_obj].children.push(category);
                }
            })
        )
        console.log(catList);
        setCategories(catList);
        
    }

    const makeMenu = (catList) => {
        console.log("makeMenu");
        let res = catList.map(cat => {
            <p>{cat.name}</p>
        }); 
        return res; 
    }

    if (categories.length == 0) {
        return <div>Loading...</div>;
    }
    return (

        <>
            {categories.length > 0 && (
                <ul className="menu-2 menu-custom menu-2 mega three-level" id="menu_header">
                    {categories.map(category => (
                        <li className={` ${category.hasSub ? 'deep-3' : ''}`} key={category.id}>
                            <Link title={category.slug} className="page_1 sf-with-ul" to={`/category/${category.slug}`}>
                                {category.name}
                                <DownOutlined />
                            </Link>
                            {category.hasSub ?
                                    category.children.length > 0 && (
                                    <ul>
                                        <div className="ul-title">
                                            <span className="link-title"> {category.name}</span>
                                            <Link to={`/category/${category.slug}`} className="more-items">
                                                مشاهده همه محصولات {category.name}
                                                <LeftOutlined />
                                            </Link>
                                        </div>
                                        <li>
                                            <a title="دسته بندی محصولات" className="page_11" href="#">دسته بندی محصولات</a>
                                            <ul>
                                                {category.children.map(subCategory => 
                                                    <li key={subCategory.id}>
                                                        <Link title={subCategory.slug} className="page_14" to={`/category/${subCategory.slug}`}>{subCategory.name}</Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </li>
                                        </ul>
                                    )
                                    :
                                    ''
                            }
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default HeaderCategoryMenu