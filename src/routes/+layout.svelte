<script>
	import '../app.pcss';
	import Navbar from '$lib/components/extensions/navbar/navbar.svelte';
	import {ModeWatcher} from "mode-watcher";
</script>

<ModeWatcher />

<div class="flex min-h-screen flex-col bg-background">
	<Navbar>
		<slot></slot>
	</Navbar>
</div>
