<script lang="ts">
	import { mode, resetMode, setMode } from 'mode-watcher';
	import MobileNavbar from './mobile-navbar.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	export let currentPage: Array<string> = [];
	export let pageParams: Array<string> = [];
</script>

<header class="fixed z-10 w-full border-b border-border bg-background">
	<div class="mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<div class="mr-auto flex">
				<MobileNavbar {currentPage} {pageParams} />
				<div class="ml-2 flex flex-shrink-0 items-center space-x-2">
					<img class="block h-7 w-7" src="/logo.svg" alt="" />
					<h2 class="hidden text-xl font-bold md:block">Botified Chat</h2>
				</div>
			</div>
			<div class="flex items-center justify-end space-x-6 sm:ml-5">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="flex max-w-xs items-center rounded-full bg-secondary focus:outline-none"
					>
						<img
							class="h-8 w-8 rounded-full bg-secondary object-cover"
							src="https://api.dicebear.com/7.x/croodles/png?seed=Shivam"
							alt=""
						/>
						<span class="ml-2 mr-3 hidden text-sm font-medium md:block"> Shivam Meena </span>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="min-w-[12rem]">
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.RadioGroup value={$mode}>
							<DropdownMenu.Label>Dashboard Appearance</DropdownMenu.Label>
							<DropdownMenu.RadioItem
								on:click={() => {
									setMode('dark');
								}}
								value="dark">Dark</DropdownMenu.RadioItem
							>
							<DropdownMenu.RadioItem
								on:click={() => {
									setMode('light');
								}}
								value="light">Light</DropdownMenu.RadioItem
							>
							<DropdownMenu.RadioItem on:click={() => resetMode()} value="system"
								>System</DropdownMenu.RadioItem
							>
						</DropdownMenu.RadioGroup>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Sign Out</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
</header>
