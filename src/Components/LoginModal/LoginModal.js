import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Modal, Input, Form, Checkbox, Button } from 'antd'
import { AuthContext } from '../../Context/Auth/authContext'
import { validate } from '../../Utils/utilities'

import './LoginModal.css'

const LoginModal = ({ isLoginModalOpen, handleLoginModalCancel }) => {
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(AuthContext);

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    const handleOk = () => {
        setLoading(true);
        const validateResult = validate(username, password);
        console.log(validateResult);
        if (validateResult.result) {
            dispatch({ type: 'login', payload: username });
            setLoading(false);
            handleLoginModalCancel();
        } else {
            setLoading(false);
            setHasError(true);
        }
    };
    const handleCancel = () => {
        // setOpen(false);
    };
    const onChange = () => {

    }
    return (
        <Modal zIndex='1002' title="ورود"
            open={isLoginModalOpen}
            onOk={handleOk}
            onCancel={handleLoginModalCancel}
            footer={[
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    ورود
                </Button>,
                <Button key="back" onClick={handleLoginModalCancel}>
                    لغو
                </Button>,
            ]}
            >
            <Form name="signin_form" id="signin_form" method="post" className="form-horizontal  form-maker ">
                <fieldset>
                    <p className="singup-text">در سایت ثبت نام نکرده اید؟</p>
                    <Link className="singup-btn" to="/signup">
                        <i className="fa fa-user-plus"></i>
                        عضویت در سایت
                    </Link>
                    <div className="form-group">
                        <Input placeholder="نام کاربری، ایمیل یا شماره موبایل" name="user_name" id="user_name" value={username} onChange={usernameHandler} className=" form-control ltr" type="text" />
                    </div>
                    <div className="form-group">
                        <Input placeholder="کلمه عبور" name="user_pass" id="user_pass" value={password} onChange={passwordHandler} className=" form-control ltr" label="" type="password" />
                    </div>
                    <label htmlFor="remember_me">
                        <Checkbox onChange={onChange} checked={true}>من را به خاطر بسپار"</Checkbox>
                    </label>
                    <Link className="float-left" to="/lost-password">بازیابی رمز</Link>
                </fieldset>
                <div className={`alert alert-danger alert-error errors ${hasError ? '' : 'd-none'}`} style={{ margin: '10px 0px' }}>شناسه کاربری یا کلمه عبور صحیح نمی باشد</div>
            </Form>
        </Modal>
    )
}

export default LoginModal