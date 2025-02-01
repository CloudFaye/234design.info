<script lang='ts'>
import Designer from "$lib/components/Designer.svelte";
	import FilterSearch from "$lib/components/FilterSearch.svelte";
	import Header from "$lib/components/Header.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";


</script>


<div class=" pl-[9.5%] ">
    <Sidebar />
    <Header />
    <FilterSearch /> 
     <div class='list'> 
      
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
        <Designer />
    </div>
    
</div>



<style>

:root {
    --column: 287px;
}

.list {
    grid-column: 4 / -1;
    column-width: var(--column);
    column-gap: 0;
    will-change: transform;
}
</style>