<script>
	import { user } from '$lib/stores/UserStore';
</script>

<div>
	<div>
		<span>{$user.firstname}</span>
		<span>{$user.lastname}</span>
	</div>
	<span>{$user.mail}</span>
</div>

<style>
</style>
