import React from "react";

export function App() {
  const [numOfRequests] = React.useState(10);
  const [url] = React.useState("codesandbox.io");

  return (
    <div>
      <div>
        <label>URL</label>
        <input value={url} />
      </div>
      <div>
        <label>Number of requests</label>
        <input value={numOfRequests} />
      </div>
      <div>
        <label>Avg response time</label>
        <input />
      </div>
      <div>
        <label>Requests made</label>
        <input />
      </div>
      <button>Start</button>
    </div>
  );
}
