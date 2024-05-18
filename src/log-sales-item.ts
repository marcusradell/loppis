import { SalesItem } from "./get-sales-items";

export function logSalesItems(salesItems: SalesItem[]) {
  salesItems.forEach((salesItem) => console.log(salesItem));
}
