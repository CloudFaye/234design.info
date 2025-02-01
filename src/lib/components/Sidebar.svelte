<script lang='ts'>
	import SidebarFooter from "./SidebarFooter.svelte";
import Svg from "./Svg.svelte";



</script>


<div class="fixed w-[300px] p-6 h-screen left-0 top-0 bg-[#1e1e1e] text-white border-r-2 justify-between flex flex-col  border-r-neutral-500 z-10  ">


 <h1 class=' text-3xl font-thin'>234design <strong>.info</strong></h1>


<div class="flex flex-col ">
    <p>By Service</p>
    <p>By Category</p>
    <p>Apply</p>
    <p>Publish</p>
    <p>Search</p>
</div>


<!-- briefly about 234design.inf0-->
<div class="">
    <div class=' mb-4'>
        <h2 class=' mt-10 text-balance text-[1.1rem] '>List of design professionals from lagos and ibadan, Nigeria</h2>
    
        <p class=' mt-2 font-light text-neutral-400  text-balance text-[0.9rem] '>234design.info collects 470 freelancers, studios, and junior designers, listed based on the professional 
            categories and the services offered. No search engine algorithms, our tool lists everything democratically in alphabetical order.
        </p>
        
    </div>
    <!--sidebar footer-->
    <SidebarFooter />
</div>

</div>