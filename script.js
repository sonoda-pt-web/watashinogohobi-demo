// ご提案用見本：予約ボタンのみ外部リンク。その他のボタンは表示のみ。
(function () {
  var toast = document.getElementById('toast');
  var timer = null;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-show');
    clearTimeout(timer);
    timer = setTimeout(function () {
      toast.classList.remove('is-show');
    }, 2600);
  }

  // Instagram・電話・Googleマップなどのボタン
  document.querySelectorAll('.js-dummy').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      showToast('見本のためリンクしていません');
    });
  });
})();
