import React from "react";
import io from "socket.io-client";
import { SOCKET_URL } from '../const';

export const socketIo = io(SOCKET_URL).connect()
export const SocketContext = React.createContext(socketIo);
