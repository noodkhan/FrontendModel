<template>
    <div class="container mt-5">
      <h1 class="text-center mb-5">E-Commerce Admin Dashboard</h1>
  
   <!-- Dashboard Stats -->
<div class="row g-4 mb-5">
  <div class="col-12 col-md-6 col-lg-3" v-for="card in statsCards" :key="card.title">
    <div class="card shadow-sm border-0 text-center h-100 rounded-4">
      <div class="card-body d-flex flex-column justify-content-center align-items-center p-4">
        <h6 class="text-secondary fw-semibold text-uppercase small">{{ card.title }}</h6>
        <h2 class="text-primary mt-2 mb-0 fw-bold">{{ card.value }}</h2>
      </div>
    </div>
  </div>
</div>

  
      <!-- Charts Section -->
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card shadow border-light">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0">Monthly Revenue</h5>
            </div>
            <div class="card-body">
              <Line :data="revenueChartData" :options="chartOptions" />
            </div>
          </div>
        </div>
  
        <div class="col-md-6 mb-4">
          <div class="card shadow border-light">
            <div class="card-header bg-success text-white">
              <h5 class="card-title mb-0">Monthly Orders</h5>
            </div>
            <div class="card-body">
              <Bar :data="ordersChartData" :options="chartOptions" />
            </div>
          </div>
        </div>
  
        <div class="col-md-12 mb-4">
          <div class="card shadow border-light">
            <div class="card-header bg-warning text-white">
              <h5 class="card-title mb-0">Website Visitors</h5>
            </div>
            <div class="card-body">
              <Line :data="visitorsChartData" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Recent Activities -->
      <div class="card shadow border-light mb-5">
        <div class="card-header bg-info text-white">
          <h5 class="card-title mb-0">Recent Activities</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li v-for="(activity, index) in recentActivities" :key="index" class="list-group-item">
              {{ activity }}
            </li>
          </ul>
        </div>
      </div>
  
      <!-- System Status -->
      <div class="card shadow border-light mb-5">
        <div class="card-header bg-dark text-white">
          <h5 class="card-title mb-0">System Status</h5>
        </div>
        <div class="card-body">
          <p><strong>Server Status:</strong> <span class="text-success">Online</span></p>
          <p><strong>Last Backup:</strong> {{ lastBackupTime }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { Line, Bar } from 'vue-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
  } from 'chart.js';
  
  // Register Chart.js components
  ChartJS.register(Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, PointElement);
  
  // Dashboard stats
  const statsCards = ref([
    { title: 'Total Users', value: 0 },
    { title: 'Total Orders', value: 0 },
    { title: 'Revenue', value: '$0' },
    { title: 'Visitors', value: 0 },
  ]);
  
  const recentActivities = ref([]);
  const lastBackupTime = ref('');
  
  // Chart Data
  const revenueChartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue ($)',
        backgroundColor: '#4e73df',
        borderColor: '#4e73df',
        data: [5000, 10000, 7500, 15000, 12500, 20000],
        tension: 0.4,
        fill: true,
      },
    ],
  });
  
  const ordersChartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Orders',
        backgroundColor: '#1cc88a',
        data: [150, 300, 250, 400, 350, 500],
      },
    ],
  });
  
  const visitorsChartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Visitors',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: '#f6c23e',
        data: [2000, 4000, 3500, 6000, 5000, 7000],
        tension: 0.4,
        fill: true,
      },
    ],
  });
  
  const chartOptions = ref({
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: false },
    },
  });
  
  // Fetch backend dashboard data
  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/dashboard/summary`);
      const data = response.data;
  
      statsCards.value = [
        { title: 'Total Users', value: data.totalUsers },
        { title: 'Total Orders', value: data.totalOrders },
        { title: 'Revenue', value: `$${data.totalRevenue}` },
        { title: 'Visitors', value: data.totalVisitors },
      ];
  
      recentActivities.value = data.recentActivities || [];
      lastBackupTime.value = new Date(data.lastBackup).toLocaleString();
  
      // Optional: update chart data dynamically
      revenueChartData.value.datasets[0].data = data.revenueByMonth || revenueChartData.value.datasets[0].data;
      ordersChartData.value.datasets[0].data = data.ordersByMonth || ordersChartData.value.datasets[0].data;
      visitorsChartData.value.datasets[0].data = data.visitorsByMonth || visitorsChartData.value.datasets[0].data;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };
  
  onMounted(() => {
    fetchDashboardData();
  });
  </script>
  
  <style scoped>
  .card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
  .card-title {
    font-weight: 600;
  }
  .card-body {
    min-height: 300px;
  }
  h1 {
    font-weight: bold;
  }
  </style>
  