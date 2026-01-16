const container = document.querySelector('#snow-container');

const createSnow = () => {
    // 1. 雪の要素を作る
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // 2. ランダムなサイズ (2px 〜 7px)
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // 3. ランダムな開始位置 (画面の左端から右端まで)
    // 斜めに降るので、画面の左端よりさらに左(-10vw)からスタートさせると画面全体が埋まる
    particle.style.left = `${Math.random() * 120 - 10}vw`; 

    // 4. ランダムな落下速度 (3秒 〜 8秒)
    // 遠くの雪は遅く、近くの雪は速く見える効果になります
    const duration = Math.random() * 5 + 3;
    particle.style.animationDuration = `${duration}s`;

    // 5. ランダムな透明度 (0.4 〜 1.0)
    // 奥行き感を出すため
    particle.style.opacity = Math.random() * 0.6 + 0.4;

    // 6. コンテナに追加
    container.appendChild(particle);

    // 7. アニメーションが終わったら要素を削除
    // これをしないと雪が無限に増え続けてブラウザがクラッシュします
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
};

// 0.1秒ごとに雪を生成する
// もっと激しく降らせたい場合は数値を小さく（例：50）、
// チラチラさせたい場合は大きく（例：200）してください。
setInterval(createSnow, 50);