<script lang='ts'>
   
	import  ArrowUpRight  from "lucide-svelte/icons/arrow-up-right";
    import type { PageData , Actions } from "/Users/mac/Desktop/234design.info/.svelte-kit/types/src/routes/$types";
    let {name, category, portfolio, level, className='', ...others } = $props();
    import * as  Card from '$lib/components/ui/card';
	import { Cherry, Dot } from "lucide-svelte";
    


</script>


<div class="  cursor-pointer font-roboto uppercase text-[14px] grid grid-cols-6 gap-8 w-full mt-6">

<div class='items-center flex col-span-3 '>
  <Dot class='size-[15px] mr-2 font-semibold ' />  
  {name}
</div>

<div class= ' flex items-center col-span-2'><p>
  {category}
</p></div>

<div class='items-center justify-end text-right flex col-span-1'>
<a href={portfolio} class='text-neutral-600 text-[13px]  '>lvl{level}</a>
<ArrowUpRight class='size-[13px] ' />
</div>

</div>

<style >
:root {
    --margin: 18px;
    --widdth: 400px
}






</style>