import { createContext } from "react";

const ModalContext = createContext({});

export default ModalContext;

export const { Provider, Consumer } = ModalContext;