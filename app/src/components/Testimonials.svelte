<script>
  import { Star } from "lucide-svelte";
  import Card from "./ui/Card.svelte";

  const testimonials = [
    {
      text: "This place does a really good job. Never had anyone do so much detail and ask what I wanted and how I wanted it really great People, great prices And atmosphere. ",
      author: "Happy Customer",
    },
    {
      text: "I always get greeted by friendly staff when I'm in there. Definitely a 5 star, classy, friendly, and family-oriented kinda place.",
      author: "Satisfied Client",
    },
    {
      text: "Everyone is very professional and friendly, the prices are very reasonable, and the facility was clean. Haircuts and the beard trim were excellent.",
      author: "Local Resident",
    },
    {
      text: "The staff is super friendly and they took me immediately. I waited a couple of weeks to write this because I wanted to see how my hair would grow in, and I couldn’t be happier. ",
      author: "Regular Customer",
    },
  ];
</script>

<section id="testimonials" class="py-20 px-4 bg-black">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class=" uppercase tracking-wider mb-4">Testimonials</h2>
      <p class="text-neutral-400 max-w-2xl mx-auto">
        Hear what people have to say
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each testimonials as testimonial}
        <Card className="bg-neutral-900 border-neutral-800">
          <div class="px-6 pb-6 pt-6">
            <div class="flex gap-1 mb-4">
              {#each Array(5) as _}
                <Star class="w-5 h-5 fill-(--color-primary)" />
              {/each}
            </div>

            <p class="mb-4 italic">
              "{testimonial.text}"
            </p>

            <p class="">
              {testimonial.author}
            </p>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
