import users from "../../data/users.json";

export default function login({ email, password }) {
  return users.find((user) => {
    return user.email === email && user.password === password;
  });
}
