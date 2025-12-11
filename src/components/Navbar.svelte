<script>
  import { Menu, X, MapPin, Phone, Clock } from "@lucide/svelte";
  import { onMount } from "svelte";

  let isOpen = false;
  let isScrolled = false;

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    // { label: "About", href: "#about" },
    { label: "Hours", href: "#hours" },
  ];

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    const handleClickOutside = (e) => {
      if (
        isOpen &&
        !e.target.closest("nav") &&
        !e.target.closest("button[aria-label*='menu']")
      ) {
        isOpen = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
</script>

<!-- Top Info Bar -->
<div class="fixed top-0 left-0 right-0 z-50 bg-(--surface-bright)">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div
      class="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm"
    >
      <div class="flex items-center gap-2">
        <MapPin class="w-4 h-4" color="var(--color-primary)" />
        <span>123 Main Street, East Setauket, NY 11733</span>
      </div>

      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <Phone class="w-4 h-4" color="var(--color-primary)" />
          <span>(631) 555 0123</span>
        </div>

        <div class="flex items-center gap-2">
          <Clock class="w-4 h-4" color="var(--color-primary)" />
          <span class="hidden lg:inline">
            Mon Fri: 9:00 6:00 | Sat: 9:00 5:30 | Sun: 9:30 4:30
          </span>
          <span class="lg:hidden">Open Daily</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Main Navigation -->
<nav
  class="
    fixed top-[50px] left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center
    {isScrolled
    ? 'bg-(--surface) backdrop-blur-sm shadow-lg'
    : 'bg-(--surface) backdrop-blur-sm'}
  "
  aria-label="Main Navigation"
>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-3">
      <a href="#home"> The Tailored Male Barber Shop </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-6">
        {#each navItems as item}
          <a
            href={item.href}
            class="navLink hover:text-(--color-primary) transition-colors"
            role="menuitem"
          >
            {item.label}
          </a>
        {/each}

        <a
          href="#contact"
          class="button px-4 py-2 border-(--color-primary) border rounded-sm"
          role="button"
        >
          Visit Us
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        class="md:hidden"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        on:click={() => (isOpen = !isOpen)}
      >
        {#if isOpen}
          <X class="w-6 h-6 text-(--color-on-surface)" />
        {:else}
          <Menu class="w-6 h-6 text-(--color-on-surface)" />
        {/if}
      </button>
    </div>

    <!-- Mobile Nav -->
    {#if isOpen}
      <div
        class="absolute top-full left-0 right-0 md:hidden py-4 px-4 space-y-3 bg-(--surface-container) border-t border-(--color-outline) animate-slide-down"
        role="menu"
      >
        {#each navItems as item}
          <a
            href={item.href}
            class="block text-(--color-on-surface) hover:text-(--color-primary) transition-colors px-2 py-2"
            role="menuitem"
            on:click={() => (isOpen = false)}
          >
            {item.label}
          </a>
        {/each}

        <div class="pt-4 border-t border-(--color-outline) mt-2">
          <a
            href="#contact"
            class="button px-4 py-2 border-(--color-primary) border rounded-sm text-center w-full block"
            role="button"
          >
            Visit Us
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

<style>
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global(.animate-slide-down) {
    animation: slideDown 0.3s ease-out;
  }

  a:not(.button) {
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
  }

  a:not(.button):hover {
    transform: translateY(-3px);
  }

  a:not(.button)::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--color-primary);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }

  a:not(.button):hover::before {
    transform: scaleY(1);
  }
</style>
