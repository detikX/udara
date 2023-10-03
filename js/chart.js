const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni','Juli','Agustus','September', 'Oktober'],
      datasets: [{
        label: 'Celcius',
        data: [34.5, 33.3, 34.3, 34, 35,34.5, 34.3, 33.3, 34, 35],
        borderWidth: 0
      }]
    },
    maintainAspectRatio: true,
    responsive: true,
    options: {
      plugins: {
        title: {
          display: true,
          text: "Rata-Rata Suhu Udara",
          color: "black",
          font: {
            family: "'Montserrat'", // Your font family
            size: 20,
            weight: "bold",
          },
  
          padding: {
            top: 10,
            bottom: 30,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            color: "black",
            text: "Bulan",
            font: {
              family: "'Montserrat'", // Your font family
              size: 14,
              weight: "bold",
            },
          },
          ticks: {
            color: "black",
            font: {
              family: "'Montserrat'", // Your font family
             size: 14,
            },
          },
        },
        y: {
          title: {
            display: true,
            color: "black",
            text: "Derajat Celcius",
            font: {
              family: "'Montserrat'", // Your font family
              size: 14,
              weight: "bold",
            },
            padding: 20,
          },
          ticks: {
            color: "black",
            font: {
              family: "'Montserrat'", // Your font family
              size: 14,
            },
          },
        },
      },
      animations: {
        backgroundColor: {
          duration: 2500,
          easing: "linear",
          to: "orange",
          from: "#e37e42",
          type: "color",
          loop: true,
        },
      },
    },
  });