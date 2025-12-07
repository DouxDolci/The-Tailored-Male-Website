<script>
  import { Star } from "lucide-svelte";
  import Card from "./ui/Card.svelte";

  const testimonials = [
    {
      text: "Excellent haircut, clean shop, everyone was very friendly and you can't beat the prices!!! I'll be back.",
      author: "Happy Customer",
    },
    {
      text: "A great example of a small business that understands service and appreciation of its customers.",
      author: "Satisfied Client",
    },
    {
      text: "Best haircut I've had my entire life. The staff is super friendly and they took me immediately.",
      author: "Local Resident",
    },
    {
      text: "Prompt, courteous service at a great price including neck and side burn shave. Great flat tops too!",
      author: "Regular Customer",
    },
  ];
</script>

<section id="testimonials" class="py-20 px-4 bg-black">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-amber-600 uppercase tracking-wider mb-4">Testimonials</h2>
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
                <Star class="w-5 h-5 fill-amber-600 text-amber-600" />
              {/each}
            </div>

            <p class="text-neutral-300 mb-4 italic">
              "{testimonial.text}"
            </p>

            <p class="text-amber-600">
              {testimonial.author}
            </p>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
