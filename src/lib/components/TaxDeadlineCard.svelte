<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Calendar, Clock, AlertTriangle, ChevronRight } from 'lucide-svelte';

	interface Props {
		title: string;
		date: string;
		description: string;
		category: 'individual' | 'business' | 'quarterly' | 'payroll';
		daysUntil?: number;
		urgent?: boolean;
	}

	let { title, date, description, category, daysUntil, urgent = false }: Props = $props();

	const categoryStyles = {
		individual: 'bg-primary/10 text-primary border-primary/20',
		business: 'bg-accent/10 text-accent border-accent/20',
		quarterly: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
		payroll: 'bg-purple-500/10 text-purple-600 border-purple-500/20'
	};

	const categoryLabels = {
		individual: 'Individual',
		business: 'Business',
		quarterly: 'Quarterly',
		payroll: 'Payroll'
	};
</script>

<Card.Root class="relative overflow-hidden hover:shadow-lg transition-all duration-300 {urgent ? 'border-destructive/50 ring-2 ring-destructive/20' : ''}">
	{#if urgent}
		<div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive to-destructive/50"></div>
	{/if}

	<Card.Content class="p-5">
		<div class="flex items-start justify-between gap-4">
			<div class="flex-1">
				<!-- Category Badge -->
				<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border {categoryStyles[category]}">
					{categoryLabels[category]}
				</span>

				<!-- Title -->
				<h3 class="text-lg font-semibold text-foreground mt-3">{title}</h3>

				<!-- Description -->
				<p class="text-sm text-muted-foreground mt-1">{description}</p>
			</div>

			<!-- Date Display -->
			<div class="flex flex-col items-center justify-center bg-secondary rounded-xl p-3 min-w-[80px]">
				<Calendar class="h-5 w-5 text-primary mb-1" />
				<span class="text-sm font-bold text-foreground">{date}</span>
			</div>
		</div>

		<!-- Days Until Countdown -->
		{#if daysUntil !== undefined}
			<div class="flex items-center justify-between mt-4 pt-4 border-t border-border">
				<div class="flex items-center gap-2">
					{#if urgent}
						<AlertTriangle class="h-4 w-4 text-destructive" />
						<span class="text-sm font-medium text-destructive">
							{daysUntil === 0 ? 'Due Today!' : daysUntil === 1 ? '1 day left!' : `${daysUntil} days left!`}
						</span>
					{:else}
						<Clock class="h-4 w-4 text-muted-foreground" />
						<span class="text-sm text-muted-foreground">
							{daysUntil === 0 ? 'Due Today' : daysUntil === 1 ? '1 day remaining' : `${daysUntil} days remaining`}
						</span>
					{/if}
				</div>

				<a href="/contact" class="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
					Get Help
					<ChevronRight class="h-4 w-4" />
				</a>
			</div>
		{/if}
	</Card.Content>
</Card.Root>
