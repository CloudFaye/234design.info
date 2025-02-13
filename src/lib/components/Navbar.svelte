<script lang="ts">
	import { Separator } from "./ui/separator";

  export let rightItems = [
    {
    name: 'INDEX',
    href: '/'
    },
    {
    name: 'ABOUT',
    href: '/about'
    },
    {
    name: 'POST UP',
    href: '/apply'
    }];

 export let logo = [{
    name: '+234.creatives',
    href: '/' }
    
   ];


</script>


<div class=" px-6 flex flex-row items-center justify-between w-full fixed top-0 left-0 z-50 h-[80px] bg-[#080808] text-white  border-b border-neutral-800  ">

<div class="">
{#each logo as {name, href}}
<a class='font-larken font-semibold text-2xl' {href}>{name}</a>
{/each}
</div>



<div class=" font-roboto uppercase text-[14px]  flex gap-4">


{#each rightItems as {name, href}}

<a {href}>{name}</a>
<Separator class='w-[1px] h-[20px] ' />
{/each}
</div>

</div>