import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  /**
   * @returns a heavy operations, i.e. when the value is 123456
   * it take some time to calculate the result and in the meantime
   * if we try to change the theme from dark mode to light mode,
   * the theme switching functionality is delayed and gives rise to
   * unexpected slow UI and impacts the UX
   *
   * So we use useMemo hook, to cache the result between re-renders
   */
  //   const prime = () => {
  //     console.log("Finding Prime of " + text);
  //     return findNthPrime(text);
  //   };

  //   useMemo Solution
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="m-3 p-2 bg-blue-200"
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-bold">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
