import { style } from "@vanilla-extract/css";
import {
  form_container_background_color_var,
  form_toggle_text_color_var,
  form_button_background_color_var,
  form_button_text_color_var,
} from "./container.css";
import { softAppear } from "./header.css";

export const form_card = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${softAppear} 0.3s ease`,
});

export const form_container = style({
  width: "31rem",
  height: "21rem",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 8px",
  background: form_container_background_color_var,
  margin: "1rem 0",
  padding: "0.5rem",
  position: "relative",
});

export const form_logo = style({
  textAlign: "center",
  margin: "1rem 0",
});

export const toggle_form_state = style({
  textAlign: "center",
  margin: "1rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const toggle_text = style({
  cursor: "pointer",
  transition: "border-bottom 0.3s ease",
  borderBottom: "1px solid transparent",
  padding: "0.3rem",
  color: form_toggle_text_color_var,
  ":hover": {
    borderBottom: "1px solid",
    opacity: "0.8",
  },
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const form_button_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const form_button = style({
  padding: "1.3rem",
  width: "30%",
  border: "none",
  fontSize: "1.3rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  margin: "1rem",
  // position: "absolute",
  // bottom: "5%",
  color: form_button_text_color_var,
  background: form_button_background_color_var,
  ":hover": {
    opacity: "0.8",
  },
});
