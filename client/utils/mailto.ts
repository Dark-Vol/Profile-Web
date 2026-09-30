export function buildMailto(to: string, subject: string, body: string) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openMailto(to: string, subject: string, body: string) {
  window.location.href = buildMailto(to, subject, body);
}
