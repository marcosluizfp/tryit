let defaultErrorFn = function (error: any): void {
  console.log(error.message || error);
};

export function changeErrorFn(newErrorFn: (error?: any) => any): void {
  defaultErrorFn = newErrorFn;
}

export default async function tryit<T>(
  fn: () => T,
  errFn: (error?: any) => any = defaultErrorFn
): Promise<void | T> {
  try {
    return await fn();
  } catch (error) {
    errFn(error);
  }
}
