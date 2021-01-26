export type CategorySchema = {
  id: string;
  name: string;
};

export type ProductSchema = {
  id: string;
  name: string;
  categories: string[];
};
