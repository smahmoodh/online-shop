import React, { useEffect, useState } from 'react';
import { Col, Row, Image, Form, Select, InputNumber, Button, Tabs, Input, Rate } from 'antd';
import { CopyOutlined, HeartOutlined, LeftOutlined, ShareAltOutlined, ShoppingOutlined, StarFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { seperatNumber, calcDiscount } from '../../../Utils/utilities';
import ProductsSwiperList from '../../ProductsSwiperList/ProductsSwiperList';
import FormItem from 'antd/es/form/FormItem';

import './ProductDesktopView.css';
import guarantyImg from '../../../Assets/img/guaranty.svg';
import cartReturnImg from '../../../Assets/img/cart-return.svg';
import deliveryFastImg from '../../../Assets/img/delivery-fast.svg';
import paymentImg from '../../../Assets/img/payment.svg';
import brand from '../../../Assets/img/samsung.png';
import ProductCommentItems from '../../ProductCommentItems/ProductCommentItems';

const { Option } = Select;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const { TabPane } = Tabs;
const ProductDesktopView = ({product , relatedProducts}) => {

    const [visible, setVisible] = useState(false);
    const [newPrice, setNewPrice] = useState(product.price);


    useEffect(() => {
        console.log('product');
        console.log(product);
        console.log('relatedProducts');
        console.log(relatedProducts);
        setNewPrice(product.price);
    }, []); 

    const items = [
        {
            key: '0',
            label: 'توضیحات',
            children: (
                <Row>
                    <Col
                        xs={2}
                        sm={4}
                    ></Col>
                    <Col xs={20} sm={16}>
                        <div className="text-area">
                            <h2>هندزفری AKG سامسونگ&nbsp;S10 - S9 - S8 -Note 8 - Note 9</h2>
                            <p></p>
                            <p></p>
                            <p>در جعبه خرید گوشی های سامسونگ S8 وS8 Plus ، هندزفری مدل EO-IG955 وجود دارد. این هندزفری دارای طراحی زیبا و ارگونومیک حرفه ای است که با داشتن گوشی هایی به شکل کج به خوبی درون گوش قرار می گیرند.</p>
                            <p>با توجه به نوع طراحی هندزفری سامسونگ s8، بدون ایجاد مزاحمت می توانید ساعت های طولانی از آن برای شنیدن موسیقی و مکالمه استفاده نمایید.</p>
                            <p><span style={{ color: '#ff0000' }}><em>توجه: هندزفری </em><em>&nbsp;akg&nbsp;</em><em>سامسونگ برای تمام گوشی و تبلتهای دارای پورت 3.5</em><em>mm </em><em>&nbsp;مناسب بوده و کاملا سازگار است</em><em>.</em></span></p>
                        </div>
                    </Col>
                    <Col
                        xs={2}
                        sm={4}
                    ></Col>
                </Row>
            )
        },
        {
            key: '1',
            label: 'مشخصات محصول',
            children: (
                <Row>
                    <Col
                        xs={2}
                        sm={4}
                    ></Col>
                    <Col xs={20} sm={16}>
                        <div className="table-wrapper">
                            <table className="table table-hover table-attributes">
                                <tbody>
                                    <tr>
                                        <td className="first-td">
                                            <span>مدل</span>
                                        </td>
                                        <td className="second-td"> EO-IG955 Tuned by AKG</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">
                                            <span>نوع اتصال</span>
                                        </td>
                                        <td className="second-td"> با سیم جک 3.5 mm</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">
                                            <span>وزن</span>
                                        </td>
                                        <td className="second-td"> 14.74 گرم</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">
                                            <span>کیفیت خروجی صدا</span>
                                        </td>
                                        <td className="second-td"> فلت و شفاف</td>
                                    </tr>
                                    <tr>
                                        <td className="first-td">
                                            <span>انواع دکمه های کنترلی</span>
                                        </td>
                                        <td className="second-td"> play/pause, volume</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col
                        xs={2}
                        sm={4}
                    ></Col>
                </Row>
            )
        },
        {
            key: '2',
            label: 'نظرات',
            children: (
                <Row>
                    <Col
                        xs={2}
                        sm={4}
                    ></Col>
                    <Col xs={20} sm={16}>
                        <div className="rate" title="امتیاز 3.41 از 5 توسط 8981 کاربر">
                            <div className="rating-container rating-md rating-animate">
                                <div className="rating-stars" title="Three Stars">
                                    <Rate allowHalf defaultValue={3.41} />
                                </div>
                            </div>
                            <span>امتیاز 3.41 از 5 توسط 8981 کاربر</span>
                        </div>

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
                    </Col>
                    <Col
                        xs={2}
                        sm={4}
                    ></Col>
                </Row>
            )
        }

    ]

    if (product === undefined && relatedProducts === undefined) {
        return <div>Loading ...</div>
    }
    return (
        <>
            <div className='sides'>
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
                <Row>
                    <Col id="side_center" lg={24} xs={24}>
                        <div id="box_product_details" className='box'>
                            <div className='product mode-1'>
                                <div className='body'>
                                    <div className='body-top clearfix'>
                                        <div className='section-right'>
                                            <a className='image' >
                                                <Image
                                                    preview={{
                                                        visible: false,
                                                    }}
                                                    src={product.image}
                                                    onClick={() => setVisible(true)}
                                                />
                                            </a>
                                            <div className='thumbs thumbs-items clearfix'>
                                                <Image.PreviewGroup
                                                    preview={{
                                                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                    }}
                                                >

                                                    {
                                                        product.images.map((image, index) => (
                                                            <Image width={100} height={100} src={image} key={index} />
                                                        ))
                                                    }
                                                </Image.PreviewGroup>
                                            </div>
                                            <div className="btn-float">
                                                <span className="btn-wishlist btn-wishlist-163168" data-id="163168">
                                                    <HeartOutlined />
                                                </span>
                                                <span className="btn-share" data-fancybox="share-box" data-src="#share-box">
                                                    <ShareAltOutlined />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='section-left'>
                                            <div className='section-left-top'>
                                                <div className='section-left-1'>
                                                    <div className='brand-section'>
                                                        <a className='brand-link' href='#'>
                                                            <img src={brand} alt='brand logo' width={60} height={60} />
                                                        </a>
                                                    </div>
                                                    <h1 className='title'>{product.name}</h1>
                                                    <h2 className='subtitle'>{product.slug}</h2>
                                                    <ul className="details-bar">
                                                        <li className="rate-section">
                                                            <StarFilled color='yellow' />
                                                            <span className="star-rate"> 3.41</span>
                                                            <span className="reviewcount">
                                                                ( <span>{product.comments.length} دیدگاه</span> )
                                                            </span>
                                                        </li>
                                                        <li className="page-name">
                                                            <span>دسته بندی :
                                                                <Link className="page-23303" to={`/category/${product.category.slug}`}>
                                                                    {product.category.name}
                                                                </Link>
                                                            </span>
                                                        </li>
                                                        <li className="product-code">
                                                            کدکالا: <Input readOnly type="text" value={product.id} id="product-id-code" />
                                                            <CopyOutlined />
                                                        </li>
                                                    </ul>
                                                    <div className='product-features'>
                                                        <span className='title-features'>ویژگی های محصول</span>
                                                        <p>
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className='section-left-2'>
                                                    <div className='order'>
                                                        <span className='special-badge'></span>
                                                        <Form
                                                            {...layout}
                                                            name='orderForm'
                                                            className='product-basket'
                                                        >
                                                            <Form.Item
                                                                className='variants'
                                                                name="color"
                                                                label="رنگ"
                                                            >
                                                                <div className='selector-variant form-group'>
                                                                    <Select defaultValue={['black']} className='variants'>
                                                                        <Option value="black">مشکی</Option>
                                                                        <Option value="white">سفید</Option>
                                                                    </Select>
                                                                </div>
                                                            </Form.Item>
                                                            <Form.Item name="count" label="تعداد" className='quantity-section'>
                                                                <InputNumber min={1} max={10} defaultValue={1}
                                                                    onChange={(value) => {
                                                                        setNewPrice(value * product.price)
                                                                    }} />
                                                            </Form.Item>
                                                            <FormItem>
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
                                                            </FormItem>
                                                            <Form.Item>
                                                                <Button id='add_to_basket' size="large" type="primary" htmlType="submit">
                                                                    <ShoppingOutlined />
                                                                    افزودن به سبد
                                                                </Button>
                                                            </Form.Item>
                                                        </Form>
                                                    </div>
                                                </div>
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
                                        </div>
                                    </div>
                                    <div id='box_related'>
                                        <div className='header clearfix'>
                                            <span className='title h1'>
                                                محصولات مرتبط
                                            </span>
                                        </div>
                                        <div className='body'>
                                            <section className='products items clearfix row mode-4'>
                                                {relatedProducts ?
                                                    <ProductsSwiperList products={relatedProducts} />
                                                    :
                                                    ''
                                                }
                                            </section>
                                        </div>
                                    </div>

                                    <div className="body-bottom clearfix">
                                        <div className="section-bottom">
                                            <Tabs defaultActiveKey="0" items={items} className="nav " id="product-tabs"></Tabs>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

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

export default ProductDesktopView