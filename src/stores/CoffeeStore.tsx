import { create } from "zustand";
import { CoffeeInfoProps } from "../CoffeeInfoProps";

type CoffeeState = CoffeeInfoProps | null;

export const useCoffeeStore = create<CoffeeState>((set) => ({
  name: "",
  country: "",
  taste1: "",
  taste2: "",
  taste3: "",
  farmer: "",
  location: "",
  sea_height_min: "",
  sea_height_max: "",
  variety: "",
  process: "",
  score: 0,
  setCoffeeInfo: (coffeeInfo: CoffeeInfoProps) => set(() => coffeeInfo),
  setCoffeeInfoProperty: (
    property: keyof CoffeeInfoProps,
    value: string | number
  ) => set((state) => ({ ...state, [property]: value })),
}));
