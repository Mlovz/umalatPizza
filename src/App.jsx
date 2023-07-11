import Avatar from "./components/Avatar/Avatar";
import FollowBtn from "./components/FollowBtn/FollowBtn";

function App() {
  const users = [
    {
      avatar:
        "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
      username: "user",
      firstname: "User01",
    },
    {
      avatar:
        "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
      username: "user",
      firstname: "User01",
    },
    {
      avatar:
        "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
      username: "user",
      firstname: "User01",
    },
    {
      avatar:
        "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
      username: "user",
      firstname: "User01",
    },
  ];

  return (
    <div>
      {/* <Avatar
        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
        className=""
        size={150}
      /> */}
      {/* {users.map((user) => (
        <div>
          <Avatar size={40} src={user.avatar} />
          <span>{user.firstname}</span>
          <span>@{user.username}</span>

          <FollowBtn />
        </div>
      ))} */}
    </div>
  );
}

export default App;
