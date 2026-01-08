import { createContext } from "react";
import { io, Socket } from "socket.io-client";

/* =========================
   BACKEND SOCKET URL
   ========================= */
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "https://code-sync-a7bz.onrender.com";

/* =========================
   SOCKET INSTANCE
   ========================= */
export const socket: Socket = io(SOCKET_URL, {
  transports: ["websocket"], // avoid polling issues
  withCredentials: true,
  autoConnect: true,
});

/* =========================
   TYPES
   ========================= */
export type SocketId = string;

export interface SocketContextType {
  socket: Socket;
}

/* =========================
   SOCKET CONTEXT
   ========================= */
export const SocketContext = createContext<SocketContextType>({
  socket,
});

/* =========================
   SOCKET EVENTS
   ========================= */
export enum SocketEvent {
  JOIN_REQUEST = "join-request",
  JOIN_ACCEPTED = "join-accepted",
  USER_JOINED = "user-joined",
  USER_DISCONNECTED = "user-disconnected",

  SYNC_FILE_STRUCTURE = "sync-file-structure",

  DIRECTORY_CREATED = "directory-created",
  DIRECTORY_UPDATED = "directory-updated",
  DIRECTORY_RENAMED = "directory-renamed",
  DIRECTORY_DELETED = "directory-deleted",

  FILE_CREATED = "file-created",
  FILE_UPDATED = "file-updated",
  FILE_RENAMED = "file-renamed",
  FILE_DELETED = "file-deleted",

  USER_OFFLINE = "offline",
  USER_ONLINE = "online",

  SEND_MESSAGE = "send-message",
  RECEIVE_MESSAGE = "receive-message",

  TYPING_START = "typing-start",
  TYPING_PAUSE = "typing-pause",

  USERNAME_EXISTS = "username-exists",

  REQUEST_DRAWING = "request-drawing",
  SYNC_DRAWING = "sync-drawing",
  DRAWING_UPDATE = "drawing-update",
}
