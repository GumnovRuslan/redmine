<script>
	export let tag = 'p';
	export let label = 'some paragraph';
	export let color = 'black';
</script>

<svelte:element this={tag} style="color: {color}">{label}</svelte:element>

<style>
</style>
