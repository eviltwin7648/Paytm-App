import { atom } from "recoil";

export const balanceAtom = atom({
    key: 'balance', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
  });