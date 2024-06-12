import { createContext } from "react";

const CheckoutContext = createContext({});

export default CheckoutContext;

export const { Provider, Consumer } = CheckoutContext;