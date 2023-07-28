import { useEffect, useRef, useState } from 'react';

// Input에 focus가 여러군데 있어서 useFocus라는 커스텀 훅을 만들었습니다

const useFocus = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setValue(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handler = () => setValue(!value);

  return [value, handler, ref];
};

export default useFocus;
