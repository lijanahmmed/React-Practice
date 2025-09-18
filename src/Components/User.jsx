const User = ({ user }) => {

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="" src={user.photo} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <h2 class="font-bold text-xl mb-2">{user.username}</h2>
        <h3>{user.phone}</h3>
        <h3> {user.email}</h3>
        <p>
          {user.address}, {user.country}
        </p>
      </div>
    </div>
  );
};

export default User;
