// import { io } from "socket.io-client";

// const localSocketUrl = `http://${window.location.hostname || "localhost"}:5000`;
// const socketUrl = process.env.REACT_APP_SOCKET_URL || process.env.REACT_APP_BACKEND_URL || localSocketUrl;

// const socket = io(socketUrl, {
//   withCredentials: true,
//   transports: ["websocket", "polling"],
// });

// export default socket;
import { io } from "socket.io-client";

const token = localStorage.getItem("token");

export const socket = io(process.env.REACT_APP_SOCKET_URL || "http://localhost:5000", {
  autoConnect: false,
  auth: { token },
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 2000,
});