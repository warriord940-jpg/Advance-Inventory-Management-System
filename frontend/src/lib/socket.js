import { io } from "socket.io-client";

export const SOCKET_URL =
  process.env.REACT_APP_SOCKET_URL ||
  "https://advanced-inventory-management-system-v1.onrender.com";

export const socketOptions = {
  withCredentials: true,
  transports: ["polling", "websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 2000,
  timeout: 10000,
};

export const createSocket = (options = {}) =>
  io(SOCKET_URL, { ...socketOptions, ...options });

export default createSocket;
