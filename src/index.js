import "./styles.css";

const onClickAdd = () => {
  //書いた中身を取得してくる
  const inputText = document.getElementById("add-text").value;
  //中身の初期化機能
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
  //未完了を生成する関数を使用して、未完了todoを作成している
};

//未完了から指定の要素の削除の関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了のtodoを生成する関数
const createIncompleteList = (text) => {
  //divの生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liの生成
  const li = document.createElement("li");
  li.innerText = text;

  //ulに子要素divを追加
  document.getElementById("incomplete-list").appendChild(div);

  //完了のボタン処理
  const completeButton = document.createElement("button"); //ボタンタグの生成
  completeButton.innerText = "完了"; //テキストの生成
  completeButton.addEventListener("click", () => {
    //クリックされたときのイベントの作成
    //まずは親要素の取得
    const addTarget = completeButton.parentNode;

    // 親の中の最初の子要素から、テキストのみを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下をなくす
    addTarget.textContent = null;

    //li要素の生成
    const li = document.createElement("li");
    li.innerText = text;

    //backbutton要素の生成//順番は、未完了ボタンと同じことをしている
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
      //戻るということは未完了にいくということなので再度未完了のtodo作成＝関数が使える
      //関数は、同じところはおなじくかき、異なるところは引数で受け取る
    });

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

  //divの子要素にliを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
