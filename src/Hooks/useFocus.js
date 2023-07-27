import { useState } from 'react';

const useFocus = () => {
  const [value, setValue] = useState(false);

  const handler = () => setValue(!value);

  return [value, handler];
};

export default useFocus;
