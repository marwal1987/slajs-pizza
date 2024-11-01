import { fetchMenu } from "./fetch";
import { Drink, Pizza, Salad } from "./types";

const pizzas: Pizza[] = [];
const salads: Salad[] = [];
const drinks: Drink[] = [];

//func for each item, contains diff data
function isPizza(item: Pizza | Salad | Drink): item is Pizza {
  return (item as Pizza).toppings !== undefined;
}

function isSalad(item: Pizza | Salad | Drink): item is Salad {
  return (item as Salad).ingredients !== undefined;
}

function isDrink(item: Pizza | Salad | Drink): item is Drink {
  return (
    (item as Drink).description !== undefined &&
    (item as Pizza).toppings === undefined
  );
}

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
    showMenu("pizzas", pizzas);
    showMenu("salads", salads);
    showMenu("drinks", drinks);
  }
}

function showMenu(sectionId: string, items: (Pizza | Salad | Drink)[]) {
  const section = document.getElementById(sectionId);

  if (section) {
    items.forEach((item) => {
      const itemEl = document.createElement("div");
      itemEl.classList.add("menuItem");

      let content = "";
      if (isPizza(item)) {
        // content = `<p>${item.description}</p>`; // Var denna ett krav?
        content += `<p><b>Toppings:</b> ${item.toppings.join(", ")}</p>`;
      } else if (isSalad(item)) {
        content = `<p>${item.ingredients.join(", ")}</p>`;
      } else if (isDrink(item)) {
        content = `<p>${item.description}</p>`;
      }

      itemEl.innerHTML = `
      <div class="imgContainer">
      <img src="${item.imgUrl}" alt="${item.name}" />
      </div>
      <h3>${item.name} - ${item.price} SEK</h3>
          <p>${content}</p>
        `;

      section.appendChild(itemEl);
    });
  }
}

createMenu();
