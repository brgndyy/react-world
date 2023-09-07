import {
  profile_menu_container,
  section,
  hide,
} from "@/styles/profile_menu.css";
import { color_state } from "@/styles/container.css";
import Link from "next/link";

type ProfileMenuType = {
  isProfileMenuOpen: boolean;
  username: string;
};

export default function ProfileMenu({
  isProfileMenuOpen,
  username,
}: ProfileMenuType) {
  return (
    <div
      className={`${profile_menu_container} ${color_state} ${
        isProfileMenuOpen ? "" : hide
      }`}
    >
      <Link href={`/@${username}`}>
        <div className={`${section} ${color_state}`}>Profile</div>
      </Link>

      <Link href={"/editor"}>
        <div className={`${section} ${color_state}`}>Write</div>
      </Link>

      <Link href={"/settings"}>
        <div className={`${section} ${color_state}`}>Settings</div>
      </Link>

      <div className={`${section} ${color_state}`}>Logout</div>
    </div>
  );
}
