<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<main class=' text-white bg-[#1e1e1e] min-h-screen'>
	<Sidebar />
	{@render children()}
</main>

