import React, { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import axios from "axios";
import qs from "qs";
import { cleanObject, useDebounce, useMount } from "utils/index";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  // 把服务器上的list.JSON 变为对象存在list里啊
  const debouncedParam = useDebounce(param, 500);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debouncedParam]);

  /* 把服务器上的users.JSON 变为对象存在users里
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []); */

  // 用axios拉取数据
  useMount(() => {
    axios({
      methods: "get",
      url: `${apiUrl}/users`,
    }).then(function (res) {
      setUsers(res.data);
    });
  });

  // console.log(param);
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      {/* 将User传入 */}
      <List users={users} list={list} /> {/* 将list传入List */}
    </div>
  );
};
