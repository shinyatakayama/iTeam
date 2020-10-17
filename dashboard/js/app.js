// グラフオプションの title 指定を削除しただけです
(function() {
    var blue = 'rgb(54, 162, 235)';
    var gray = 'rgb(99, 99, 99)';
  
    var data = {
      datasets: [{
        data: [87, 13],
        backgroundColor: [blue, gray],
      }],
    };
  
    // グラフオプション
    var options = {
      // グラフの太さ（中央部分を何％切り取るか）
      cutoutPercentage: 65,
      // 凡例を表示しない
      legend: { display: false },
      // 自動サイズ変更をしない
      responsive: false,
      // マウスオーバー時に情報を表示しない
      tooltips: { enabled: false },
    };
  
    // グラフ描画
    var ctx = document.getElementById('chart-area').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
  })();
  