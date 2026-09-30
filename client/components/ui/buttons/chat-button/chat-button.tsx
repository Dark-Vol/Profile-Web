import type { ButtonHTMLAttributes } from "react";
import { ChatIcon } from "@/components/icons";
import { cx } from "@/utils";
import styles from "./chat-button.module.scss";

type ChatButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label" | "children"> & {
  label: string;
};

export function ChatButton({ label, className, type = "button", ...rest }: ChatButtonProps) {
  return (
    <button {...rest} type={type} className={cx(styles.chat, className)} aria-label={label}>
      <ChatIcon />
    </button>
  );
}
