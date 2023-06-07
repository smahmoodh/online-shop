import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

function About() {
    return (
        <div className='container'>
            <div id="side_top">
                <div className="box breadcrumbs clearfix">
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: 'صفحه اصلی',
                            },
                            {
                                title: <Link to="/mobile-accessories">لوازم جانبی موبایل</Link>,
                            },
                        ]} />
                </div>
            </div>

            <main id="side_center">
                <div className="box" id="box_about">
                    <div className="content ">
                    <div className="header clearfix">
                            <div className="title">
                                <h1>درباره ما</h1>
                            </div>
                    </div>
                    <div className="body clearfix">
                            <div className="text-area">
                                <p>فروشگاه اینترنتی &nbsp;(Onlieshop.com)</p>
                            <p>زمان یکی از با ارزش ترین سرمایه های انسانی است که باید از آن به بهترین نحو ممکن استفاده شود. اهمیت زمان آنقدر برای بشر شناخته شده بود که همواره سعی داشته و دارد، تا برای رسیدن به اهداف خود کوتاه ترین مسیر را انتخاب کند. مسیری که او را زودتر به هدف مورد نظر خود برساند.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <div id="side_bottom">
            </div>

        </div>
    )
}

export default About