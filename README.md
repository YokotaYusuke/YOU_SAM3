# Bacefook

今回の課題では、今まで学習したすべてのスキルを組み合わせて、**Bacefook** というソーシャルメディアアプリを作成します。👨‍📚

> 注意: この課題では Node を使ってはいけません！ このコードは、ブラウザで実行することを目的としています。

## Objectives - 目的

- クエリセレクタを使用して DOM 要素の参照（reference）を取得する
- コールバックをイベントハンドラとして登録する
- ローカルストレージにアイテムを保存 💾 したり、アイテムをロードする
- DOM に対して、要素を作成し、属性を設定し、それらを DOM に追加する
- moment.js を使用して、タイムスタンプをフォーマットする ⏱
- 初期化後に window.onload() を使用してコードを実行する

## 要件

- チーム名を決める
- GitHub に新規リポジトリ（public/公開）を作成し、全てのファイルをアップロード。リポジトリの URL をフォームで提出
  - [URL 提出フォーム](https://forms.gle/9H1vAyJqZ5HWzGdA9)
  - 提出期限：10/12（木）中
- Basic Requirements - 基礎レベル（ページ下部に記載）を完了
- 自分がユーザーだったら欲しい機能を最低 1 つペアと考えて実装
- セマンティックタグを使用し、実際の SNS のように見た目を整える
  - Facebook だけでなく、その他の SNS や架空のものでも OK です（slack、X、instagram）
- 10/13(金) のブロック 3 で行われるプレゼンテーションの準備をする
- 以下の内容を含んで 1 ペアあたり 4, 5 分で発表を行なってください
  - 完成したソーシャルメディアアプリの紹介
  - こだわりポイント（ユーザーだったら欲しい機能）
  - 工夫したこと / 苦労したこと / 学んだこと
  - ※ 発表するにあたりスライドを用意しても構いません

## Background - バックグラウンド

すでにいくつかのコードが書かれています：

- `dataGenerator.js` - 投稿データの作成をシミュレートします。
- `app.js` - フィード内のデータを表示します。

みなさんは、`app.js` ファイルにコードを書くことになります。`dataGenerator.js` ファイルには、私たちが書いたコードが含まれていますが、以下にその機能の概要を示します。

`bacefook`というグローバル変数が (`window` オブジェクト内に) あります。（これらはグローバル変数なので、`app.js` ファイルからアクセスできます。）

- `friends` は、Bacefook にいる友人をオブジェクトで表現しています。
- `bacefook` 変数は `friends`、`friendNames` と `newsfeed` の 3 つのプロパティを持つオブジェクトです。
  - `newsfeed` は Bacefook の投稿（post）に関するオブジェクトからなる配列です。それぞれの投稿（post）オブジェクトは、`friend`、`text`、`feeling`、`link`、`image`、および `timestamp` を持つオブジェクトです。
  - `friends` 👭👫 は、キーとしてすべての友達の名前と、その友達に属するさまざまな投稿を含む配列からなるオブジェクトです。

投稿（post）オブジェクトが作成されると、投稿の内容（オブジェクト）が `bacefook.newsfeed` の配列と friend の配列にそれぞれ追加されます。したがって、Kani が '作成' した投稿（post）オブジェクトは、あなたの Bacefook と `bacefook.friends.kani` の配列にそれぞれ追加されます。

また、`dataGenerator.js` の `scheduler` 関数は、ページが表示されたタイミングでプロセスを開始し、ニュースフィードにデータを定期的に追加します。

## Basic Requirements - 基礎レベル

**この演習では jQuery を使用しないでください。**

まず、Chrome で `index.html` を開いて、投稿（post）が表示 👀 できていることを確認しましょう。

- [レ] これらのメソッドについて読んでください。全てのメソッドを使用しないかもしれませんが、知っておくと役に立つでしょう。

  - [myButton.addEventListener("click", myFunction);](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)

  - [document.createElement("div")](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement)

  - [document.getElementById(id)](https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById)

  - [document.querySelector(selector)](https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector)

  - [parent.append(child);](https://developer.mozilla.org/ja/docs/Web/API/Element/append)

  - [myDiv.innerHTML = "Hi!"](https://developer.mozilla.org/ja/docs/Web/API/Element/innerHTML)

  - [setTimeout(functionName, number of milliseconds to wait before calling it)](https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

  - [setInterval(functionName, number of milliseconds to wait between calling it)](https://developer.mozilla.org/ja/docs/Web/API/Window/setInterval)

- [レ] `app.js` と `dataGenerator.js` に書いてあるコードを読んでください。
  - [レ] これらのファイルのコードが何をしているかを確認してください。
  - [レ] 分からないことがあれば調べましょう！
- [レ] `scheduler` によって生成された新しい Bacefook への投稿を画面に表示しましょう。以下のどちらかの方法で実装しましょう：
  - [レ] 投稿作成時に新しい投稿を自動的に表示する
  - [-] もしくは、新しい投稿を表示するための更新ボタンを追加し、クリック時に投稿を表示する
- [レ] 投稿が作成されたときのタイムスタンプを表示しましょう。
- [レ] 投稿に対する '気持ち（feeling）' を表示しましょう。
- [レ] 作成された投稿に画像を追加して表示しましょう。
  - 画像を格納するフォルダと、`images` という空の配列の変数は作成済です。
- [レ] `css` ファイルを追加してページのスタイルを整え、見た目を改善しましょう。
  - HTML にインラインで CSS を書くのではなく、css ファイルに記載しましょう。
- [レ] スクリプトに `moment.js` の [コード](https://momentjs.com/) を含めてください。
  - moment.js のサイトにある 'Install' の指示は無視してください。
  - moment.js のサイトにある 'download' の指示に沿って使用してください。
  - Locales は使用しません。moment.js をダウンロードしてください。
- [レ] `moment.js` を使って、投稿の生成時刻をわかりやすく、ユーザーフレンドリーに表示しましょう。（例："posted 5 minutes ago" など）
- [レ] フォームを追加して、ユーザーが自分の投稿を追加できるようにしましょう。
  - ユーザーが自分の画像をアップロードできるようにする必要はありません。
- [レ] `app.js` のトップに、`localStorage` に保存されているユーザー名があるかどうかを確認する処理があります。ページのどこかにユーザー名を表示しましょう。
