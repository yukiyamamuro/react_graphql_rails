import { FC } from "react";

const data = {users: {nodes: [{firstName: "AA", lastName: "CC"}, {firstName:"BB",lastName: "ZZ"}]}}

export const UserListPage: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>ユーザー１</h2>
        <p>{data.users.nodes[0].firstName}</p>
        <p>{data.users.nodes[0].lastName}</p>
        <h2>ユーザー２</h2>
        <p>{data.users.nodes[1].firstName}</p>
        <p>{data.users.nodes[1].lastName}</p>
      </header>
    </div>
  );
}