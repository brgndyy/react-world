import { style } from "@vanilla-extract/css";
import {
  profile_menu_text_color_var,
  profile_menu_container_background_color_var,
  profile_menu_container_hover_background_color_var,
} from "./container.css";
import { slideDown, slideUp } from "./animation.css";

export const profile_menu_container = style({
  position: "absolute",
  top: "147%",
  right: "0",
  width: "10rem",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 8px",
  background: profile_menu_container_background_color_var,
  animation: `${slideDown} 0.3s forwards`,
});

export const hide = style({
  animation: `${slideUp} 0.3s forwards`,
});

export const section = style({
  padding: "0.5rem",
  transition: "all 0.3s ease",
  cursor: "pointer",
  color: profile_menu_text_color_var,
  ":hover": {
    opacity: "0.8",
    background: profile_menu_container_hover_background_color_var,
  },
});
