"use client";

import ExampleServer from "./example-server";

const ExampleClient = () => {
  console.log('I am Client Component :)')
  return (
    <>
    <div>
      <p>This is an example client component</p>
    </div>
    <ExampleServer/>

    </>
  )
}

export default ExampleClient