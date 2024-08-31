import { RefObject, useCallback, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handleOnClickOutside: (event: MouseEvent | TouchEvent) => void,
  refsToIgnore: RefObject<HTMLElement>[] = [],
) => {
  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!ref.current) return;

      const IS_THE_SAME_REF = ref.current.contains(event.target as Node);

      const REF_SHOULD_BE_IGNORED = refsToIgnore.some((currentRef) =>
        currentRef.current?.contains(event.target as Node),
      );

      if (REF_SHOULD_BE_IGNORED || IS_THE_SAME_REF) return;

      handleOnClickOutside(event);
    },
    [ref, handleOnClickOutside, refsToIgnore],
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);
};
