window.addEventListener("load", function() {

      // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");
  if (!username || !password) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

    // ログインボタンを押した後の処理
    const loginBtn = document.querySelector(".log-in__btn");
    loginBtn.addEventListener("click", function() {
        const codename = document.querySelector(".log-in__codename").value;
        const password = document.querySelector(".log-in__pasword").value;
        const check = document.querySelector(".log-in__checkbox").checked;
        
        // テキストボックスのチェック
        if(!codename || !password) {
            window.alert("コードネームとパスワードは必須です。");
        } else if(codename !== localStorage.username || password !== localStorage.password) {
            window.alert("コードネームまたはパスワードが異なります。");
        } else if(!check) {
            window.alert("Mafiaへの忠誠は絶対です！");
        } else {
            // postへ遷移
            window.open("file:///Users/yokota/Desktop/work/You_Sam_Bacefook/post.html", "_blank");
        }
    });
    
    // 新しいアカウントを作成ボタンを押した後の処理
    const signinBtn = this.document.querySelector(".sign-up__btn");
    signinBtn.addEventListener("click", function() {
        const codename = document.querySelector(".log-in__codename").value;
        const password = document.querySelector(".log-in__pasword").value;
        const check = document.querySelector(".log-in__checkbox").checked;
        
        // テキストボックスのチェック
        if(!codename || !password) {
            window.alert("コードネームとパスワードは必須です。");
        } else if(!check) {
            window.alert("Mafiaへの忠誠は絶対です！");
        } else {
            // ユーザーネームとパスワードを書き換え
            localStorage.username = codename;
            localStorage.password = password;
            // postへ遷移
            window.open("file:///Users/yokota/Desktop/work/You_Sam_Bacefook/post.html", "_blank");
        }
    });
});
