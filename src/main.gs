// 引数にラベルを指定すると複数アカウントを使い分けられます (デフォルトのラベルは 'Twitter')
// ユーザープロパティに追加した以外の consumer key, consumer secret も利用できます
var twitterBot = 
 TwitterApp.create(
   'sleepOnTheXXXBot',
   PropertiesService.getScriptProperties().getProperty("TWITTER_KEY"),
   PropertiesService.getScriptProperties().getProperty("TWITTER_SECRET_KEY")
 );

// twitter認証
function authorize() {
  twitterBot.authorize();
}
 
// twitter認証解除
function reset() {
  twitterBot.reset();
}
 
// twitter認証後のコールバック
function authCallback(request) {
  return twitterBot.authCallback(request);
}

// メイン関数(発火)
function doGet() {
  postTweet();
}
    
// ツイートを投稿
function postTweet() {
  var tweet = random3Char() + "で寝ます( ˘ω˘ )";
  twitterBot.post('statuses/update', { status: tweet });
}

// ランダムの3文字アルファベット
function random3Char() {
  var str = "";
  for(var i = 0; i < 3; i++){
    str += randomChar();
  }
  return str;
}

// ランダムのアルファベット
function randomChar() {
  var c = "A";
  var ran = Math.floor(Math.random() * 26);
  var charCd = c.charCodeAt(0) + ran;
  return String.fromCharCode(charCd);
}

