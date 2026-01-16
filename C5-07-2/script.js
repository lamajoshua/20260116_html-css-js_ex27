window.addEventListener('load', () => {
  const loadingElement = document.querySelector('#main');
  // ローディングが終了したらクラスを付与
  loadingElement.classList.add('loading-animation');
});