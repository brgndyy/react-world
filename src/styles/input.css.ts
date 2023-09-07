import { style } from "@vanilla-extract/css";
import { input_border_var } from "./container.css";

export const input_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem 0",
});

export const input = style({
  padding: "0.8rem",
  width: "80%",
  borderRadius: "0.5rem",
  border: input_border_var,
  outline: "none",
  transition: "all 0.3s ease",
  ":focus": {
    border: "0.3px solid #df4f4f",
  },
});
