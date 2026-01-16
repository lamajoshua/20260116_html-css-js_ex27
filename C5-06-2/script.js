const loadingElement = document.getElementById('loading');

// 進捗状況の数値
let progress = 0;

// 10ミリ秒毎に数値を加算しテキストを更新する
const intervalId = setInterval(() => {
  progress++;
  loadingElement.textContent = progress + '%';

  // 100% に達したらローディングを終了し、フェードアウト
  if (progress >= 100) {
    clearInterval(intervalId);
    loadingElement.classList.add('fade-out');
  }
}, 10);