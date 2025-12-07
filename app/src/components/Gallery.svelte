<script>
  import ImageWithFallback from "./figma/ImageWithFallback.svelte";

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjMyMDY2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Barber cutting hair",
    },
    {
      url: "https://images.unsplash.com/photo-1533808232502-bee53575c3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW1taW5nfGVufDF8fHx8MTc2MzI3NDkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Beard trimming",
    },
    {
      url: "https://images.unsplash.com/photo-1678356163587-6bb3afb89679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjB0b29sc3xlbnwxfHx8fDE3NjMyMTAzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Barber tools",
    },
    {
      url: "https://images.unsplash.com/photo-1629881544138-c45fc917eb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwY2hhaXJ8ZW58MXx8fHwxNzYzMjcxNDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Barbershop chair",
    },
    {
      url: "https://images.unsplash.com/photo-1610475680335-dafab5475150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzMTc2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Barbershop interior",
    },
    {
      url: "https://images.unsplash.com/photo-1674287146797-87c893c7407a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFyYmVyc2hvcHxlbnwxfHx8fDE3NjMyNzQ5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Vintage barbershop",
    },
  ];
</script>

<section id="gallery" class="py-20 px-4 bg-neutral-950">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-amber-600 uppercase tracking-wider mb-4">Gallery</h2>
      <p class="text-neutral-400 max-w-2xl mx-auto">
        Take a look at our craftsmanship and the experience we provide
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each galleryImages as image}
        <div class="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
          <ImageWithFallback 
            src={image.url} 
            alt={image.alt} 
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
          />
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      {/each}
    </div>
  </div>
</section>
