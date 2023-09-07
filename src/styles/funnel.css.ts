import { style } from "@vanilla-extract/css";
import { slideInFromRight, slideOutToLeft } from "./animation.css";
import {
  form_container_background_color_var,
  form_button_background_color_var,
  form_button_text_color_var,
} from "./container.css";

export const slideIn = style({
  animation: `${slideInFromRight} 0.3s ease forwards`,
});

export const slideOut = style({
  animation: `${slideOutToLeft} 0.3s eas forwards`,
});

export const only_next_button = style({
  padding: "1.3rem",
  width: "30%",
  border: "none",
  fontSize: "1.3rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  margin: "1rem",
  position: "absolute",
  bottom: "5%",
  color: form_button_text_color_var,
  background: form_button_background_color_var,
  ":hover": {
    opacity: "0.8",
  },
});

export const email_funnel_button_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "3rem",
});

export const password_funnel_container = style({
  width: "31rem",
  height: "23rem",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 8px",
  background: form_container_background_color_var,
  margin: "1rem 0",
  padding: "0.5rem",
  position: "relative",
});

export const password_funnel_button_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
});

export const user_name_disabled_button = style({
  padding: "1.3rem",
  width: "30%",
  border: "none",
  fontSize: "1.3rem",
  borderRadius: "0.5rem",
  transition: "all 0.3s ease",
  margin: "1rem",
  position: "absolute",
  bottom: "5%",
  color: form_button_text_color_var,
  background: form_button_background_color_var,
});
