import tryit, { changeErrorFn } from "../index.js";

const newErrorFn = (error: any) => {
  console.log("It works!!! The error is:", error.message);
};
changeErrorFn(newErrorFn);

await tryit(async () => {
  function throwAnError() {
    throw new Error("This error should be fired");
  }

  const p = new Promise((resolve, reject) => {
    throwAnError();
    console.log("This code should never run");
    resolve(true);
  });

  const value = await p; // Promise throws an error
  console.log("This code should never run");
});
