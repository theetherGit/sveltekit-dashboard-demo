<script>
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { currentChatbot } from '$lib/utils.js';

	onNavigate(() => {
		currentChatbot.set($page.params?.chabotId);
		console.log($page.params);
	});
</script>
