<script>
  import logo from "$assets/logo.png?url";
  import heroBg from "$assets/hero-bg.jpg?url";
</script>

<section
  id="home"
  style="background-image: url({heroBg}); background-size: cover; background-position: center;"
  class="relative min-h-screen flex justify-center items-center text-center"
>
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative z-10 flex flex-col items-center text-white px-4 gap-4">
    <img alt="The project logo" src={logo} />
    <h1>
      Great Cuts <span class="text-[--color-primary]"><br />For Men</span>
    </h1>
    <p>Quality Haircuts at Affordable Prices</p>
    <div class="flex gap-4 place-items-center">
      <a href="#services" class="button-primary mr-4" role="button">
        Our Services
      </a>
      <a href="#contact" class="button-secondary" role="button"> Visit Us </a>
    </div>
  </div>
</section>
