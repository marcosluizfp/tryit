import tryon, { changeErrorFn } from "../index";

const newErrorFn = (error: any) => {
  console.log("It works!!! The error is:", error.message);
};
changeErrorFn(newErrorFn);

tryon(() => {
  function throwAnError() {
    throw new Error("This error should be fired");
  }
  throwAnError();
  console.log("This code should never run");
});
