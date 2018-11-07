export default (nameOfClass, msg) => {
  let errEl = document.getElementsByClassName(nameOfClass)[0];
  errEl.innerHTML = msg;
  console.log(errEl.innerHTML);
  return errEl.innerHTML;
};
