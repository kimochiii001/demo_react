import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, Space, Typography } from 'antd';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {

    const [passValue, setPassValue] = useState('');


    const handleSearchValue = (e) => {

        const passValue = e.target.value;
        if (!passValue.startsWith(' ')) {
            setPassValue(passValue);

            console.log(passValue);
        }


    }
    return (
        <div className={cx('wrapper')} >
            {/* <h2>LOGIN</h2> */}
            <Form className={cx('login-form')}>
                <Typography.Title>Wellcome Back</Typography.Title>
                <Form.Item label='Email'>
                    <Input type='text' className={cx('email-inp')} placeholder='email' />
                </Form.Item>
                <Form.Item label='Password'>
                    <Input.Password onChange={handleSearchValue}  className={cx('pass-inp')} placeholder='password' />
                </Form.Item>
                <Button className={cx('login-btn')} type='submit' >LOG IN</Button>
            </Form>
        </div>
    );
}


export default Login;