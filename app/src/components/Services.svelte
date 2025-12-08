<script>
  import { Scissors, Sparkles, User, Users } from "lucide-svelte";
  import Card from "./ui/Card.svelte";

  const services = [
    {
      icon: Scissors,
      title: "Men's Haircut",
      description: "Quality haircuts at affordable prices",
      price: "$21.00",
    },
    {
      icon: User,
      title: "Senior Men's (62 and over)",
      description: "Special pricing for seniors",
      price: "$18.00 Mon Fri, $21.00 Sat Sun",
    },
    {
      icon: Users,
      title: "Boy's Haircut (12 and under)",
      description: "Great cuts for young men",
      price: "$19.00 Mon Fri, $21.00 Sat Sun",
    },
    {
      icon: Sparkles,
      title: "Men's Shampoo Cut  Blow Dry",
      description: "Complete wash, cut, and style service",
      price: "$21.00",
    },
    {
      icon: Scissors,
      title: "Goatee",
      description: "Trim your facial hair to perfection",
      price: "$5.00",
    },
    {
      icon: Scissors,
      title: "Beard Trim",
      description: "Professional beard trimming (razor is extra)",
      price: "$7.00",
    },
  ];
</script>

<section id="services" class="py-20 px-4 bg-neutral-950">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class=" uppercase tracking-wider mb-4">Haircuts and Grooming</h2>
      <p class="max-w-2xl mx-auto">Quality haircuts at affordable prices</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each services as service}
        <Card
          className="bg-neutral-900 border-neutral-800 hover:border-amber-600 transition-all duration-300"
        >
          <!-- Header -->
          <div slot="header">
            <div
              class="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center mb-4"
            >
              <svelte:component
                this={service.icon}
                class="w-6 h-6 text-(--color-primary)"
              />
            </div>
            <h3 class="text-white leading-none">{service.title}</h3>
            <p class="text-neutral-400">{service.description}</p>
          </div>

          <!-- Content -->
          <span class="">{service.price}</span>
        </Card>
      {/each}
    </div>
  </div>
</section>
