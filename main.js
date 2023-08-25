const arr = [];
const Add = async () => {
  const get = document.querySelector("input");
  const name = get.value;
  arr.push(name);
  console.log(arr);
  get.value = "";
};
