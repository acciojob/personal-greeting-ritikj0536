import React, { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name !== "" && <p>Hello {name}!</p>}
    </div>
  );
}

export default Greeting;
