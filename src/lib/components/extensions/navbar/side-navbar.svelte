<script lang="ts">
	import { navItems } from './utils.js';
	import { slide } from 'svelte/transition';

	export let currentPage: Array<string> = [];
	export let pageParams: Array<string> = [];
</script>

<div class="flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-4">
	{#each navItems as mainNav}
		<div class="px-3 py-2">
			<a href={mainNav.href} class="w-fit px-4">
				<button
					class="inline-flex h-9 w-full items-center justify-start rounded-md px-2 py-2 text-lg font-medium transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 {currentPage.length ===
						2 && currentPage.includes(mainNav.activeCondition)
						? 'bg-secondary-foreground/10'
						: 'hover:bg-secondary-foreground/10'}"
				>
					<svelte:component this={mainNav.icon} class="mr-2 h-4 w-4" />
					{mainNav.label}
				</button>
			</a>
			{#if mainNav.conditionForSubNav && (pageParams.includes(mainNav.conditionForSubNav) || currentPage.includes(mainNav.conditionForSubNav))}
				<div class="ml-4 mt-2 flex flex-col gap-1" transition:slide>
					{#each mainNav.subRoutes as subNav}
						<a href={subNav.href}>
							<button
								class="mb-1 inline-flex h-9 w-full items-center justify-start rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 {currentPage.includes(
									subNav.activeCondition
								)
									? 'bg-secondary-foreground/10'
									: 'hover:bg-secondary-foreground/10'}"
							>
								<svelte:component this={subNav.icon} class="mr-2 h-4 w-4" />
								{subNav.label}
							</button></a
						>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
