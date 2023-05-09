import React from 'react';
import { isDesktop, isMobile } from 'react-device-detect';
import { Col, Row, Slider } from 'antd';
import { LinkedinOutlined, TwitterOutlined, FacebookOutlined, SendOutlined, InstagramOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import MenuItems from '../MenuItems/MenuItems';
import MenuItem from '../MenuItems/MenuItem/MenuItem';


import guarantyImg from '../../Assets/img/guaranty.svg';
import cartReturnImg from '../../Assets/img/cart-return.svg';
import deliveryFastImg from '../../Assets/img/delivery-fast.svg';
import paymentImg from '../../Assets/img/payment.svg';
import enamdImg from '../../Assets/img/enamad.png';
import samandehiImg from '../../Assets/img/samandehi.png';
import anjomanImg from '../../Assets/img/anjoman.png';

import './FooterComponent.css';


const FooterComponent = () => {
    return (
        <>
            {isDesktop ?
                <div className='footer-top'>
                    <div className='container-fluid'>
                        <div className="service-box-list">

                            <ul>
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
                                        <span className="subtitle">24 ساعته در اصفهان</span>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <img src={paymentImg} title="پرداخت در محل" />
                                        <span className="title">پرداخت در محل</span>
                                        <span className="subtitle">فقط در اصفهان</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> : null}
            <div className='footer-center'>
                <div className='container-fluid'>
                    <Row >
                        <Col sm={16} xs={24}>
                            <MenuItems cssClass="menu-4" >
                                <MenuItem cssClass="deep-2" link="" title="راهنمای خرید از سایت" text="راهنمای خرید از سایت">
                                    <MenuItems >
                                        <MenuItem link="/how-to-order" title="ثبت سفارش" text="ثبت سفارش" />
                                        <MenuItem link="/delivery" title="رویه ارسال سفارشات" text="رویه ارسال سفارشات" />
                                        <MenuItem link="/track-order" title="پیگیری سفارش" text="پیگیری سفارش" />
                                        <MenuItem link="/payment-order" title="راهنمای پرداخت" text="راهنمای پرداخت" />
                                    </MenuItems>
                                </MenuItem>
                                <MenuItem cssClass="deep-2" link="" title="خدمات مشتریان" text="خدمات مشتریان">
                                    <MenuItems >
                                        <MenuItem link="/faq" title="پاسخ به سوالات متداول" text="پاسخ به سوالات متداول" />
                                        <MenuItem link="/return-policy" title="رویه بازگرداندن کالا" text="رویه بازگرداندن کالا" />
                                        <MenuItem link="/privacy" title="حریم خصوصی" text="حریم خصوصی" />
                                        <MenuItem link="/term" title="شرایط استفاده" text="شرایط استفاده" />
                                    </MenuItems>
                                </MenuItem>
                                <MenuItem cssClass="deep-2" link="" title="درباره ما" text="درباره ما">
                                    <MenuItems >
                                        <MenuItem link="/about" title="درباره ما" text="درباره ما" />
                                        <MenuItem link="/contact-us" title="تماس با ما" text="تماس با ما" />
                                        <MenuItem link="/collaborations" title="همکاری با ما" text="همکاری با ما" />
                                        <MenuItem link="/blog" title="وبلاگ ما" text="وبلاگ ما" />
                                    </MenuItems>
                                </MenuItem>
                            </MenuItems>
                            
                        </Col>
                        <Col span={8}>
                            <div className="footer-title">دریافت اپلیکیشن</div>
                            <div className="footer-app-box">
                                <div className="footer-app-title">
                                    <div className="android-link">
                                        <a href="#" target="_blank" rel="noopener" dideo-checked="true">دانلود اپلیکیشن اندروید</a>
                                    </div>
                                    <div className="ios-link">
                                        <a href="#" dideo-checked="true" target="_blank">دانلود اپلیکیشن ios</a>
                                    </div>
                                </div>
                                <div className="footer-app-background"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='section-bottom'>
                        <Col
                            lg={{ span: 14 }} 
                            md={{ span: 14 }} 
                            sm={{ span: 24 }} 
                            xs={{ span: 24 }} 
                        >
                            <div className="working-days">
                                <span>پاسخگوی شما هستیم : </span>
                                <span>شنبه تا چهارشنبه </span>
                                <span className="green-text">۹-۱۷ </span>
                                <span>. پنج شنبه </span>
                                <span className="green-text">۹-۱۴</span>
                            </div>
                            <Row className="row contact-box">
                                <Col
                                    lg={{ span: 12 }}
                                    md={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    xs={{ span: 24 }} 
                                    >
                                    <div className="contact-section">
                                        <span className="hedaer_tel">
                                            <a href="tel:02112345678" dideo-checked="true">
                                                <PhoneOutlined style={{ color: '#0089ff' }} rotate={90} />
                                                021-12345678
                                            </a>
                                        </span>
                                        <span className="header_mail">
                                            <a href="#" dideo-checked="true">
                                                <MailOutlined style={{ color: '#0089ff' }}/>
                                                info@mail.com
                                            </a>
                                        </span>
                                    </div>
                                </Col>
                                <Col
                                    lg={{ span: 12 }}
                                    md={{ span: 24 }}
                                    sm={{ span: 24 }}
                                    xs={{ span: 24 }} 
                                    >
                                    <ul className="social">
                                        <li>
                                            <a rel="nofollow" target="_blank" title="telegram" href="#" className="icon-social icon-telegram">
                                                <SendOutlined />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" target="_blank" title="aparat" href="#" className="icon-social icon-aparat">
                                                <i className=" fa-fw fa-aparat"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" target="_blank" title="instagram" href="#" className="icon-social icon-instagram">
                                                <InstagramOutlined />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" target="_blank" title="facebook" href="#" className="icon-social icon-facebook">
                                                <FacebookOutlined />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" target="_blank" title="twitter" href="#" className="icon-social icon-twitter">
                                                <TwitterOutlined />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" target="_blank" title="linkedin" href="#" className="icon-social icon-linkedin">
                                                <LinkedinOutlined />
                                            </a>
                                        </li>
                                        <li>
                                            <a rel="nofollow" target="_blank" title="email" href="#" className="icon-social icon-email">
                                                <MailOutlined />
                                            </a>
                                        </li>
                                </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            lg={{ span: 10 }}
                            md={{ span: 10 }}
                            sm={{ span: 24 }}
                            xs={{ span: 24 }}
                        >
                            <ul className="nemad-box">
                                <li style={{ width: '25%' }}>
                                    <img src={enamdImg} alt="" style={{ cursor: 'pointer' }} width="125" height="136" />
                                </li>
                                <li style={{ width: '25%' }}>
                                    <img src={samandehiImg} alt="samandehi" className="img-fluid" width="125" height="140" style={{ cursor: 'pointer' }} />
                                </li>
                                <li style={{ width: '25%' }}>
                                    <img src={anjomanImg} alt="anjoman" width="125" height="107" className="img-fluid"/>

                                    </li>
                                <li style={{ width: '25%'}}>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Im0xMjAgMjQzbDk0LTU0IDAtMTA5IC05NCA1NCAwIDEwOSAwIDB6IiBmaWxsPSIjODA4Mjg1Ii8+Cgk8cGF0aCBkPSJtMTIwIDI1NGwtMTAzLTYwIDAtMTE5IDEwMy02MCAxMDMgNjAgMCAxMTkgLTEwMyA2MHoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo1O3N0cm9rZTojMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjE0IDgwbC05NC01NCAtOTQgNTQgOTQgNTQgOTQtNTR6IiBmaWxsPSIjMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjYgODBsMCAxMDkgOTQgNTQgMC0xMDkgLTk0LTU0IDAgMHoiIGZpbGw9IiM1ODU5NWIiLz4KCTxwYXRoIGQ9Im0xMjAgMTU3bDQ3LTI3IDAtMjMgLTQ3LTI3IC00NyAyNyAwIDU0IDQ3IDI3IDQ3LTI3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MTU7c3Ryb2tlOiNmZmYiLz4KCTx0ZXh0IHg9IjE1IiB5PSIzMDAiIGZvbnQtc2l6ZT0iMjVweCIgZm9udC1mYW1pbHk9IidCIFlla2FuJyIgc3R5bGU9ImZpbGw6IzI5Mjk1Mjtmb250LXdlaWdodDpib2xkIj7Yudi22Ygg2KfYqtit2KfYr9uM2Ycg2qnYtNmI2LHbjDwvdGV4dD4KCTx0ZXh0IHg9IjgiIHk9IjM0MyIgZm9udC1zaXplPSIyNXB4IiBmb250LWZhbWlseT0iJ0IgWWVrYW4nIiBzdHlsZT0iZmlsbDojMjkyOTUyO2ZvbnQtd2VpZ2h0OmJvbGQiPtqp2LPYqCDZiCDaqdin2LHZh9in24wg2YXYrNin2LLbjDwvdGV4dD4KPC9zdmc+ " alt="" style={{ cursor: 'pointer', width: '96px', height: '144px' }} />
                                 </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="container-fluid">
                    <div className="footer-text">
                        فروشگاه اینترنتی تخصصی React
                        زمان یکی از با ارزش ترین سرمایه های انسانی است که باید از آن به بهترین نحو ممکن استفاده شود. اهمیت زمان آنقدر برای بشر شناخته شده بود که همواره سعی داشته و دارد، تا برای رسیدن به اهداف خود کوتاه ترین مسیر را انتخاب کند. مسیری که او را زودتر به هدف مورد نظر خود برساند. در سال های اخیر با فراگیر شدن گجت های هوشمند مثل موبایل، تبلت و یا ابزارهای الکترونیکی دیگر مثل لپ تاپ، دوربین، کنسول بازی و... سبب شد شاخه ای جدید در بازار شکل بگیرد که هدف از آن رفع نیازهای React از گروه محصولات باشد		    </div>
                    <div className="footer-license">
                        استفاده از مطالب   <a href="#" title="تست">فروشگاه اینترنتی React</a>  فقط برای مقاصد غیر تجاری و با ذکر منبع بلامانع است. کليه حقوق اين سايت محفوظ می‌باشد

                        <div className="licence-area">
                            <span id="shopfa_license">
                                فروشگاه ساخته شده با <a target="_blank" title="react" href="#">React</a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterComponent