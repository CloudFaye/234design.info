<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main class='p-8 text-white bg-[#1e1e1e] h-screen '>
	{@render children()}
</main>

