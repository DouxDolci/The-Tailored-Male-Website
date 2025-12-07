<script>
  import { MapPin, Phone } from "lucide-svelte";
  import Card from "./ui/Card.svelte";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "East Setauket, NY",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "Call for appointments",
    },
  ];
</script>

<section id="contact" class="py-20 px-4 bg-black">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-amber-600 uppercase tracking-wider mb-4">Contact Us</h2>
      <p class="text-neutral-400 max-w-2xl mx-auto">
        Ready to look your best? Visit us or give us a call
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each contactInfo as item}
          <Card class="bg-neutral-900 border-neutral-800">
            <div class="flex items-start gap-4 p-6">
              <div
                class="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center flex-shrink-0"
              >
                <svelte:component
                  this={item.icon}
                  class="w-6 h-6 text-amber-600"
                />
              </div>
              <div>
                <h4 class="text-white mb-1">{item.title}</h4>
                <p class="text-neutral-400">{item.info}</p>
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </div>
</section>
