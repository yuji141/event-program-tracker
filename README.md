# Event Program Tracker

体育祭やイベント向けの進行管理アプリです。

CSVファイルを読み込み、現在の進行状況をスマートフォンで確認できます。

## Demo

https://yuji141.github.io/event-program-tracker/

## Features

- CSVファイルの読み込み
- プログラム一覧の表示
- 現在進行中プログラムの強調表示
- プログラムのタップ選択
- 前へ / 次へボタンによる進行操作
- 現在時刻ライン表示
- スマートフォン対応

## CSV Format

CSVファイルは以下の形式で作成します。

```csv
09:00,開会式
09:20,100m走
10:00,綱引き
10:30,リレー
```

1列目に時刻、2列目にプログラム名を入力します。

## Technologies

- HTML
- CSS
- JavaScript

## Usage

1. アプリを開く
2. CSVファイルを選択
3. プログラム一覧を表示
4. タップまたは前へ / 次へボタンで進行状況を変更

## Future Improvements

- localStorageによる状態保存
- PWA対応
- ドラッグ＆ドロップによるCSV読み込み
- 遅延時間表示
- プログラムの追加・編集機能
- ダークモード対応

## Screenshots

スマートフォン表示のスクリーンショットを今後追加予定

## License

MIT License
