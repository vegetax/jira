import React, { useState } from "react";

export const SearchPanel = ({ users, param, setParam }) => (
  <form>
    <input
      onChange={(e) =>
        setParam({
          ...param, //保证setParam时不会覆盖掉其他参数
          name: e.target.value,
        })
      }
      value={param.name}
    />
    <select
      onChange={(e) =>
        setParam({
          ...param, //保证setParam时不会覆盖掉其他参数
          personId: e.target.value,
        })
      }
      value={param.personId}
    >
      <option value="">负责人</option>
      {/* ????????? */}
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  </form>
);
