<script lang="ts">
    import { Separator } from "./ui/separator";
    import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

     let rightItems = [
        { name: 'INDEX', href: '/' },
        { name: 'ABOUT', href: '/about' },
        { name: 'POST UP', href: '/apply' }
    ];

    let logo = [{ name: '+234.creatives', href: '/' }];
    
    // Accept custom classes through props
    let className = '';
    let navItemClass = '';
    let logoClass = '';

    const navClasses = cn(
        'fixed text-white top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm',
        className
    );

    const navItemClasses = cn(
        'text-sm font-medium transition-colors hover:text-primary',
        navItemClass
    );

    const logoClasses = cn(
        'text-xl font-bold tracking-tighter',
        logoClass
    );

    let isMobileMenuOpen = $state(false);
    function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
}

let isScrolled = $state(false);
$inspect(isMobileMenuOpen);

  onMount(() => {
    const handleScroll = () => {
        isScrolled = window.scrollY > 0;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
});
</script>

<nav class={navClasses}>
    <div class=" px-3 flex h-14 items-center justify-between flex-row ">
        <!-- Logo Section -->
        <div class="flex items-center ">
           
                {#each logo as { name, href }}
                    <a {href} class={logoClasses}>
                        {name}
                    </a>
                {/each}
      
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center ">
                {#each rightItems as { name, href }}
                    <a {href} class={navItemClasses} >
                      {name}
                    </a>
                {/each}

        </div>

        <!-- Mobile Navigation Button -->
        <button 
            class="md:hidden p-2"
            onclick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>

       
            {#if isMobileMenuOpen}
                <div transition:fade class="fixed top-[57px] left-0 w-full text-black h-[400px] bg-white z-50 flex items-center justify-center" >
                    <div class="flex flex-col items-center space-y-4">
                        {#each rightItems as { name, href }}
                            <a {href} class={navItemClasses} >
                                {name}
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
 
    
</nav>
 
<style lang="postcss">
    /* Custom CSS styles */
    :global(.navbar-scrolled) {
        @apply shadow-md;
    }

    /* Mobile menu animation */
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    .mobile-nav {
        display: none;
    }
</style>