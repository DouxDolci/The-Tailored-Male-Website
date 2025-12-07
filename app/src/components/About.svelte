<script>
  import ImageWithFallback from "./figma/ImageWithFallback.svelte";
  import { Award, Clock, Users } from "lucide-svelte";

  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "5000+" },
    { icon: Clock, label: "Hours Open/Week", value: "70+" },
  ];
</script>

<section id="about" class="py-20 px-4 bg-black">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Text & Stats -->
      <div>
        <h2 class="text-amber-600 uppercase tracking-wider mb-6">About Us</h2>
        <h3 class="text-white mb-6">Where Craftsmanship Meets Character</h3>

        <div class="space-y-4 text-neutral-400">
          <p>
            The Tailored Male has been serving the East Setauket community with
            quality haircuts at affordable prices. Our experienced barbers are
            dedicated to providing excellent service in a clean and friendly
            environment.
          </p>
          <p>
            We pride ourselves on being a small business that truly understands
            service and appreciation of our customers. From classic cuts to
            modern styles, flat-tops to beard trims, we do it all with prompt
            and courteous service.
          </p>
          <p>
            Walk-ins are always welcome! Our friendly staff is ready to give you
            the best haircut you've ever had, and our prices simply can't be
            beat.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 mt-12">
          {#each stats as stat}
            <div class="text-center">
              <svelte:component
                this={stat.icon}
                class="w-8 h-8 text-amber-600 mx-auto mb-2"
              />
              <div class="text-white mb-1">{stat.value}</div>
              <div class="text-neutral-500 text-sm">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Image -->
      <div class="relative">
        <div class="aspect-square rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1674287146797-87c893c7407a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmFyYmVyc2hvcHxlbnwxfHx8fDE3NjMyNzQ5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Barbershop"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-amber-600 rounded-lg -z-10"
        ></div>
      </div>
    </div>
  </div>
</section>
