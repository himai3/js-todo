import "./styles";

const onClickAdd = () => {
  const inputText = document.getElementById("addtext").value;
  document.getElementById("addtext").value = "";
  const task = document.createElement("span");
  task.className = "taskName";
  task.innerText = inputText;
  const li = document.createElement("li");
  li.className = "list-row";
  li.appendChild(task);
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    const deleteTarget = completebutton.parentNode;
    const addTarget = deleteTarget.firstElementChild;
    deleteFromList("todo-list", deleteTarget);
    const listToAdd = document.createElement("li");
    listToAdd.className = "list-row";
    listToAdd.appendChild(addTarget);

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    listToAdd.appendChild(backButton);

    document.getElementById("complete-list").appendChild(listToAdd);
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
