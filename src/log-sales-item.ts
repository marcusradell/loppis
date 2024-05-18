import { SalesItem } from "./get-sales-item";

export function logSalesItem(user: SalesItem) {
  console.log(`Name: ${user.name}, price: ${user.price}`);
}
