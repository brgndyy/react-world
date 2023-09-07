import { style } from "@vanilla-extract/css";
import { softAppear } from "./header.css";

export const existing_logged_in_user_container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20rem",
  animation: `${softAppear} 0.3s ease`,
});
