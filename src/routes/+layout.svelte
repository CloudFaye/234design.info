<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<main class=' p-4 bg-[#080808] min-h-screen'>
	<Navbar />	
	{@render children()}
</main>




<style>
	@font-face {
		font-family: 'Roboto-Mono' ;
		font-style: normal ;
		font-display: swap;
		font-weight: 100 200 300 400 500 600 700 800 900;
		src: url(/static/fonts/RobotoMono-VariableFont_wght.ttf) format('ttf');
	}

	@font-face {
		font-family: 'Larken' ;
		font-style: normal ;
		font-display: swap;
		font-weight: 100 200 300 400 500 600 700 800 900;
		src: url(/static/fonts/LarkenVariable-Regular.ttf) format('ttf');
	}


</style>

