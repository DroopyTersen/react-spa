import React, { useState, useEffect } from "react";

export function HomeScreen() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        I'm an app that is setup with "fast refresh". This means you can edit a file and I won't
        reset component state.
      </p>
      <p>
        For example, if you edit and save<code>/features/Home/HomeScreen.tsx</code>, you'll see me
        update instantly <b>without resetting the counter</b>.
      </p>
      <p>
        Count: <code>{count}</code>
      </p>
    </div>
  );
}
