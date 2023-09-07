import { removeAt } from "@/utils/removeAt";
import { getUserInfo } from "@/utils/getUserInfo";

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const userName = removeAt(params.slug[0]);

  return <div>{userName}</div>;
}
