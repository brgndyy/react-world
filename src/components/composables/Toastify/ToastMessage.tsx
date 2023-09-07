"use client";
import {
  toast_container,
  toast_message,
  warning,
  error,
  info,
  success,
  toast_progress_bar,
  container_exit,
} from "@/styles/toast.css";
import { color_state } from "@/styles/container.css";
import { useState, useEffect } from "react";

type Message = {
  id: number;
  message: string;
  type: "success" | "warning" | "error" | "info";
  exiting?: boolean;
};

type ToastMessageProps = {
  messages: Message[];
  closeMessage: (id: number) => void;
};

export default function ToastMessage({
  messages,
  closeMessage,
}: ToastMessageProps) {
  //   function getIcon() {
  //     if (type === 'success') return <Icon.Success />;
  //     if (type === 'warning') return <Icon.Warning />;
  //     if (type === 'error') return <Icon.Error />;
  //     if (type === 'info') return <Icon.Info />;
  //   }

  function getColorClass(type: string) {
    switch (type) {
      case "success":
        return success;
      case "warning":
        return warning;
      case "error":
        return error;
      case "info":
        return info;
      default:
        return "";
    }
  }

  return (
    <>
      {messages.map(({ id, message, type, exiting }) => {
        return (
          <div
            className={`${toast_container} ${getColorClass(type)} ${
              exiting ? container_exit : ""
            }`}
            key={id}
          >
            <p className={`${toast_message} ${color_state}`}>{message}</p>
            <div className={`${toast_progress_bar} ${color_state}`}></div>
          </div>
        );
      })}
    </>
  );
}
