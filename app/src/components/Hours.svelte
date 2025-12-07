<script>
  import { onDestroy } from "svelte";
  import { Clock } from "lucide-svelte";
  import Card from "./ui/Card.svelte";

  const hours = [
    { day: "Monday", time: "9:00 - 18:00" },
    { day: "Tuesday", time: "9:00 - 18:00" },
    { day: "Wednesday", time: "9:00 - 18:00" },
    { day: "Thursday", time: "9:00 - 18:00" },
    { day: "Friday", time: "9:00 - 18:00" },
    { day: "Saturday", time: "9:00 - 17:30" },
    { day: "Sunday", time: "9:30 - 16:30" },
  ];

  // Current time reactive variable
  let now = new Date();

  // Update every minute
  const interval = setInterval(() => {
    now = new Date();
  }, 60_000);

  onDestroy(() => clearInterval(interval));

  // Helper: parse "HH:MM" → decimal hours
  function parseTime(str) {
    const [h, m] = str.split(":").map(Number);
    return h + (m ? m / 60 : 0);
  }

  // Check if a time range contains the current time
  function isOpen(timeRange, current) {
    const [open, close] = timeRange.split(" - ");
    const openH = parseTime(open);
    const closeH = parseTime(close);
    const currentH = current.getHours() + current.getMinutes() / 60;
    return currentH >= openH && currentH <= closeH;
  }

  // Today's index in the hours array (Monday = 0)
  const todayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;
</script>

<section id="hours" class="py-20 px-4 bg-neutral-950">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-amber-600 uppercase tracking-wider mb-4">Hours</h2>
      <p class="text-neutral-400 max-w-2xl mx-auto">
        Walk-ins welcome! We're here when you need us
      </p>
    </div>

    <div class="max-w-2xl mx-auto">
      <Card className="bg-neutral-900 border-neutral-800">
        <!-- Header -->
        <div slot="header" class="flex items-center justify-center gap-3">
          <Clock class="w-8 h-8 text-amber-600" />
          <h3 class="text-white leading-none">Store Hours</h3>
        </div>

        <!-- Content -->
        <div class="px-6 pb-6 pt-6 space-y-3">
          {#each hours as schedule, i}
            <div
              class={`flex justify-between items-center py-3 border-b border-neutral-800 last:border-0 transition-all duration-200 ${
                i === todayIndex ? "bg-neutral-800/30 rounded-xl" : ""
              }`}
            >
              <span
                class={i === todayIndex
                  ? "text-amber-600 font-semibold"
                  : "text-neutral-300"}
              >
                {schedule.day}
              </span>

              <div class="flex items-center gap-3">
                <span
                  class={i === todayIndex
                    ? "text-amber-500 font-semibold"
                    : "text-amber-600"}
                >
                  {schedule.time}
                </span>

                {#if i === todayIndex}
                  <span
                    class={`text-xs px-2 py-0.5 rounded-lg font-semibold ${
                      isOpen(schedule.time, now)
                        ? "bg-emerald-500 text-black"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {isOpen(schedule.time, now) ? "Open now" : "Closed now"}
                  </span>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </Card>
    </div>
  </div>
</section>
