window.addEventListener("load", () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {

    // 投稿のフレームを作成
    const postEl = document.createElement("div");
    postEl.classList.add("newsfeed__post");

    // newsfeedを格納
    const post = bacefook.newsfeed[index];

    // 投稿者名を追加
    const friendEl = document.createElement("div");
    friendEl.classList.add("newsfeed__friend");
    friendEl.innerText = post.friend;
    postEl.append(friendEl);

    // タイムスタンプ（投稿日時）を追加
    const timestampEl = document.createElement("div");
    timestampEl.classList.add("newsfeed__posted-date");
    let createTime = "posted " + moment(bacefook.newsfeed[index]["timestamp"]).startOf("h:mm:ss").fromNow(); // "posted 5 hours ago"
    timestampEl.innerHTML = createTime;
    postEl.append(timestampEl);
    
    // 気持ちを追加
    const feelingEl = document.createElement("div");
    feelingEl.classList.add("newsfeed__feeling");
    feelingEl.innerHTML = bacefook.newsfeed[index]["feeling"];
    postEl.append(feelingEl);
    
    // プロフィール画像を追加
    const imageEl = document.createElement("img");
    imageEl.classList.add("newsfeed__profile-image");
    imageEl.src = bacefook.newsfeed[index]["image"];
    imageEl.alt = "mafiaの画像です";
    postEl.append(imageEl);

    // 投稿メッセージを追加
    const postmessageEl = document.createElement("div");
    postmessageEl.classList.add("newsfeed__message");
    postmessageEl.innerText = post.text;
    postEl.append(postmessageEl);

    // 投稿
    containerEl.append(postEl);
  }

  // ユーザー名を追加
  const usernameEl = document.querySelector(".left-sidebar__username");
  usernameEl.innerHTML = localStorage.username;

  // フレンドの表示
  const friendlistEl = document.querySelector(".right-sidebar__list");
  
  bacefook.friendNames.forEach(el => {
    const friendNameEl = document.createElement("li");
    friendNameEl.classList.add("right-sidebar__item");
    friendNameEl.innerHTML = el;
    friendlistEl.append(friendNameEl);
  });

  // // 新しい投稿を作成
  // const newpostBtn = document.querySelector("#hero__newpost-btn");
  // newpostBtn.addEventListener("click", function() {
  // window.prompt("create new post");
  // });

});

// ロード完了後にnewsfeedを監視
window.onload = function() {

// 投稿作成時に新しい投稿を自動的に表示する
function watchArray(arr, func) {
  Object.defineProperty(arr, 'push', {
      value: function () {
          const oldArray = [...this];
          // push() の動作
          let n = this.length;
          for (let i = 0; i < arguments.length; i++ , n++) {
              this[n] = arguments[i];
          }
          // 追加後に任意の処理を呼ぶ
          func(oldArray, this);
          return n;
      }
  });
}

watchArray(bacefook.newsfeed, function() {
  const containerEl = document.querySelector("#newsfeed");

  // 投稿のフレームを作成
  const postEl = document.createElement("div");
  postEl.classList.add("newsfeed__post");

  // newsfeedを格納
  let lastIndex = bacefook.newsfeed.length-1;
  const post = bacefook.newsfeed[lastIndex];

  // 投稿者名を追加
  const friendEl = document.createElement("div");
  friendEl.classList.add("newsfeed__friend");
  friendEl.innerText = post.friend;
  postEl.append(friendEl);

  // タイムスタンプ（投稿日時）を追加
  const timestampEl = document.createElement("div");
  timestampEl.classList.add("newsfeed__posted-date");
  let createTime = "posted " + moment(bacefook.newsfeed[lastIndex]["timestamp"]).startOf("h:mm:ss").fromNow(); // "posted 5 hours ago"
  timestampEl.innerHTML = createTime;
  postEl.append(timestampEl);
  
  // 気持ちを追加
  const feelingEl = document.createElement("div");
  feelingEl.classList.add("newsfeed__feeling");
  feelingEl.innerHTML = bacefook.newsfeed[lastIndex]["feeling"];
  postEl.append(feelingEl);
  
  // プロフィール画像を追加
  const imageEl = document.createElement("img");
  imageEl.classList.add("newsfeed__profile-image");
  imageEl.src = bacefook.newsfeed[lastIndex]["image"];
  imageEl.alt = "mafiaの画像です";
  postEl.append(imageEl);

  // 投稿メッセージを追加
  const postmessageEl = document.createElement("div");
  postmessageEl.classList.add("newsfeed__message");
  postmessageEl.innerText = post.text;
  postEl.append(postmessageEl);

  // 投稿
  // containerEl.prepend(postEl);

});
}