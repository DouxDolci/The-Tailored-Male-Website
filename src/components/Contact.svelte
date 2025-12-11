<script>
  import { MapPin, Phone } from "lucide-svelte";
  import Card from "./ui/card.svelte";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "1387 NY-25A, East Setauket",
      link: "https://maps.app.goo.gl/EkguQdBT7n23c3iM9",
    },
    {
      icon: Phone,
      title: "Phone",
      info: "(631) 675-9444",
      link: "tel:+16316759444",
    },
  ];
</script>

<section
  id="contact"
  style="scroll-margin-top: 7em;"
  class="py-20 px-4 bg-black"
>
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="uppercase tracking-wider mb-4">Contact Us</h2>
      <p class=" max-w-2xl mx-auto">
        Ready to look your best? Visit us or give us a call
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each contactInfo as item}
          <Card>
            <a
              href={item.link}
              target="_blank"
              class="block bg-neutral-900 border border-neutral-800 rounded-xl hover:border-(--color-primary) transition-all duration-300"
            >
              <div class="flex items-start gap-4 p-6">
                <div
                  class="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center shrink-0"
                >
                  <svelte:component
                    this={item.icon}
                    class="w-6 h-6 text-(--color-primary)"
                  />
                </div>

                <div>
                  <h4 class="text-white mb-1">{item.title}</h4>
                  <p class="">{item.info}</p>
                </div>
              </div>
            </a>
          </Card>
        {/each}
      </div>
    </div>
  </div>
  <div class="flex place-content-center">
    <iframe
      class="my-12 rounded-xl"
      title="google map embed"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8288.72394902677!2d-73.11138462302516!3d40.93588237136062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e83f730ffb7cdd%3A0x8c61c0d1ea371dd4!2sThe%20Tailored%20Male!5e1!3m2!1sen!2sus!4v1765207658271!5m2!1sen!2sus"
      width="840"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>
