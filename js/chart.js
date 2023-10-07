const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September'],
    datasets: [
      {
        label: 'Tahun 2023',
        data: [26.5, 26.4, 26.7, 27.1, 27.4, 27.0, 26.7, 26.7, 27.0],
        borderWidth: 0,
        backgroundColor: "#f97432",
      },
      {
        label: 'Tahun 2020',
        data: [26.4, 26.6, 26.6, 26.9, 27.0, 26.5, 26.1, 26.2, 26.6],
        borderWidth: 0,
        backgroundColor: "#333", //#513600
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1 / 1.5,
    plugins: {
      title: {
        display: true,
        text: "Rata-Rata Suhu Udara Tahun 2023",
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

      customCanvasBackgroundColor: {
        color: '#eddcc3',
      }
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
        min: 20,
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
    // animations: {
    //   backgroundColor: {
    //     duration: 2500,
    //     easing: "linear",
    //     to: "orange",
    //     from: "#e37e42",
    //     type: "color",
    //     loop: true,
    //   },
    // },
  },
});