
<script lang='ts'>
    const  {data, allDesigners, designField,  designServices, tooling, className='', filteredCount = 0, ...props } = $props<{ data: PageData, filteredCount?: number }>();
	import * as DropdownMenu  from "./ui/dropdown-menu";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
	import { ChevronDown } from "lucide-svelte";
	import type { PageData } from "../../routes/$types";
	import { Separator } from "./ui/separator";
	import { createEventDispatcher } from "svelte";
    let searchTerm = $state('');
    let selectedServices = $state<string[]>([]);

    const availableServices = $derived([...new Set(
       data.designServices[0].map((service: { field_name: string }) => service.field_name)
    )].sort());


    const dispatch = createEventDispatcher<{filterUpdate: { selectedServices: string[]}}>();
     $effect(() => {
        dispatch('filterUpdate', { selectedServices });
    });

    

</script>


<div  class="font-roboto uppercase text-[13px] absolute lg:relative bottom-0 w-full flex flex-col justify-center items-start py-4 ">
    <p class="w-full"> Showing {filteredCount}  CREATIVES </p>
    
 <DropdownMenu.Root >
  <DropdownMenu.Trigger class={buttonVariants({ variant: "outline", size: "sm" })}>
    All Creatives <ChevronDown class='size-3' /> </DropdownMenu.Trigger
  >
  <DropdownMenu.Content class="w-full">
    <DropdownMenu.Group>
      <DropdownMenu.GroupHeading>Looking for </DropdownMenu.GroupHeading>
      <DropdownMenu.Separator />
     <fieldset class=' text-black  text-balance  w-full '>
    {#if availableServices && availableServices.length > 0}
        {#each availableServices as service}
            <label class='flex flex-col text-white my-2 gap-2 '>
                <div class='flex flex-row w-fit gap-2'>
                  <input 
                    bind:group={selectedServices}
                    class='bg-transparent size-4 text-black rounded-full border-[1px] border-neutral-600' 
                    type="checkbox" 
                    name="services" 
                    value={service}
                />
                <p class=' text-black uppercase text-xs'>{service} </p>
                
                </div>
              
                <Separator class=' h-[1px] w-full bg-slate-700 ' />
                
            </label>
        {/each}
    {:else}
        <p>No services available</p>
    {/if}
</fieldset>
      
   
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
</div>