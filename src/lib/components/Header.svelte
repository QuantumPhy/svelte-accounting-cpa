<script lang="ts">
	import { templateHref } from '$lib/preview-path';
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Calculator, Menu, Phone, Clock, MapPin, BarChart3 } from 'lucide-svelte';

	let isScrolled = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/industries', label: 'Industries' },
		{ href: '/team', label: 'Team' },
		{ href: '/tax-center', label: 'Tax Center' },
		{ href: '/contact', label: 'Contact' }
	];

	function handleScroll() {
		isScrolled = window.scrollY > 20;
	}
</script>

<svelte:window onscroll={handleScroll} />

<!-- Top Bar -->
<div class="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
	<div class="container mx-auto px-4 flex justify-between items-center">
		<div class="flex items-center gap-6">
			<span class="flex items-center gap-2">
				<Clock class="h-4 w-4" />
				Mon-Fri: 8:00 AM - 6:00 PM
			</span>
			<span class="flex items-center gap-2">
				<MapPin class="h-4 w-4" />
				456 Financial District, Suite 200
			</span>
		</div>
		<div class="flex items-center gap-2">
			<Phone class="h-4 w-4" />
			<span>(555) 234-8200</span>
		</div>
	</div>
</div>

<!-- Main Header -->
<header
	class="sticky top-0 z-50 w-full transition-all duration-300 {isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background'}"
>
	<div class="container mx-auto px-4">
		<nav class="flex items-center justify-between h-16 lg:h-20">
			<!-- Logo -->
			<a href={base + "/"} class="flex items-center gap-3 group">
				<div class="relative">
					<div class="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
					<div class="relative bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
						<div class="flex items-center gap-0.5">
							<Calculator class="h-5 w-5 lg:h-6 lg:w-6 text-white" />
							<BarChart3 class="h-4 w-4 lg:h-5 lg:w-5 text-white/80" />
						</div>
					</div>
				</div>
				<div class="flex flex-col">
					<span class="text-lg lg:text-xl font-bold text-primary">Greenfield & Associates</span>
					<span class="text-xs lg:text-sm text-muted-foreground -mt-1">Certified Public Accountants</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center gap-8">
				{#each navLinks as link}
					<a
						href={templateHref(link.href)}
						class="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
					>
						{link.label}
						<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
					</a>
				{/each}
			</div>

			<!-- CTA Button -->
			<div class="hidden lg:flex items-center gap-4">
				<Button variant="outline" class="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
					Client Portal
				</Button>
				<Button class="gold-gradient text-white hover:opacity-90">
					Request Quote
				</Button>
			</div>

			<!-- Mobile Menu -->
			<div class="lg:hidden">
				<Sheet.Root>
					<Sheet.Trigger>
						{#snippet child({ props })}
							<Button {...props} variant="ghost" size="icon">
								<Menu class="h-6 w-6" />
							</Button>
						{/snippet}
					</Sheet.Trigger>
					<Sheet.Content side="right" class="w-80">
						<Sheet.Header>
							<Sheet.Title class="flex items-center gap-2">
								<Calculator class="h-6 w-6 text-primary" />
								Greenfield & Associates
							</Sheet.Title>
						</Sheet.Header>
						<div class="flex flex-col gap-4 mt-8">
							{#each navLinks as link}
								<a
									href={templateHref(link.href)}
									class="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border"
								>
									{link.label}
								</a>
							{/each}
							<div class="flex flex-col gap-3 mt-4">
								<Button variant="outline" class="w-full border-primary text-primary">
									Client Portal
								</Button>
								<Button class="w-full gold-gradient text-white">
									Request Quote
								</Button>
							</div>
							<div class="mt-6 space-y-3 text-sm text-muted-foreground">
								<p class="flex items-center gap-2">
									<Clock class="h-4 w-4" />
									Mon-Fri: 8:00 AM - 6:00 PM
								</p>
								<p class="flex items-center gap-2">
									<Phone class="h-4 w-4" />
									(555) 234-8200
								</p>
								<p class="flex items-center gap-2">
									<MapPin class="h-4 w-4" />
									456 Financial District, Suite 200
								</p>
							</div>
						</div>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</nav>
	</div>
</header>
