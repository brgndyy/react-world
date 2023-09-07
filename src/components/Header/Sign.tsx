import Link from "next/link";
import { header_link, link } from "@/styles/header.css";

export default function Sign() {
  return (
    <>
      <div className={`${header_link}`}>
        <Link href={"/login"} className={link}>
          Sign in
        </Link>
      </div>
      <div className={header_link}>
        <Link href={"/register"} className={link}>
          Sign up
        </Link>
      </div>
    </>
  );
}
