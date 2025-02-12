<script lang='ts'>
	import { fade, slide } from "svelte/transition";

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
   class="sidebar transition-all duration-300 ease-in-out w-full  hidden relative bg-[#141A15] text-white    z-10  ">
    <div class="flex flex-row items-center justify-between  w-full">
      <p class='font-bold text-2xl'>234design.info</p>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class:hidden={menuOpen} on:click={toggleMenu} class=""><p  >Menu 📂</p></div>
    </div>
      
      
  
      {#if menuOpen}
      <div  transition:slide class=" right-0  p-4  w-full shadow-md">
        <ul>
          <li><a href="/">Design Field</a></li>
          <li><a href="/">Services/Deliverables</a></li>
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <li><a href="/apply">Are you an NG designer ? <strong class='underline text-green-500'>Post up</strong></a></li>
        </ul>
     
      
      </div>
    {/if}
  </div>
  

  
  <style>
  
  
      @media (min-width: 1000px) {
          .sidebar{
          visibility: visible;
          display: flex;
          flex-direction: row;
          align-items: start;
          justify-content: start;
          transition: display 0.3s ease-in;
          
          margin-top: 2px;
          margin-bottom: 32px;
          }
         
      }
  
  p {
      padding: 16px;
      cursor: pointer;
      width: fit-content;
      
  }
  
  .sidebar {
      transition: display 0.8s ease-in;
      border-radius: 6px;
    }
  
    .expanded {
      text-wrap: none;
      transition: display 0.8s ease-in;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  
    .menu-slide {
     display: flex;
    }
  
   li {
      cursor: pointer;
   }
  
  ul {
    display: flex;
    gap: 16px;
  }
  
  </style>