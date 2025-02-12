<script lang="ts">
    import { Motion, AnimateSharedLayout } from "svelte-motion";
    const tabs = [
      {
        title: "Index 🗂️",
      },
      {
        title: "Hire a Designer",
      },
      {
        title: "About",
      },
    
    ];
    let activeIdx = 0;
  </script>
  
  <div class="relative flex flex-row text-balance  items-center justify-center">
    <AnimateSharedLayout>
      {#each tabs as item, i}
        <button
          class="group  text-white relative z-[1] rounded-full px-3 py-2 {activeIdx === i
            ? 'z-0'
            : ''} "
          on:click={() => {
            activeIdx = i;
          }}
        >
          {#if activeIdx === i}
            <Motion
              layoutId="clicked-btn"
              transition={{ duration: 0.2, type:'spring', stiffness: 300, damping: 30 }}
              let:motion
            >
              <div
                use:motion
                class="absolute inset-0 rounded-full bg-green-900 text-white"
              ></div>
            </Motion>
          {/if}
          <span
            class="relative text-sm block font-medium duration-200 {activeIdx ===
            i
              ? 'text-white delay-100'
              : 'text-white'}"
          >
            {item.title}
          </span>
        </button>
      {/each}
    </AnimateSharedLayout>
  </div>
  