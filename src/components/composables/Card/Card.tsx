import { card } from "@/styles/card.css";
import { PropsWithChildren } from "react";

export default function Card(props: PropsWithChildren<{}>) {
  const { children } = props;

  return <div className={card}>{children}</div>;
}
