# sleep_on_the_XXX_bot

XXXで寝ますとツイートするボット(※XXX：ランダムのアルファベット大文字3文字)

## 仕組み
* Google Apps Script(GAS)でスクリプトを実行します。
  - スクリプト内で、TwitterAPIを使用してツイートを行います。
* GASのトリガー設定を行うことで、定期実行(1日ごと、1時間ごと等)が行えます。

## 導入手順(ざっくり)
### 前提
* Twitter Developerアカウントが必要です。英語で文章書くのに慣れてない方は大変ですが頑張ってください。

### 手順
1. プロジェクトの作成、各種設定、認証
* Google Apps Script(GAS) で新規プロジェクトを作る。
* プロジェクト内にこのコードを入れる。
* 以下のサイトに従って設定する。

```
https://github.com/yarnaimo/gas-twitter-app

■注意点
> 作成したアプリの Consumer Key, Consumer Secret をそれぞれ TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET の名前で追加して保存
とありますが、私のコードでは、TWITTER_KEY、TWITTER_SECRET_KEY という変数名にしている。

* Twitter認証の前に、Googleのダイアログも出るはず。このアカウントでスクリプトの実行を承認する。
```

2. スケジュールの設定

GASの機能でスケジュールを設定します。
* プロジェクト一覧の右側の…の部分からトリガーを選択する。
* (+ トリガーを追加)ボタンを押下し、トリガーを追加して設定する。
  - 実行する関数をdoGet、時間間隔を適切なものを選択する。

## 参考URL
* TwitterApp for Google Apps Script

https://github.com/yarnaimo/gas-twitter-app

