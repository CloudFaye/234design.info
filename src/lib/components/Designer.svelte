<script lang='ts'>
	import  ArrowUpRight  from "lucide-svelte/icons/arrow-up-right";


</script>



<div class='designer'>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <a href="#/" />

    <div class='name'>
        <h1 class='font-semibold text-[1rem] tracking-wide'>Designer name A</h1>
        <div class='ext leading-[8px] text-[#9D9D9D]'>... <ArrowUpRight class='size-4 stroke-[#9D9D9D]' />  </div>
    </div>
    <div class='details'>
        <p class='font-thin font-mono text-[14px] text-[#9D9D9D] ' > [Art Direction, Copywriting, Editoal Media, Videomaking, Web Design 
            3D Motion, AdvertiMotion Graphics, Websites] 
            (TO)
        </p>
    </div>

</div>


<style >
:root {
    --margin: 15px;
}

.designer{
    width: calc(100% - var(--margin)* 2);
    position: relative;
    margin: 0 0 0px var(--margin);
    break-inside: avoid;
    vertical-align: top;
    border-left: 1px solid #585858;
    padding-left: 20px;
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