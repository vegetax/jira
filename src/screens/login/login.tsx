import { METHODS } from "http";
import { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    //FormEvent<HTMLFormElement>视频跟提示不一样
    e.preventDefault(); //组织默认行为
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value; //强制转换，我说了算
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password }); //登陆函数
  };
  const login = (param: { username: string; password: string }) => {
    fetch(`${apiUrl}/register`, {
      method: "post",
      headers: { "context-type": "application/json" }, //固定写法
      body: JSON.stringify(param), //fetch固定写法？
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        {/* onSubmit返回一个事件 */}
        <div>
          {" "}
          <label htmlFor="username">用户名</label> {/* htmlfor = id */}
          <input id="username" type="text" />
        </div>
        <div>
          {" "}
          <label htmlFor="password">密码</label>{" "}
          <input id="password" type="password" />{" "}
        </div>

        <button type="submit">注册</button>
      </form>
    </div>
  );
};
