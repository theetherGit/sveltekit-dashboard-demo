<script>
	import '../app.pcss';
	import Navbar from '$lib/components/extensions/navbar/navbar.svelte';
</script>

<div class="flex min-h-screen flex-col bg-background">
	<Navbar>
		<slot></slot>
	</Navbar>
</div>
