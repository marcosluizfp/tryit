let defaultErrorFn = function (error: any): void {
  console.log(error);
};

export function changeErrorFn(newErrorFn: (error?: any) => any): void {
  defaultErrorFn = newErrorFn;
}

export default function tryit<T>(
  fn: () => T,
  errFn: (error?: any) => any = defaultErrorFn
): T | void {
  try {
    const result = fn();
    // if (result instanceof Promise) {
    //   result.then().catch((reason: any) => {
    //     errFn(reason);
    //   });
    // }
    return result;
  } catch (error) {
    errFn(error);
  }
}
