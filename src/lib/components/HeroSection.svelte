<script lang="ts">
	import { base } from '#lib/template-base.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { ChevronRight, Calculator, Shield, Award, TrendingUp } from 'lucide-svelte';

	interface Props {
		title?: string;
		subtitle?: string;
		description?: string;
		primaryCta?: string;
		secondaryCta?: string;
		imageUrl?: string;
	}

	let {
		title = 'Your Trusted Financial Partner',
		subtitle = 'Greenfield & Associates · Sample Practice',
		description = 'Expert accounting, tax planning, and business advisory services. We help individuals and businesses achieve financial success with personalized strategies and proactive guidance.',
		primaryCta = 'Request Quote',
		secondaryCta = 'Our Services',
		imageUrl = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920'
	}: Props = $props();

	const stats = [
		{ icon: Shield, value: '6', label: 'Core Services' },
		{ icon: Award, value: '6', label: 'Industry Highlights' },
		{ icon: TrendingUp, value: '3', label: 'Team Highlights' }
	];
</script>

<section class="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src={imageUrl}
			alt="Professional office environment"
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50"></div>
	</div>

	<!-- Chart Grid Pattern -->
	<div class="absolute inset-0 chart-grid opacity-20"></div>

	<!-- Content -->
	<div class="container mx-auto px-4 py-16 lg:py-24 relative z-10">
		<div class="max-w-3xl">
			<!-- Badge -->
			<div class="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
				<Calculator class="h-4 w-4" />
				<span class="text-sm font-medium">{subtitle}</span>
			</div>

			<!-- Title -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
				{title}
			</h1>

			<!-- Description -->
			<p class="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
				{description}
			</p>

			<!-- CTAs -->
			<div class="flex flex-col sm:flex-row gap-4 mb-12">
				<Button href={base + "/contact/#form"} size="lg" class="gold-gradient text-foreground hover:opacity-90 text-lg px-8 py-6">
					{primaryCta}
					<ChevronRight class="ml-2 h-5 w-5" />
				</Button>
				<Button href={base + "/services/"} size="lg" variant="outline" class="bg-transparent border-white/60 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6">
					{secondaryCta}
				</Button>
			</div>

			<!-- Stats -->
			<div class="grid grid-cols-3 gap-6 md:gap-12">
				{#each stats as stat}
					<div class="text-center md:text-left">
						<div class="flex items-center justify-center md:justify-start gap-2 mb-2">
							<stat.icon class="h-5 w-5 text-amber-300" />
							<span class="text-2xl md:text-3xl font-bold text-white number-ticker">{stat.value}</span>
						</div>
						<span class="text-sm text-white/60">{stat.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Trust Indicators -->
	<div class="relative z-10 w-full bg-foreground/80 py-6">
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm">
				<div class="flex items-center gap-2">
					<Award class="h-5 w-5 text-amber-300" />
					<span>Sample CPA Credential</span>
				</div>
				<div class="flex items-center gap-2">
					<Shield class="h-5 w-5 text-amber-300" />
					<span>Sample Advisor Credential</span>
				</div>
				<div class="flex items-center gap-2">
					<Award class="h-5 w-5 text-amber-300" />
					<span>Sample Membership Badge</span>
				</div>
			</div>
		</div>
	</div>

</section>
