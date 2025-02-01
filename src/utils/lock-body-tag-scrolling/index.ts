export function lockBodyTagScrolling(lock: boolean) {
  const BODY_TAG = document?.body;

  if (!BODY_TAG) return;

  if (lock) return BODY_TAG.classList.add('locked');

  return BODY_TAG.classList.remove('locked');
}
