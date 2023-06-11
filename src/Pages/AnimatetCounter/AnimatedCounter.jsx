import { useEffect, useState } from 'react';

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < value) {
          return prevCount + 1;
        }
        clearInterval(timer);
        return prevCount;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return   <span className="animated-counter  inline-block bg-indigo-500 text-white font-bold px-3 py-1 rounded-full">
  {count}
</span>;
}

export default AnimatedCounter;
