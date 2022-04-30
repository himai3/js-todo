import "./styles";

const onClickAdd = () => {
  const inputText = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";
};

document
  .getElementById("addbutton")
  .addEventListener("click", () => onClickAdd());
