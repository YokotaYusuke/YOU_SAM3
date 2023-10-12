/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here until you get to basic requirement #4,
  but please check it out to familiarize yourself beforehand.
*/
(() => {
  window.bacefook = {};
  bacefook.newsfeed = [];
  bacefook.friends = {};
  bacefook.friendNames = [
    "ABIRUMAN/Boss",
    "SAM/Consiglire", 
    "TanaChu/Underboss",
    "Yusuke/Underboss",
    "Taka/Capo",
    "Jin/Soldier",
    "Yan/Soldier",
    "Ryo/Associate",
    "Tora/Facilitator"
  ];
  bacefook.friendNames.forEach(name => {
    bacefook.friends[name] = [];
  });

  const getRandomElement = array => {
    // Given an array, returns a random element
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const starters = [
    "しまった",
    "おーマイガ！",
    "順調に行っているかね。",
    "君は！！",
    "任務は完了したのか？",
    "何が起きている。",
    "早く逃げろ！",
    "見つかったぞ！",
    "Bossだ、",
    "Consiglireより、",
    "「報告します。」",
    "ウォー！",
    "私たちの"
  ];
  const verbs = [
    "君の任務は、",
    "今日は、",
    "昨日は、",
    "それはそうと、",
    "アジトへ行け！",
    "BOSS！",
    "来たぞ、",
    "敵は近い、",
    "人が近づいている",
    "やばいよ、やばいよ",
    "銃弾の嵐だ",
    "たった今、"
  ];
  const fillers = [
    "やばいな。",
    "早く逃げろ！",
    "よくやった。",
    "足を撃たれた。",
    "。。。。",
    "負傷者２名いる。",
    "アジトが発見された。",
    "壊滅させた。",
    "良い天気でゲス。",
    "ここはどこだ。",
    "敵を発見したぞ。",
    "発見されました。"
  ];
  const nouns = [
    "奴が迫ってきている",
    "どこに行ったのだ。",
    "目が！目が！",
    "今の状態を伝えろ！",
    "よし、追い詰めた。",
    "最後の指令を聞け！",
    "１０分で用意しな。",
    "撤収！！",
    "明日まで、待機しろ。",
    "もう、無理です。",
    "今、行くぞ！",
    "来るなら来い。"
  ];
  const hashtags = [
    "#DIG",
    "#techlife",
    "#toyota",
    "#tokyo",
    "#japan",
    "#interesting",
    "#til",
    "#lol",
    "#tgifriday",
    "#hashtags",
    "#japanlife",
    "#oops",
    ""
  ];
  const feelings = [
    "😀",
    "😗",
    "😍",
    "🥶",
    "🫣",
    "😵",
    "😡",
    "😤",
    "🤡",
    ""
  ];
  const images = [
    "images/profile/mafia-1.jpg",
    "images/profile/mafia-2.jpg",
    "images/profile/mafia-3.jpg",
    "images/profile/mafia-4.jpg",
    "images/profile/mafia-5.jpg",
    "images/profile/mafia-6.jpg",
    "images/profile/mafia-7.jpg",
    "images/profile/mafia-8.jpg",
    "images/profile/mafia-9.jpg",
  ];

  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      getRandomElement(verbs),
      getRandomElement(fillers),
      getRandomElement(nouns),
      getRandomElement(hashtags)
    ].join(" ");
  };

  const generatePostObj = timeOffset => {
    // if an offset is provided, make the timestamp that much older, otherwise just use the current time
    const timestamp = timeOffset
      ? new Date(new Date().getTime() - timeOffset)
      : new Date();

    return {
      friend: getRandomElement(bacefook.friendNames),
      text: generateRandomText(),
      feeling: getRandomElement(feelings),
      image: getRandomElement(images),
      timestamp
    };
  };

  const addPost = obj => {
    const friend = obj.friend;
    bacefook.friends[friend].push(obj);
    bacefook.newsfeed.push(obj);
  };

  const createPost = timeOffset => {
    const newPost = generatePostObj(timeOffset);
    addPost(newPost);
  };

  for (let i = 0; i < 10; i++) {
    // make the starting posts look like they were posted over the course of the past day
    const timeOffset = (2 * (10 - i) + Math.random()) * 60 * 60 * 1000;
    createPost(timeOffset);
  }

  const scheduler = () => {
    createPost(null);
    setTimeout(scheduler, (3 + Math.random() * 5) * 1000); // generate a new post every 3 to 8 seconds    
  };

  scheduler();
})();
