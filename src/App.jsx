import { Suspense, useEffect, useState } from "react";
import Users from "./Components/Users";
import Spinner from "./Components/Spinner";

const App = () => {
  const [count, setCount] = useState(0);
  // const [users, setUsers] = useState([]);
  const apiUrl = "https://fake-json-api.mock.beeceptor.com/users";

  const handleCount = () => {
    setCount(count + 1);
  };

  // const person = {
  //   name: "Jakaria",
  //   age: 23,
  //   team: "L1",
  // };

  // const user = {
  //   name: "Milton",
  //   role: "manager",
  // };

  // Promise using .then chaining
  const userPromise = fetch(apiUrl)
  .then((res) => {
    return res.json();
  });

  // Promise using async/await
  // const userPromiseFunc = async () => {
  //   const res = await fetch(apiUrl);
  //   return res.json();
  // };
  // const userPromise = userPromiseFunc();

  /* 
  use Effect - The useEffect dependency array in React is an optional second argument passed to the useEffect hook. It is an array of values that the effect "depends" on. Its primary purpose is to control when the effect function will re-run. 
   */
  // useEffect(() => {
  //   console.log("re-redering");
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, [count]);

  // console.log(users);

  return (
    <>
      {/* Dynamic data */}
      {/* <h2>
        {person.name} {person.age} {person.team}
      </h2> */}
      <div className="flex items-center w-[120px]">
        <button
          type="button"
          className="flex items-center w-full px-4 py-2 text-base font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100 my-2"
        >
          Count
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 text-base font-medium text-black bg-white border rounded-r-md hover:bg-gray-100"
        >
          {count}
        </button>
      </div>
      <div className="flex gap-3 max-w-sm">
        <button
          onClick={handleCount}
          className="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800"
        >
          Increase
        </button>
        <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
          Delete
        </button>
      </div>

      {/* conditional rendering */}
      {/* <div className="my-2">
        {user.role == "manager" ? (
          <h2>This is manager dashboard</h2>
        ) : (
          <h2>This is an instructor dashboard</h2>
        )}
      </div> */}

      {/* Suspense and promise */}
      <Suspense fallback={<Spinner></Spinner>}>
        <Users userPromise={userPromise}></Users>
      </Suspense>
    </>
  );
};

export default App;
