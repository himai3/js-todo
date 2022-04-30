import "./styles";

const onClickAdd = () => {
  const inputText = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";
  const li = document.createElement("li");
  li.className = "list-row";
  li.innerHTML = inputText;
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    const deleteTarget = completebutton.parentNode;
    const addTarget = deleteTarget.parentNode.firstElementChild.innerText;
    deleteFromList("todo-list", deleteTarget);
    //const addTarget = deleteTarget.parentNode.firstElementChild.innerText;
    console.log(addTarget);
  });
  li.appendChild(completebutton);

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    const deleteTarget = deletebutton.parentNode;
    deleteFromList("todo-list", deleteTarget);
  });
  li.appendChild(deletebutton);

  document.getElementById("todo-list").appendChild(li);
};

const deleteFromList = (parentId, target) => {
  document.getElementById(parentId).removeChild(target);
};

document
  .getElementById("addbutton")
  .addEventListener("click", () => onClickAdd());
