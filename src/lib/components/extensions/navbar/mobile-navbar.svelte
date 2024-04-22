<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { navItems } from './utils';
	import { slide } from 'svelte/transition';
	import { onNavigate } from '$app/navigation';

	export let currentPage: Array<string> = [];
	export let pageParams: Array<string> = [];

	let mobileSideNavSheetState = false;

	onNavigate(() => {
		if (mobileSideNavSheetState) mobileSideNavSheetState = false;
	});
</script>

<Sheet.Root bind:open={mobileSideNavSheetState}>
	<Sheet.Trigger asChild let:builder>
		<Button variant="ghost" size="icon" class="shrink-0 lg:hidden" builders={[builder]}>
			<Menu class="h-7 w-7" />
			<span class="sr-only">Toggle navigation menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="flex flex-col">
		<nav class="flex flex-col space-y-1 text-lg font-medium">
			<a href="/dashboard/daily-analytics" class="flex items-center gap-2 text-lg font-semibold">
				<img class="h-5 w-5" src="/logo.svg" alt="Botified Chat" />
				<span>Botified Chat</span>
			</a>
			{#each navItems as mainNav}
				<a
					href={mainNav.href}
					class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground {currentPage.length ===
						2 && currentPage.includes(mainNav.activeCondition)
						? 'bg-secondary-foreground/10'
						: 'hover:bg-secondary-foreground/10'}"
				>
					<svelte:component this={mainNav.icon} class="h-5 w-5" />
					{mainNav.label}
				</a>
				{#if mainNav.conditionForSubNav && (pageParams.includes(mainNav.conditionForSubNav) || currentPage.includes(mainNav.conditionForSubNav))}
					<div class="ml-4 grid gap-1" transition:slide>
						{#each mainNav.subRoutes as subNav}
							<a
								href={subNav.href}
								class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground {currentPage.includes(
									subNav.activeCondition
								)
									? 'bg-secondary-foreground/10'
									: 'hover:bg-secondary-foreground/10'}"
							>
								<svelte:component this={subNav.icon} class="h-5 w-5" />
								{subNav.label}
							</a>
						{/each}
					</div>
				{/if}
			{/each}
		</nav>
	</Sheet.Content>
</Sheet.Root>
