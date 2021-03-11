/* global Chart, coreui, coreui.Utils.getStyle */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v4.0.0-alpha.1): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
Chart.defaults.global.pointHitDetectionRadius = 1
Chart.defaults.global.tooltips.enabled = false
Chart.defaults.global.tooltips.mode = 'index'
Chart.defaults.global.tooltips.position = 'nearest'
Chart.defaults.global.tooltips.custom = coreui.ChartJS.customTooltips

document.body.addEventListener('classtoggle', event => {
  if (event.detail.className === 'c-dark-theme') {
    if (document.body.classList.contains('c-dark-theme')) {
      cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary-dark-theme')
      cardChart2.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-info-dark-theme')
    } else {
      cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary')
      cardChart2.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-info')
    }

    cardChart1.update()
    cardChart2.update()
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart1 = new Chart(document.getElementById('card-chart1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: coreui.Utils.getStyle('--cui-primary'),
        data: [65, 59, 84, 84, 51, 55, 40]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 35,
          max: 89
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart2 = new Chart(document.getElementById('card-chart2'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: coreui.Utils.getStyle('--cui-info'),
        data: [1, 18, 9, 17, 34, 22, 11]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: -4,
          max: 39
        }
      }]
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart3 = new Chart(document.getElementById('card-chart3'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart4 = new Chart(document.getElementById('card-chart4'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        barPercentage: 0.6
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  }
})

// Random Numbers
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// eslint-disable-next-line no-unused-vars
const sparklineChart1 = new Chart(document.getElementById('sparkline-chart-1'), {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
    datasets: [
      {
        backgroundColor: coreui.Utils.getStyle('--cui-primary'),
        borderColor: 'transparent',
        borderWidth: 1,
        data: [random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100)]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  }
})

// eslint-disable-next-line no-unused-vars
const sparklineChart2 = new Chart(document.getElementById('sparkline-chart-2'), {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
    datasets: [
      {
        backgroundColor: coreui.Utils.getStyle('--cui-warning'),
        borderColor: 'transparent',
        borderWidth: 1,
        data: [random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100)]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  }
})

// eslint-disable-next-line no-unused-vars
const sparklineChart3 = new Chart(document.getElementById('sparkline-chart-3'), {
  type: 'bar',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
    datasets: [
      {
        backgroundColor: coreui.Utils.getStyle('--cui-success'),
        borderColor: 'transparent',
        borderWidth: 1,
        data: [random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100)]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    }
  }
})

// eslint-disable-next-line no-unused-vars
const sparklineChart4 = new Chart(document.getElementById('sparkline-chart-4'), {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: coreui.Utils.getStyle('--cui-info'),
        borderWidth: 2,
        data: [random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100)]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const sparklineChart5 = new Chart(document.getElementById('sparkline-chart-5'), {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: coreui.Utils.getStyle('--cui-success'),
        borderWidth: 2,
        data: [random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100)]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const sparklineChart6 = new Chart(document.getElementById('sparkline-chart-6'), {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: coreui.Utils.getStyle('--cui-danger'),
        borderWidth: 2,
        data: [random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100), random(40, 100)]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
})

const brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const brandBoxChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display:false
    }],
    yAxes: [{
      display:false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
}

// eslint-disable-next-line no-unused-vars
const brandBoxChart1 = new Chart(document.getElementById('social-box-chart-1'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
  },
  options: brandBoxChartOptions
})

// eslint-disable-next-line no-unused-vars
const brandBoxChart2 = new Chart(document.getElementById('social-box-chart-2'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [1, 13, 9, 17, 34, 41, 38]
    }]
  },
  options: brandBoxChartOptions
})

// eslint-disable-next-line no-unused-vars
const brandBoxChart3 = new Chart(document.getElementById('social-box-chart-3'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [78, 81, 80, 45, 34, 12, 40]
    }]
  },
  options: brandBoxChartOptions
})
