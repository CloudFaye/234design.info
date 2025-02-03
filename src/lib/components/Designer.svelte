<script lang='ts'>
   
	import  ArrowUpRight  from "lucide-svelte/icons/arrow-up-right";
    import type { PageData , Actions } from "/Users/mac/Desktop/234design.info/.svelte-kit/types/src/routes/$types";
    let {name, category, services, ...others } = $props()
    


</script>



<div class='designer'>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <!-- svelte-ignore element_invalid_self_closing_tag -->

    <a href="#/" />

    <div class='name'>
        <h1 class='font-semibold text-[1rem] tracking-wide'>{name}</h1>
        <div class='ext leading-[8px] text-[#9D9D9D]'>... <ArrowUpRight class='size-4 stroke-[#9D9D9D]' />  </div>
    </div>
    <div class='details'>
        <p class=' font-sans text-[14px] text-[#9D9D9D]'> {category} {services}</p>
    </div>

</div>


<style >
:root {
    --margin: 8px;
}

.designer{
    width: calc(100% - var(--margin)* 2);
   
    margin: 0 0 1px var(--margin);
    break-inside: avoid;
    vertical-align: top;
    padding-left: 4px;
}

.name {
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items: center;
}


.ext {
    display: flex;
}

</style>