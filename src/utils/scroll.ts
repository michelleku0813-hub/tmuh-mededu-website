/** Smooth-scroll to an element by id, accounting for the sticky header. */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 72,
    behavior: 'smooth',
  });
}
