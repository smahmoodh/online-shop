import React, { useEffect, useState } from 'react';
import { Col, Row, Image, Form, Select, InputNumber, Button, Tabs, Input, Rate, Table } from 'antd';
import { CommentOutlined, CopyOutlined, HeartOutlined, LeftOutlined, MessageOutlined, OrderedListOutlined, ProfileOutlined, ShareAltOutlined, ShoppingOutlined, StarFilled, UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { seperatNumber, calcDiscount } from '../../../Utils/utilities';
import ProductsSwiperList from '../../ProductsSwiperList/ProductsSwiperList';

import './ProductMobileView.css';
import guarantyImg from '../../../Assets/img/guaranty.svg';
import cartReturnImg from '../../../Assets/img/cart-return.svg';
import deliveryFastImg from '../../../Assets/img/delivery-fast.svg';
import paymentImg from '../../../Assets/img/payment.svg';
import brand from '../../../Assets/img/samsung.png';
import ProductCommentItems from '../../ProductCommentItems/ProductCommentItems';

const { Option } = Select;
const layout = {
    labelCol: { flex: '20%' },
    wrapperCol: {
        flex: '80%',
    },
};
const columns = [
    {
        title: '',
        dataIndex: 'data',
        key: 'data'
    },
    {
        title: '',
        dataIndex: 'value',
        key: 'value'
    }
];
const data = [
    {
        key: '1',
        data: 'مدل',
        value: 'EO-IG955 Tuned by AKG'
    },
    {
        key: '2',
        data: 'نوع اتصال',
        value: 'با سیم جک 3.5 mm'
    },
    {
        key: '3',
        data: 'وزن',
        value: '14.74 گرم'
    },
    {
        key: '4',
        data: 'کیفیت خروجی صدا',
        value: 'فلت و شفاف'
    },
    {
        key: '5',
        data: 'انواع دکمه های کنترلی',
        value: 'play/pause, volume'
    }
]
const ProductMobileView = ({ product, relatedProducts }) => {

    const [visible, setVisible] = useState(false);
    const [newPrice, setNewPrice] = useState(product.price);



    useEffect(() => {
        setNewPrice(product.price);
    }, []);





    if (!product && !relatedProducts) {
        return <div>Loading ...</div>
    }
    return (
        <>
            <div id="side_top">
                <div className="breadcrumbs clearfix">
                    <LeftOutlined />

                    <Link to="/">جانبی</Link>
                    <LeftOutlined />

                    <Link to="#">لوازم جانبی موبایل</Link>
                    <LeftOutlined />

                    <Link to="#">خرید لوازم جانبی سامسونگ Samsung</Link>
                    <LeftOutlined />

                    <Link to="#">خرید و لیست قیمت هندزفری بی سیم سامسونگ</Link>
                    <LeftOutlined />

                    هندزفری جک 3.5 میلیمتری akg سامسونگ Samsung EO-IG955 AKG Earphone
                </div>
            </div>
            <main id="side_center">
                <div id="box_product_details" className='box'>
                    <div className='product mode-1'>
                        <div className='body'>
                            <div className='top-section mobile-mode'>
                                <div className='top-section-inner'>
                                    <div className="mob-special">
                                        <span className="special-badge"></span>
                                    </div>
                                    <h1 className='title'>{product.name}</h1>
                                    <div className='subtitle'>{product.slug}</div>
                                    <div className='thumbs clearfix'>
                                        <Image.PreviewGroup
                                            preview={{
                                                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                            }}
                                        >

                                            {
                                                product.images.map((image, index) => (
                                                    <Image src={image} key={index} />
                                                ))
                                            }
                                        </Image.PreviewGroup>
                                    </div>
                                    <ul className="details-bar">
                                        <li className="product-code">
                                            کدکالا:
                                            <Input readOnly type="text" value={product.id} id="product-id-code" />
                                            <CopyOutlined />
                                        </li>
                                        <li className="page-name">
                                            <span>
                                                دسته بندی :
                                                <Link to={`/category/${product.category.slug}`}>
                                                    {product.category.name}
                                                </Link>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rate-btn-section">
                                <div className="btn-float">
                                    <span className="btn-wishlist" data-id={product.id}>
                                        <HeartOutlined />
                                    </span>
                                    <span className="btn-share" data-src="#share-box">
                                        <ShareAltOutlined />
                                    </span>
                                </div>
                                <li className="rate-section">
                                    <StarFilled color='yellow' />
                                    <span className="star-rate"> 3.41</span>
                                    <span className="reviewcount">( <span>{product.comments.length}</span> )</span>
                                </li>

                            </div>

                            <div className='order'>
                                <Form
                                    {...layout}
                                    name='orderForm'
                                    className='product-basket'
                                >
                                    <Form.Item
                                        className='variants clearfix'
                                        name="color"
                                        label="رنگ"
                                    >
                                        <div className='selector-variant'>
                                            <Select defaultValue={['black']}>
                                                <Option value="black">مشکی</Option>
                                                <Option value="white">سفید</Option>
                                            </Select>
                                        </div>
                                    </Form.Item>
                                    <Form.Item name="count" label="تعداد" className='variants clearfix quantity-section'>
                                        <InputNumber min={1} max={10} defaultValue={1}
                                            onChange={(value) => {
                                                setNewPrice(value * product.price)
                                            }} />
                                    </Form.Item>
                                    <span className='old-price'>
                                        <span className="old-price-inner">
                                            <span className="off-percent">{calcDiscount(product.price, product.price * 1.8, 1)}%</span>
                                            <span className="amount-old-price">{seperatNumber(product.price * 1.8)}</span>
                                        </span>
                                        <span className='price' id="ProductPrice">
                                            {seperatNumber(newPrice)}
                                            <span className='currency'> تومان</span>
                                        </span>
                                    </span>
                                    <div className='add-basket-mob'>
                                        <Button id='add_to_basket' size="large" type="primary" htmlType="submit">
                                            <ShoppingOutlined />
                                            افزودن به سبد
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                            <div className="service-box">
                                <li>
                                    <span>
                                        <img src={guarantyImg} title=" ضمانت اصل بودن کالا" />
                                        <span className="title"> ضمانت اصل بودن کالا</span>
                                        <span className="subtitle">تضمین اصالت و گارانتی</span>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <img src={cartReturnImg} title="ضمانت بازگشت" />
                                        <span className="title">ضمانت بازگشت</span>
                                        <span className="subtitle">بازگرداندن کالا در ۷ روز</span>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <img src={deliveryFastImg} title="تحویل اکسپرس" />
                                        <span className="title">تحویل اکسپرس</span>
                                        <span className="subtitle">24 ساعته در تهران</span>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <img src={paymentImg} title="پرداخت در محل" />
                                        <span className="title">پرداخت در محل</span>
                                        <span className="subtitle">فقط در تهران</span>
                                    </span>
                                </li>
                            </div>

                            <div id="box_related">
                                <div className="header clearfix">
                                    <span className="title h1">محصولات مرتبط</span>
                                </div>
                                <div className="body">
                                    <section className='products items clearfix row mode-4'>
                                        {relatedProducts ?
                                            <ProductsSwiperList products={relatedProducts} />
                                            :
                                            ''
                                        }
                                    </section>
                                </div>
                            </div>

                            <div className="content-section attributes-section" id="attributes-section">
                                <div className="attributes-header">
                                    <span>
                                        <UnorderedListOutlined />
                                        مشخصات فنی
                                    </span>
                                </div>
                                <div className="content-body">
                                    <div className="table-responsive">
                                        <div className="table-wrapper">
                                            <Table columns={columns} dataSource={data} pagination={false} showHeader={false} className='table-attributes table-striped' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content-section description-section " id="description-section">
                                <div className="description-header">
                                    <span>
                                        <ProfileOutlined />
                                        توضیحات محصول
                                    </span>
                                </div>
                                <div className="content-body">
                                    <h2>هندزفری AKG سامسونگ&nbsp;S10 - S9 - S8 -Note 8 - Note 9</h2>
                                    <p></p>
                                    <p></p>
                                    <p>در جعبه خرید گوشی های سامسونگ S8 وS8 Plus ، هندزفری مدل EO-IG955 وجود دارد. این هندزفری دارای طراحی زیبا و ارگونومیک حرفه ای است که با داشتن گوشی هایی به شکل کج به خوبی درون گوش قرار می گیرند.</p>
                                    <p>با توجه به نوع طراحی هندزفری سامسونگ s8، بدون ایجاد مزاحمت می توانید ساعت های طولانی از آن برای شنیدن موسیقی و مکالمه استفاده نمایید.</p>
                                    <p><span style={{ color: '#ff0000' }}><em>توجه: هندزفری </em><em>&nbsp;akg&nbsp;</em><em>سامسونگ برای تمام گوشی و تبلتهای دارای پورت 3.5</em><em>mm </em><em>&nbsp;مناسب بوده و کاملا سازگار است</em><em>.</em></span></p>
                                </div>
                            </div>

                            <div className="rate" title="امتیاز 3.41 از 5 توسط 8994 کاربر">
                                <div className="rating-container rating-md rating-animate">
                                    <div className="rating-stars" title="Three Stars">
                                        <Rate allowHalf defaultValue={3.41} />
                                    </div>
                                </div>
                                <span>امتیاز 3.41 از 5 توسط 8994 کاربر</span>
                            </div>

                            <div className="content-section comments-section" id="comments-section">
                                <div className='comments-header'>
                                    <span>
                                        <CommentOutlined />
                                        نظرات کاربران
                                    </span>
                                    <span className="more-btn-open more-btn">
                                        <MessageOutlined />
                                        افزودن دیدگاه
                                    </span>
                                </div>
                                <div className='content-body'>
                                    <div id="comments-pane">
                                        <div id="comment_title">
                                            دیدگاه ها
                                        </div>
                                        <div className="clearfix" id="comment_area">
                                            <Form action="#" method="post" id="comment_form" className="form-horizontal  form-maker" noValidate>
                                                <Row>
                                                    <Col lg={10} md={10} sm={10} xs={24}>
                                                        <Form.Item label="نام و نام خانوادگی">
                                                            <Input placeholder="نام و نام خانوادگی خود را وارد کنید" size="large" />
                                                        </Form.Item>
                                                        <Form.Item label="ایمیل">
                                                            <Input placeholder="ایمیل خود را وارد کنید" type='email' size="large" />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col lg={14} md={14} sm={14} xs={24}>
                                                        <Form.Item label="دیدگاه خود را با ما در میان بگذارید">
                                                            <Input.TextArea placeholder="متن دیدگاه خود را بنویسید" />
                                                        </Form.Item>
                                                    </Col>

                                                </Row>
                                                <Form.Item dir={'ltr'}>
                                                    <Button name="save_comment" id="save_comment" label="" type="primary" htmlType="submit" className="btn" size="large">ارسال دیدگاه</Button>
                                                </Form.Item>

                                            </Form>
                                        </div>
                                        <ul id="comments">
                                            <ProductCommentItems comments={product.comments} />
                                        </ul>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </main>

            <div
                style={{
                    display: 'none',
                }}
            >
                <Image.PreviewGroup
                    preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                    }}
                >
                    {
                        product.images.map((img, index) => (
                            <Image src={img} key={index} />
                        ))
                    }

                </Image.PreviewGroup>
            </div>
        </>
    )
}

export default ProductMobileView