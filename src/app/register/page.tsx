import SignUpFunnel from "@/components/SignUpFunnel/SignUpFunnel";
import { isUserLoggedIn } from "@/utils/isUserLoggedIn";
import ExistingLoggedIn from "@/components/composables/ExistingLoggedIn/ExistingLoggedIn";

export default function RegisterPage() {
  const isLoggedIn = isUserLoggedIn();

  return <>{isLoggedIn ? <ExistingLoggedIn /> : <SignUpFunnel />}</>;
}
