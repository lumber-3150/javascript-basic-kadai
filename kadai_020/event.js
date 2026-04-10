const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () =>{
  const h2 = document.getElementById('text');
  h2.innerHTML ="<h2>ボタンをクリックしました</h2>";
})