import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/utils";
import styles from "./button.module.scss";

type ButtonLook = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  block?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  className?: string;
  children: ReactNode;
};

type NativeButton = ButtonLook &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonLook> & { href?: undefined };

type LinkButton = ButtonLook &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonLook | "href"> & { href: string };

export type ButtonProps = NativeButton | LinkButton;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    block = false,
    loading = false,
    loadingLabel,
    className,
    children,
    ...rest
  } = props;

  const classes = cx(
    styles.button,
    styles[variant],
    styles[size],
    block && styles.block,
    loading && styles.loading,
    className,
  );

  const content = (
    <>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      <span>{loading && loadingLabel ? loadingLabel : children}</span>
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as Omit<LinkButton, keyof ButtonLook>;
    return (
      <Link href={href} className={classes} {...anchor}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, ...button } = rest as Omit<NativeButton, keyof ButtonLook>;
  return (
    <button
      {...button}
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}
