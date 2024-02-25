import { createContext, useContext } from "react";
import { ChatProvider } from "./ChatProvider";

const ChatContext = createContext();

export default function useChat () {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};