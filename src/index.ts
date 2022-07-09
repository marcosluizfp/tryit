let defaultErrorFn = function (error: any): void {
  console.log(error.message || error);
};

export const changeErrorFn = function (newErrorFn: (error?: any) => any): void {
  defaultErrorFn = newErrorFn;
};

const tryon = async function <T>(
  fn: () => T,
  errFn: (error?: any) => any = defaultErrorFn
): Promise<void | T> {
  try {
    return await fn();
  } catch (error) {
    errFn(error);
  }
};

export default tryon;

module.exports = tryon;
module.exports.changeErrorFn = changeErrorFn;
