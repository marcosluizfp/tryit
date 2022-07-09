import tryon, { changeErrorFn } from "../index";

const newErrorFn = (error: any) => {
  console.log("It works!!! The error is:", error.message);
};
changeErrorFn(newErrorFn);

tryon(() => {
  function throwAnError() {
    throw new Error("This error should be fired");
  }

  const p = new Promise((resolve, reject) => {
    throwAnError();
    console.log("This code should never run");
    resolve(true);
  });

  return p;
});
