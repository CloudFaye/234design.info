<script lang='ts'>
    const  {data, allDesigners, designField,  designServices, tooling, ...props } = $props<{ data: PageData }>();
    import Designer from "$lib/components/Designer.svelte";;
	import type { PageData } from "./$types";
	import Filters from "$lib/components/Filters.svelte";

	
    const designers = data.allDesigners;
    let searchTerm = $state('');
    let selectedServices = $state<string[]>([]);

    // Get unique services from all designers
    const availableServices = $derived([...new Set(
       data.designServices[0].map((service: { field_name: string }) => service.field_name)
    )].sort());

     console.log('field sample:', data.designServices[0]?.field_name);

    // Filter results based on both search term and selected services
    const filteredResult = $derived(
        data.allDesigners.filter((designer: { 
            name: string, 
            category: string[]
        }) => {
            const matchesSearch = searchTerm 
                ? designer.name.toLowerCase().includes(searchTerm.toLowerCase())
                : true;

            const matchesServices = selectedServices.length === 0 
                ? true 
                : selectedServices.some(selected => 
                    designer.category.includes(selected)
                );



            return matchesSearch && matchesServices;
        })
    );

    // Add debug logging to check data structure
    $effect(() => {
        console.log('Selected Services:', selectedServices);
        console.log('Filtered Designers:', filteredResult);
    });
       $effect(() => {
        console.log('Design Services:', data.designServices);
    });

    function handleFilterUpdate(event: CustomEvent<{ selectedServices: string[] }> ){
        selectedServices = event.detail.selectedServices;
    }


    
</script>

<div class=" gap-5 p-4 mx-0 mt-[80px]  lg:gap-8 lg:p-0   flex flex-row items-start justify-start  ">
<!--  <fieldset class='p-5 rounded-lg text-balance border border-slate-600 fixed h-screen left-4 top-4 z-10 bg-slate-800 w-[20%] '>
    <p class='text-lg mb-4 text-white font-semibold'> Sort by Designer field</p>
    {#if availableServices && availableServices.length > 0}
        {#each availableServices as service}
            <label class='flex flex-col text-white my-2 gap-2 '>
                <div class='flex flex-row w-fit gap-2'>
                  <input 
                    bind:group={selectedServices}
                    class='bg-transparent size-4 text-white  rounded-full border-[1px] border-neutral-600' 
                    type="checkbox" 
                    name="services" 
                    value={service}
                />
                <p class=' uppercase text-xs'>{service} </p>
                
                </div>
              
                <Separator class=' h-[1px] w-full bg-slate-700 ' />
                
            </label>
        {/each}
    {:else}
        <p>No services available</p>
    {/if}
</fieldset> -->
<!--  <div class=" w-full grid relative grid-cols-3  gap-2">

         {#each filteredResult as designer}
            <Designer 
                name={designer.name} 
                category={designer.category}
                portfolio={designer.portfolio}
            />
        {/each}
</div>  -->
<div class="w-[48vw] h-full hidden lg:flex  left-[1rem] top-[80px]  items-center justify-center p-10  text-white">
    <div class=" bg-purple-950 w-full h-full items-center justify-center flex flex-col">
        <h1> djjdjdjdjdjd</h1>
        <img src="/favicon.png" alt="">
        <img src="/favicon.png" alt="">
        <img src="/favicon.png" alt="">
        <img src="/favicon.png" alt="">
        <img src="/favicon.png" alt="">
       </div>
</div>
<div class="w-full lg:w-[50vw] h-full flex flex-col items-start justify-start text-white">
     <Filters filteredCount={filteredResult.length} data={data} on:filterUpdate={handleFilterUpdate}  />
       {#each filteredResult as designer}
            <Designer 
                name={designer.name} 
                category={designer.category}
                portfolio={designer.portfolio}
                level={designer.level}
            />
        {/each}
</div>
</div>


<style>
body {
    --column: 400px;
    --height: 100px;
    font-family: 'Roboto-Mono', monospace;
}


.search-input {
    padding: 10px;
    width: 300px;
    box-sizing: border-box;
    border: 1.5px solid rgb(167, 167, 167);
    border-radius: 12px;
    color: black;
  }
</style>