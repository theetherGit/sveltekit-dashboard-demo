<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<div class="grid md:grid-cols-2 gap-x-2">
	<Card.Root>
		<Card.Header class="pb-3">
			<Card.Title>Chatbot A</Card.Title>
			<Card.Description class="max-w-lg text-balance leading-relaxed">
				Introducing a OSS chatbot builder for everyone.
			</Card.Description>
		</Card.Header>
		<Card.Footer>
			<Button href="/chatbots/chatbot-a/analytics">Demo A</Button>
		</Card.Footer>
	</Card.Root>

	<Card.Root>
		<Card.Header class="pb-3">
			<Card.Title>Chatbot B</Card.Title>
			<Card.Description class="max-w-lg text-balance leading-relaxed">
				Introducing a OSS chatbot builder for everyone.
			</Card.Description>
		</Card.Header>
		<Card.Footer>
			<Button href="/chatbots/chatbot-b/analytics">Demo B</Button>
		</Card.Footer>
	</Card.Root>
</div>

