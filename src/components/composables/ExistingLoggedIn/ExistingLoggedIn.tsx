import { existing_logged_in_user_container } from "@/styles/existing_logged_in.css";

export default function ExistingLoggedIn() {
  return (
    <div className={existing_logged_in_user_container}>
      <h1>페이지 접근 권한이 존재하지 않습니다!</h1>
    </div>
  );
}
