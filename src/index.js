import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //ulに子要素divを追加
  document.getElementById("incomplete-list").appendChild(div);

  //完了
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
  });

  // 削除 //click処理を確認するためにalertを使うと有効
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //未完了から指定の要素の削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };

  //divの子要素にliを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
