<script lang='ts'>
let containerElement: HTMLDivElement
let menuOpen = false;

function toggleMenu (){
    menuOpen = !menuOpen
}

function handleOutsideClick(event: MouseEvent){
    if ( containerElement && !containerElement.contains(event.target as Node)) {
        menuOpen = false;
    }
}




</script>

<svelte:window on:click={handleOutsideClick} />


<div 
bind:this={containerElement}
class:expanded={menuOpen}
 class="sidebar transition-all duration-300 ease-in-out absolute hidden w-[32px]  h-screen right-0 top-0 bg-[#1e1e1e] text-white border-l-2   border-l-neutral-500 z-10  ">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <p class:hidden={menuOpen} on:click={toggleMenu} >MENU</p>
    
    

    {#if menuOpen}
    <div class="menu-slide  p-4  shadow-md">
      <ul>
        <li><a href="/">By Category</a></li>
        <li><a href="/">By Services</a></li>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <li><a href="/apply">Apply</a></li>
      </ul>
    </div>
  {/if}
</div>


<style>


    @media (min-width: 1000px) {
        .sidebar{
        visibility: visible;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        transition: display 0.3s ease-in;
        }
       
    }

p {
    padding: 16px;
    cursor: pointer;
    width: fit-content;
    
}

.sidebar {
    width: auto;
    transition: display 0.8s ease-in;
  }

  .expanded {
    width: 30vw;
    transition: display 0.8s ease-in;
  }

  .menu-slide {
    right: 0;
    top: 0;
    
  }

 li {
    cursor: pointer;
 }


</style>