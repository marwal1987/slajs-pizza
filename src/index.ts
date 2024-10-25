import { fetchMenu } from "./fetch";
import { Drink, Pizza, Salad } from "./types";

const pizzas: Pizza[] = [];
const salads: Salad[] = [];
const drinks: Drink[] = [];

async function createMenu() {
  const menuItems = await fetchMenu();
  if (menuItems) {
    menuItems.forEach((item: any) => {
      switch (item.type) {
        case "pizza":
          pizzas.push(item);
          break;
        case "salad":
          salads.push(item);
          break;
        case "drink":
          drinks.push(item);
          break;
        default:
          break;
      }
    });
    console.log(
      "Pizzas: ",
      pizzas,
      "\n",
      "Salad: ",
      salads,
      "\n",
      "Drinks: ",
      drinks
    );
  }
}

createMenu();
