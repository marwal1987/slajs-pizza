export type Pizza = {
  id: number;
  type: string;
  name: string;
  imgUrl: string;
  description: string;
  price: number;
  toppings: string[];
};

export type Salad = {
  id: number;
  type: string;
  name: string;
  imgUrl: string;
  price: number;
  ingredients: string[];
}

export type Drink = {
  id: number;
  type: string;
  name: string;
  imgUrl: string;
  description: string;
  price: number;
}

