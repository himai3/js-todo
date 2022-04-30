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
    const done = completebutton.parentNode;
    document.getElementById("complete-list").appendChild(done);
    document.getElementById("todo-list").removeChild(done);
  });
  li.appendChild(completebutton);

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    const deleteTarget = deletebutton.parentNode;
    document.getElementById("todo-list").removeChild(deleteTarget);
    deletebutton.parentElement.remove();
  });
  li.appendChild(deletebutton);

  document.getElementById("todo-list").appendChild(li);
};

document
  .getElementById("addbutton")
  .addEventListener("click", () => onClickAdd());
