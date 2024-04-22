<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Activity, CircleGauge, Contact } from 'lucide-svelte';
	import { ChatBubble } from 'svelte-radix';
</script>

<div class="grid gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Today's Conversations</Card.Title>
			<ChatBubble class="h-4 w-4 text-muted-foreground" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">120000</div>
			<p class="text-xs text-muted-foreground">+20.1% from last yesterday</p>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Today's Neuron Usages</Card.Title>
			<CircleGauge class="h-4 w-4 text-muted-foreground" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">500000</div>
			<p class="text-xs text-muted-foreground">+10% from yesterday</p>
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">New Leads</Card.Title>
			<Contact class="h-4 w-4 text-muted-foreground" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">+12,000</div>
			<p class="text-xs text-muted-foreground">+19% from yesterday</p>
		</Card.Content>
	</Card.Root>

	<Card.Root>
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Active Now</Card.Title>
			<Activity class="h-4 w-4 text-muted-foreground" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">+573</div>
			<p class="text-xs text-muted-foreground">+201 since last hour</p>
		</Card.Content>
	</Card.Root>
</div>
