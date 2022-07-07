import tryon, { changeErrorFn } from "../index.js";

const newErrorFn = (error: any) => {
  console.log("It works!!! The error is:", error);
};
changeErrorFn(newErrorFn);

await tryon(async () => {
  const p = new Promise((resolve, reject) => {
    reject(false);
  });
  await p; // Promise will reject

  console.log("This code should never run");
});
