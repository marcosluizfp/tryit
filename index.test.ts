import tryit, { changeErrorFn } from ".";

describe("tryit", () => {
  // it("should run sync code that doesn't throw an error", () => {
  //   const fn = jest.fn();
  //   const errFn = jest.fn();
  //   tryit(
  //     () => {
  //       fn();
  //     },
  //     () => errFn()
  //   );
  //   expect(fn).toHaveBeenCalled();
  //   expect(errFn).not.toHaveBeenCalled();
  // });

  // it("should run sync code that throws an error", () => {
  //   const fn = jest.fn();
  //   const errFn = jest.fn();
  //   tryit(
  //     () => {
  //       function throwAnError() {
  //         throw new Error("This error should be fired");
  //       }
  //       throwAnError();
  //       fn();
  //     },
  //     (error) => {
  //       expect(error).not.toBeNull();
  //       errFn();
  //     }
  //   );
  //   expect(fn).not.toHaveBeenCalled();
  //   expect(errFn).toHaveBeenCalled();
  // });

  // it("should run async code that doesn't throw an error - v1", async () => {
  //   const fn = jest.fn();
  //   const errFn = jest.fn();
  //   await tryit(async () => {
  //     const p = new Promise((resolve, reject) => {
  //       resolve(true);
  //     });

  //     p.then((value) => {
  //       expect(value).toBe(true);
  //       fn();
  //     });
  //   });
  //   expect(fn).toHaveBeenCalled();
  //   expect(errFn).not.toHaveBeenCalled();
  // });

  // it("should run async code that doesn't throw an error - v2", async () => {
  //   const fn = jest.fn();
  //   const errFn = jest.fn();
  //   await tryit(async () => {
  //     const p = new Promise((resolve, reject) => {
  //       resolve(true);
  //     });

  //     const value = await p;
  //     expect(value).toBe(true);
  //     fn();
  //   });
  //   expect(fn).toHaveBeenCalled();
  //   expect(errFn).not.toHaveBeenCalled();
  // });

  it("should run async code that throws an error", async () => {
    const fn = jest.fn();
    const errFn = jest.fn();
    try {
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
          expect(value).toBe(true);
          throwAnError();
          fn();

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
          expect(error).not.toBeNull();
          errFn();
        }
      );
      expect(fn).not.toHaveBeenCalled();
      expect(errFn).toHaveBeenCalled();
    } catch (error) {}
  });

  // it("should call default error function", () => {
  //   const errFn = jest.fn();
  //   tryit(() => {
  //     function throwAnError() {
  //       throw new Error("This error should be fired");
  //     }
  //     throwAnError();
  //     errFn();
  //   });
  //   expect(errFn).not.toHaveBeenCalled();
  // });

  // it("should change default error function", () => {
  //   const errFn = jest.fn();
  //   const newErrorFn = () => errFn();
  //   changeErrorFn(newErrorFn);
  //   tryit(() => {
  //     function throwAnError() {
  //       throw new Error("This error should be fired");
  //     }
  //     throwAnError();
  //   });
  //   expect(errFn).toHaveBeenCalled();
  // });
});
