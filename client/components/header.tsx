"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, type FocusEvent, type KeyboardEvent } from "react";
import {
  bindOption,
  cx,
  isCurrentPath,
  NAV_MOBILE_QUERY,
  useBodyClass,
  useMediaQuery,
  useRouteModel,
} from "@/utils";
import { useLanguage } from "./language";
import { LanguageSwitch } from "./language-switch";
import { Logo } from "./logo";
import { BurgerButton, DropdownButton } from "./ui/buttons";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const menu = useRouteModel(false);
  const expanded = useRouteModel<string | null>(null);
  const mobile = useMediaQuery(NAV_MOBILE_QUERY);
  const menuId = useId();

  useBodyClass("nav-open", menu.value);

  function onNavKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Escape") return;
    if (expanded.value) expanded.onChange(null);
    else if (menu.value) menu.onChange(false);
  }

  function onItemBlur(event: FocusEvent<HTMLLIElement>, label: string) {
    const next = event.relatedTarget as Node | null;
    if (!next || !event.currentTarget.contains(next)) {
      if (expanded.value === label) expanded.onChange(null);
    }
  }

  return (
    <header className="header">
      <div className="header-bar">
        <Logo />
        <BurgerButton model={menu} controls={menuId} openLabel={t.openMenu} closeLabel={t.closeMenu} />
        <nav
          id={menuId}
          className={cx("nav", menu.value && "is-open")}
          aria-label={t.navLabel}
          inert={mobile && !menu.value ? true : undefined}
          onKeyDown={onNavKeyDown}
        >
          <ul>
            {t.nav.map((item, index) => {
              if (!item.children) {
                const href = item.href ?? "/";
                return (
                  <li key={item.label}>
                    <Link
                      className="nav-link"
                      href={href}
                      aria-current={isCurrentPath(pathname, href) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const model = bindOption(expanded, item.label, { off: null });
              const submenuId = `${menuId}-menu-${index}`;
              const current = item.children.some((child) => isCurrentPath(pathname, child.href));

              return (
                <li
                  key={item.label}
                  className={cx("dropdown", model.value && "is-open")}
                  onMouseEnter={() => !mobile && model.onChange(true)}
                  onMouseLeave={() => !mobile && model.onChange(false)}
                  onBlur={(event) => onItemBlur(event, item.label)}
                >
                  <DropdownButton model={model} controls={submenuId} current={current}>
                    {item.label}
                  </DropdownButton>
                  <ul id={submenuId} className="dropdown-menu" hidden={!model.value}>
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          className="nav-link"
                          href={child.href}
                          aria-current={isCurrentPath(pathname, child.href) ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}
