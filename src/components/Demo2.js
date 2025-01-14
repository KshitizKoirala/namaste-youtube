import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  /**
   * not like ref=> 0, nut is like an object
   * ref = { current: 0 }
   *
   */

  console.log("Rendering...");

  /**
   * Suppose we increase the value of x by clicking on the Increase X button
   * The UI will not show the updated value, but the value of x will be updated (see console)
   * Let's click Increase x, 5 times, i.e. value of x = 5
   *
   * And now lets click Increase Y, once or more
   *
   * Now let's Click Increase x again
   * Here is the IMPORTANT part,
   * Now the value of x starts from 0 again, as the component re-renders
   * and the value of x is reset to 0 once again
   *
   * HENCE the need for useRef
   */

  /**
   * ANOTHER USE CASE
   * If we need to clear the timer from the below button component
   * and if we use let, then after the first re-render the link
   * between the variable and the setTimeout is lost,
   * Since a new variable is defined during re-render but the setTimout is from previous render
   */
  const timer = useRef(null);
  useEffect(() => {
    if (timer.current === null) {
      timer.current = setInterval(() => {
        console.log("Namaste JavaScript", Math.random());
      }, 1000);
    }
  }, []);

  return (
    <div className="m-2 p-2 bg-slate-50 border border-black w-96 h-96 ">
      <div>
        <button
          className="border border-gray bg-green-100 px-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x= ", x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>
      <div>
        <button
          className="px-2 m-4 bg-green-100 border border-gray"
          onClick={() => setY(y + 1)}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">State = {y}</span>
      </div>
      <div>
        <button
          className="px-2 m-4 bg-green-100 border border-gray"
          onClick={() => {
            ref.current += 1;
            console.log("ref= ", ref);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button
        className="m-4 px-2 bg-red-400 rounded-lg"
        onClick={() => {
          clearInterval(timer.current);
          timer.current = null;
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default Demo2;
