<script>
	export let tag = 'p';
	export let label = 'some paragraph';
	export let color = 'black';
	export let styleProps = '';
</script>

<svelte:element this={tag} style="color: {color}; {styleProps}">{label}</svelte:element>

<style>
</style>
