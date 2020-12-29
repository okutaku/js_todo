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
    //まずは親要素の取得
    const addTarget = completeButton.parentNode;

    // 親の中の最初の子要素から、テキストのみを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下をなくす
    addTarget.textContent = null;

    //li要素の生成
    const li = document.createElement("li");
    li.innerText = text;

    //backbutton要素の生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //addTargetの作成
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //addTargetをどこに置くかの指定　idを用いて
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除 //click処理を確認するためにalertを使うと有効
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //未完了から指定の要素の削除の関数
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
