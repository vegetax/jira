import { User } from "screens/project-list/search-panel";

interface listProps {
  list: Project[];
  users: User[];
}
interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
}

export const List = ({ users, list }: listProps) => (
  <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {list.map((project) => (
        <tr key={project.id}>
          <td>{project.name}</td>
          <td>
            {users.find((user) => user.id === project.personId)?.name || "未知"}
            {/*   {users.find((x) => x.id === project.personId)?.name || "未知a "} */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
