import tryit from "./index.js";

await tryit(
  async () => {
    function throwAnError() {
      throw new Error("This error should be fired");
    }

    const p = new Promise((resolve, reject) => {
      resolve(true);
      // reject(false);
    });

    const value = await p;
    throwAnError();
    console.log("Not OK");

    // p.then((value) => {
    //   expect(value).toBe(true);
    //   // throwAnError();
    //   fn();
    // }).catch((reason: any) => {
    //   console.log("aqui");
    //   errFn();
    // });
  },
  (error) => {
    console.log("OK");
  }
);
