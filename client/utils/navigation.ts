export function isCurrentPath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const NAV_MOBILE_QUERY = "(max-width: 1023.98px)";
