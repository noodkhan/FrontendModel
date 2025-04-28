<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MyWebsite</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet">
  <style>
    .custom-dialog { background-color: #343a40; padding: 2rem; border-radius: 0.5rem; }
  </style>
</head>
<body class="d-flex flex-column min-vh-100">

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">

      <!-- Navbar toggle button for mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavMobile">
        <span class="pi pi-bars"></span>
      </button>

      <!-- Brand -->
      <a class="navbar-brand fw-bold" href="/">MyWebsite</a>

      <!-- Notifications -->
      <li class="nav-item position-relative me-3 list-unstyled">
        <button class="btn btn-outline-primary position-relative" type="button">
          <i class="pi pi-bell"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
          </span>
        </button>
      </li>

      <!-- Navbar items -->
      <div class="collapse navbar-collapse" id="navbarNavMobile">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/helloworld">Starting</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dashboard">Dashboard</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-warning">Logout</button>
          </li>
        </ul>
      </div>

    </div>
  </nav>

  <!-- Main Content -->
  <main class="container my-5 flex-grow-1">
    <div class="alert alert-warning mt-5 text-center">
      ⚠️ Please login to access more features.
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer bg-dark text-white py-4 mt-5">
    <div class="container text-center">

      <!-- About Us Section -->
      <div class="mb-3" style="background-color: #333; border-radius: 5px; padding: 15px;">
        <h5>About Us</h5>
        <p class="mb-0">We are committed to delivering top-quality services and creating lasting value for our customers.</p>
      </div>

      <!-- Navigation Section -->
      <div class="mb-3">
        <a href="/" class="text-white me-3">Home</a>
        <a href="/products" class="text-white me-3">Products</a>
        <a href="/services" class="text-white me-3">Services</a>
        <a href="/about" class="text-white me-3">About Us</a>
        <a href="/contact" class="text-white me-3">Contact</a>
      </div>

      <!-- Social Media Section -->
      <div class="mb-3">
        <a href="#" class="text-white me-3" target="_blank" title="Facebook">
          <i class="pi pi-facebook"></i>
        </a>
        <a href="#" class="text-white me-3" target="_blank" title="Twitter">
          <i class="pi pi-twitter"></i>
        </a>
        <a href="#" class="text-white me-3" target="_blank" title="Instagram">
          <i class="pi pi-instagram"></i>
        </a>
        <a href="#" class="text-white me-3" target="_blank" title="LinkedIn">
          <i class="pi pi-linkedin"></i>
        </a>
      </div>

      <!-- Copyright -->
      <p class="mb-0">&copy; 2025 Your Website. All rights reserved.</p>
    </div>
  </footer>

  <!-- Bootstrap JS (for navbar toggling) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
