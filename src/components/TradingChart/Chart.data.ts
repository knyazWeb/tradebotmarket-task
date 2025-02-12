import { ChartData, ChartOptions } from 'chart.js';
import gradient from 'chartjs-plugin-gradient';

export const options: ChartOptions<any> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    colors: {
      forceOverride: true,
    },
    gradient,
    tooltip: {
      enabled: false,
    },
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        drawTicks: false,
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
    },
    y: {
      ticks: {
        display: false,
        color: 'rgba(255, 255, 255, 0.2)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.05)',
        drawTicks: false,
      },
    },
  },
};

export const labels = ['', '22.04', '23.04', '24.04', '25.04', '26.04', ''];

export const data: ChartData<'line', number[], string> = {
  labels,
  datasets: [
    {
      fill: true,
      data: [65.6, 59.1, 80.2, 81.3, 56.4, 70.6, 40.8],
      borderColor: 'rgb(53, 162, 235)',
      tension: 0.2,
      pointHoverRadius: 5,
      borderWidth: 1,
      pointRadius: 0,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'rgb(53, 162, 235)',
      pointHoverBorderWidth: 1.5,
      gradient: {
        backgroundColor: {
          axis: 'y',
          colors: {
            100: 'rgba(30, 80, 134, 0.9)',
            50: 'rgba(30, 80, 134, 0.2)',
            0: 'rgba(53, 162, 235, 0.05)',
          },
        },
      },
    },
  ],
};
