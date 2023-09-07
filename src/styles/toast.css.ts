import { style, keyframes } from "@vanilla-extract/css";
import {
  toast_message_color_var,
  toast_progress_bar_color_var,
} from "./container.css";
import { flipIn, flipOut, progressBarAnimation } from "./animation.css";

export const toast_container = style({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  minHeight: "2rem",
  borderRadius: "5px 5px 0px 0px",
  padding: "1rem",
  position: "relative",
  margin: "0.5rem 0",
  animation: `${flipIn} 0.5s`,
  animationFillMode: "both",
});

export const container_exit = style({
  animation: `${flipOut} 0.5s`,
  animationFillMode: "both",
});

export const success = style({ background: "#46bb60" });
export const warning = style({ background: "yellow" });
export const error = style({ background: "#d54141" });
export const info = style({ background: "blue" });

export const toast_message = style({
  color: toast_message_color_var,
});

export const toast_progress_bar = style({
  position: "absolute",
  left: 0,
  bottom: 0,
  height: "5px",
  animation: `${progressBarAnimation} 1.5s linear`,
  background: toast_progress_bar_color_var,
});
