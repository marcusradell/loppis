import { User } from "./getUser";

export function logUser(user: User) {
  console.log(`Name: ${user.name}, email: ${user.email}`);
}
