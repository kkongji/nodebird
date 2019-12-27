import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: "준영",
    },
    content: "ㅡ으으으으으",
    img: "https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F3361805%2Fattach%2F5128c018516c47c5b5f26ea4824aa7ef",
  }]
}

const PostForm = () => {
  return (
    <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data">
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
        <div>
          <input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
        </div>
        <div>
          {dummy.imagePaths.map((v, i) => {
            return (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={`http://localhost:3000/${v}`} style={{ width: "200px" }} alt={v} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            )
          })}
        </div>
      </Form>
  )
}

export default PostForm;

