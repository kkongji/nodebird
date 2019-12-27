import React from 'react';
import Link from "next/link";
import { Menu, Input, Row, Col } from 'antd';
import PropTypes from "prop-types";
import LoginForm from '../components/LoginForm';
import UserProfile from './UserProfile';

const dummy = {
  nickname: "준영",
  isLoggedIn: false,
  Post: [],
  Followings: [],
  Followers: []
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a></a></Link>노드버드</Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a></a></Link>프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={8} md={6}>
          {dummy.isLoggedIn ?
            <UserProfile />
            :
            <LoginForm />
          }
        </Col>
        <Col xs={8} md={12}>
          {children}  
        </Col>
        <Col xs={8} md={6}>
          <Link href="https://alcohol-dev.tistory.com/"><a target="_blank">Made by Junyoung</a></Link>
        </Col>
      </Row>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;