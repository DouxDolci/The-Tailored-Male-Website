<script>
  export let className = "";
</script>

<div
  class={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border ${className}`}
>
  {#if $$slots.header}
    <div
      class="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6
             @container/card-header
             has-[data-slot=card-action]:grid-cols-[1fr_auto]
             border-b:border-neutral-800 border-b pb-6"
    >
      <slot name="header" />
      <slot name="action" />
    </div>
  {/if}

  {#if $$slots.default}
    <div class="px-6 last:pb-6">
      <slot />
    </div>
  {/if}

  {#if $$slots.footer}
    <div
      class="flex items-center px-6 pb-6 border-t:border-neutral-800 border-t pt-6"
    >
      <slot name="footer" />
    </div>
  {/if}
</div>
