import { MutableRefObject, RefObject, useEffect } from 'react';

const useWidthObserver = (
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement>,
  cb: (width: number) => void
) => {
  // Effect to listen changing width on a component
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      cb(entries[0].contentRect.width);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useWidthObserver;
