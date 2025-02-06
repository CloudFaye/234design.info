<script lang='ts'>
    export let data: PageData
import Designer from "$lib/components/Designer.svelte";
	import FilterSearch from "$lib/components/FilterSearch.svelte";
	import Header from "$lib/components/Header.svelte";
	import type { PageData } from "./$types";

    const designers = data.allDesigners
    const category = designers[40]?.category || '234-KREATORS '



</script>


<div class=" px-[24px] pt-[2vh] ">
   
    <Header category= {category} />
    
     <div class='list'> 
        {#each designers as designer}
            <Designer name={designer.name}  category={designer.category}  services={designer.services} />
        {/each}
    </div>
    
</div>



<style>

:root {
    --column: 287px;
}

.list {
    grid-column: 4 / -1;
    column-width: var(--column);
    column-gap: 0px;
    will-change: transform;
}


</style>