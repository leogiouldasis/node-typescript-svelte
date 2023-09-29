<script>
	import '../app.css';
</script>


<div class="navbar bg-base-100">
  <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
  <a href="/about" class="btn btn-ghost normal-case text-xl">About</a>
</div>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <slot />
    </div>
  </div>
</div>

<footer class="footer p-10 bg-base-200 text-base-content">
  <aside>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100">
      <rect x="0" y="0" width="200" height="100" rx="15" ry="15" fill="#4CAF50"/>
      <text x="100" y="55" font-size="24" text-anchor="middle" fill="#FFFFFF">I Told You Guys</text>
    </svg>
    
    <p>itoldyouguys.com<br/>Trying to make a point since 2023</p>
  </aside> 
  <!-- <nav>
    <header class="footer-title">Services</header> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header class="footer-title">Company</header> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header class="footer-title">Legal</header> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </nav> -->
</footer>