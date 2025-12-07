<script>
  import { Scissors } from "lucide-svelte";

  const year = new Date().getFullYear();
</script>

<footer class="bg-neutral-950 border-t border-neutral-800 py-12 px-4">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      
      <!-- Branding -->
      <div class="md:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <Scissors class="w-6 h-6 text-amber-600" />
          <span class="text-white uppercase tracking-wider">The Tailored Male</span>
        </div>
        <p class="text-neutral-400 mb-4">
          Quality haircuts at affordable prices. Serving the East Setauket community with excellent service.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-white mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="#home" class="text-neutral-400 hover:text-amber-600 transition-colors">Home</a></li>
          <li><a href="#services" class="text-neutral-400 hover:text-amber-600 transition-colors">Services</a></li>
          <li><a href="#about" class="text-neutral-400 hover:text-amber-600 transition-colors">About</a></li>
          <li><a href="#hours" class="text-neutral-400 hover:text-amber-600 transition-colors">Hours</a></li>
          <li><a href="#gallery" class="text-neutral-400 hover:text-amber-600 transition-colors">Gallery</a></li>
          <li><a href="#testimonials" class="text-neutral-400 hover:text-amber-600 transition-colors">Testimonials</a></li>
          <li><a href="#contact" class="text-neutral-400 hover:text-amber-600 transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Services List -->
      <div>
        <h4 class="text-white mb-4">Services</h4>
        <ul class="space-y-2 text-neutral-400">
          <li>Men's Haircut - $21</li>
          <li>Senior's Cut - $18</li>
          <li>Boy's Haircut - $19</li>
          <li>Shampoo & Blow Dry - $21</li>
          <li>Beard Trim - $7</li>
          <li>Goatee - $5</li>
        </ul>
      </div>

    </div>

    <!-- Copyright -->
    <div class="border-t border-neutral-800 pt-8 text-center text-neutral-500">
      <p>&copy; {year} The Tailored Male. All rights reserved.</p>
    </div>
  </div>
</footer>
