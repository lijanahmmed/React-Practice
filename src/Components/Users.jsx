import { use } from "react";
import User from "./User";
const Users = ({ userPromise }) => {
  // readonly prop
  // props.person = {} - this will throw an err
  const users = use(userPromise);
  console.log(users);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
