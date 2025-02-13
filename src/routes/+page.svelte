<script lang='ts'>
    const  {data, allDesigners, designField,  designServices, className='', tooling, ...props } = $props<{ data: PageData }>();
    import Designer from "$lib/components/Designer.svelte";;
	import type { PageData } from "./$types";
	import Filters from "$lib/components/Filters.svelte";
    import { cn } from '$lib/utils';

	
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

    const designerClasses = cn(
        "designer"
    );

    const filterClass = cn(
        "filter"
    )
</script>


<div class="home">
<div class="home-inner  grid grid-cols-1 gap-8 relative md:grid-cols-6 lg:grid-cols-6    ">

     <div class=" p-20 h-full col-span-3">
    <div class=" bg-neutral-800 w-full h-full items-center justify-center flex flex-col">
     
       </div>
     </div>

    <div  class="h-full col-span-3 overflow-y-scroll text-white pr-10 mt-[64px] ">
     <Filters filteredCount={filteredResult.length} data={data} on:filterUpdate={handleFilterUpdate} />
     
     
      {#each filteredResult as designer}
     <div class="  ">
     <Designer 
                name={designer.name} 
                category={designer.category}
                portfolio={designer.portfolio}
                level={designer.level}
                class='designer'
                className={designerClasses}
            />
 
           </div>   
           
     {/each}
   
   

  
    </div>


</div>
</div>




<style lang="postcss">

.home-inner {
    height: 100%;
    opacity: 1;
    position: relative;
    transform: translateZ(0px);
}


.home {
    height: calc(100vh - 50px);
    min-height: 690px;
    overflow: hidden;
    position: relative;
    text-transform: uppercase;
}

.designer {
    transition: opacity 0.3s ease;
    
}

.designer {
    visibility: hidden;
    
}

.designer > * {
      visibility: visible;
    }

  .designer > * { transition: linear 500ms; }

.designer:hover > * { opacity: 0.4 }

.designer > *:hover { opacity: 1; }



</style>