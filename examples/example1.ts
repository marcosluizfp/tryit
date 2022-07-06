import tryit, { changeErrorFn } from "../index.js";

const newErrorFn = (error: any) => {
  console.log("It works!!! The error is:", error.message);
};
changeErrorFn(newErrorFn);

tryit(() => {
  function throwAnError() {
    throw new Error("This error should be fired");
  }
  throwAnError();
  console.log("This code should never run");
});
