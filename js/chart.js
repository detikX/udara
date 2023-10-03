const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni','Juli','Agustus','September', 'Oktober'],
      datasets: [{
        label: 'Suhu Udara',
        data: [34.5, 34.3, 35.3, 34, 35,34.5, 34.3, 33.3, 34, 35],
        borderWidth: 1
      }]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: false
    //     }
    //   }
    // }
  });