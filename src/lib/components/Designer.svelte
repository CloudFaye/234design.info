<script lang='ts'>
   
	import  ArrowUpRight  from "lucide-svelte/icons/arrow-up-right";
    import type { PageData , Actions } from "/Users/mac/Desktop/234design.info/.svelte-kit/types/src/routes/$types";
    let {name, category, portfolio, level,  ...others } = $props();
    import * as  Card from '$lib/components/ui/card';
	import { Cherry, Dot } from "lucide-svelte";
    


</script>


<div class=" font-roboto uppercase text-[14px] flex flex-row justify-betweeen items-center py-4 w-full h-fit">

<div class='flex items-center justify-start text-[14px] w-full'>
  <Dot class='size-[15px] mr-2 font-semibold ' />  
  {name}
</div>

<div class='flex text-[13px] text-neutral-600  w-full'><p>
  {category}
</p></div>

<div class='flex items-center justify-end w-full'>
<a href={portfolio} class='text-neutral-600 text-[13px]  '>lvl{level}</a>
<ArrowUpRight class='size-[13px] ' />
</div>

</div>

<style >
:root {
    --margin: 18px;
    --widdth: 400px
}







.ext {
    display: flex;
}

</style>