window.addEventListener("load", function() {

    // ログインボタンを押した後の処理
    const loginBtn = document.querySelector(".log-in__btn");
    loginBtn.addEventListener("click", function() {
        const codename = document.querySelector(".log-in__codename").value;
        const password = document.querySelector(".log-in__pasword").value;
        const check = document.querySelector(".log-in__checkbox").checked;
        
        // テキストボックスのチェック
        if(!codename || !password) {
            window.alert("コードネームとパスワードは必須です。");
        } else if(!localStorage.username || !localStorage.password) {
            window.alert("ユーザー情報が見つかりません。新しいアカウントを作成してください。");
        } else if(codename !== localStorage.username || password !== localStorage.password) {
            window.alert("コードネームまたはパスワードが異なります。");
        } else if(!check) {
            window.alert("*****への忠誠は絶対です！");
        } else {
            // postへ遷移
            window.open("post.html", "_blank");
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
            window.alert("*****への忠誠は絶対です！");
        } else {
            // ユーザーネームとパスワードを書き換え
            localStorage.username = codename;
            localStorage.password = password;
            // postへ遷移
            window.open("post.html", "_blank");
        }
    });
});
