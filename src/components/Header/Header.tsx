"use client";

import React from "react";
import {
  header_container,
  header_category_container,
  header_link,
  link,
} from "@/styles/header.css";
import { color_state } from "@/styles/container.css";
import { useTheme } from "@/libs/hooks/useTheme";
import {
  toggle_label,
  toggle_input,
  toggle_label_checked,
} from "@/styles/togglebutton.css";
import WhiteLogoImage from "./WhiteLogoImage";
import DarkLogoImage from "./DarkLogoImage";
import UserProfile from "../User/UserProfile";
import Sign from "./Sign";

type HeaderProps = {
  currentTheme: string;
  loggedInSuccess: boolean;
  userInfo: {
    username: string;
    email: string;
    bio: string | null;
    token: string;
    image: string;
  };
};

export default function Header({
  currentTheme,
  loggedInSuccess,
  userInfo,
}: HeaderProps) {
  const { darkTheme, themeToggleHandler } = useTheme(currentTheme);

  return (
    <div className={`${header_container} ${color_state}`}>
      {darkTheme ? <DarkLogoImage /> : <WhiteLogoImage />}
      <div className={header_category_container}>
        <input
          type={"checkbox"}
          id="darkmode-toggle"
          onChange={themeToggleHandler}
          className={toggle_input}
        />
        <label
          htmlFor="darkmode-toggle"
          className={`${toggle_label} ${darkTheme ? toggle_label_checked : ""}`}
        ></label>
        {loggedInSuccess ? <UserProfile userInfo={userInfo} /> : <Sign />}
      </div>
    </div>
  );
}
