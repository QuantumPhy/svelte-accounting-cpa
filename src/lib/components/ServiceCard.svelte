<script lang="ts">
	import { templateHref } from '$lib/preview-path';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { ChevronRight, Check } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	interface Props {
		title: string;
		description: string;
		icon: ComponentType;
		features: string[];
		href?: string;
		featured?: boolean;
	}

	let { title, description, icon: Icon, features, href = '/services', featured = false }: Props = $props();
</script>

<Card.Root class="relative overflow-hidden group hover:shadow-xl transition-all duration-300 {featured ? 'border-accent ring-2 ring-accent/20' : 'border-border'}">
	{#if featured}
		<div class="absolute top-0 right-0">
			<div class="gold-gradient text-foreground text-xs font-semibold px-4 py-1 rounded-bl-lg">
				Popular
			</div>
		</div>
	{/if}

	<Card.Header class="pb-4">
		<div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mb-4 group-hover:scale-110 transition-transform">
			<Icon class="h-7 w-7 text-primary" />
		</div>
		<Card.Title class="text-xl font-bold text-foreground">{title}</Card.Title>
		<Card.Description class="text-muted-foreground mt-2">
			{description}
		</Card.Description>
	</Card.Header>

	<Card.Content class="pb-4">
		<ul class="space-y-2">
			{#each features as feature}
				<li class="flex items-start gap-2 text-sm text-muted-foreground">
					<Check class="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
					<span>{feature}</span>
				</li>
			{/each}
		</ul>
	</Card.Content>

	<Card.Footer>
		<Button variant="outline" class="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn" href={templateHref(href)}>
			Learn More
			<ChevronRight class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
		</Button>
	</Card.Footer>
</Card.Root>
