<script lang="ts">
	import { templateHref } from '$lib/preview-path';
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import TaxDeadlineCard from '$lib/components/TaxDeadlineCard.svelte';
	import {
		Calendar,
		FileText,
		Download,
		ExternalLink,
		ArrowRight,
		BookOpen,
		Calculator,
		AlertTriangle,
		CheckCircle
	} from 'lucide-svelte';

	const upcomingDeadlines = [
		{
			title: 'Q4 Estimated Tax Payment',
			date: 'Jan 15',
			description: 'Fourth quarter estimated tax payment due for individuals and businesses.',
			category: 'quarterly' as const,
		},
		{
			title: 'W-2 and 1099 Distribution',
			date: 'Jan 31',
			description: 'Deadline to provide W-2s to employees and 1099s to contractors.',
			category: 'payroll' as const,
		},
		{
			title: 'S-Corp & Partnership Returns',
			date: 'Mar 15',
			description: 'Form 1120-S and Form 1065 filing deadline for calendar year entities.',
			category: 'business' as const,
		},
		{
			title: 'Individual Tax Returns',
			date: 'Apr 15',
			description: 'Form 1040 filing deadline and Q1 estimated tax payment due.',
			category: 'individual' as const,
		},
		{
			title: 'C-Corp Tax Returns',
			date: 'Apr 15',
			description: 'Form 1120 filing deadline for calendar year C corporations.',
			category: 'business' as const,
		},
		{
			title: 'Q2 Estimated Tax Payment',
			date: 'Jun 15',
			description: 'Second quarter estimated tax payment due for individuals and businesses.',
			category: 'quarterly' as const,
		}
	];

	const resources = [
		{ title: 'Gather Your Tax Documents', description: 'Official IRS overview of documents to collect before filing.', icon: CheckCircle, type: 'IRS Guide', href: 'https://www.irs.gov/filing/gather-your-documents' },
		{ title: 'Business Recordkeeping', description: 'IRS Publication 583 on starting a business and keeping records.', icon: BookOpen, type: 'IRS Guide', href: 'https://www.irs.gov/publications/p583' },
		{ title: 'Tax Withholding Estimator', description: 'Open the official IRS tool and review its eligibility information.', icon: Calculator, type: 'IRS Tool', href: 'https://www.irs.gov/individuals/tax-withholding-estimator' },
		{ title: 'Small Business Tax Center', description: 'Official IRS information for small businesses and self-employed people.', icon: FileText, type: 'IRS Guide', href: 'https://www.irs.gov/businesses/small-businesses-self-employed' }
	];

	const externalLinks = [
		{ name: 'IRS Website', href: 'https://www.irs.gov', description: 'Official IRS resources and forms' },
		{ name: 'IRS Where\'s My Refund', href: 'https://www.irs.gov/refunds', description: 'Track your federal refund status' },
		{ name: 'Social Security Administration', href: 'https://www.ssa.gov', description: 'Benefits and earnings information' },
		{ name: 'State Tax Agencies', href: 'https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites', description: 'Links to all state revenue departments' }
	];

	const taxTips = [
		{
			title: 'Maximize Retirement Contributions',
			description: 'Contribute the maximum to your 401(k) and IRA before the deadline to reduce taxable income.'
		},
		{
			title: 'Track Charitable Donations',
			description: 'Keep receipts and records for all charitable contributions for potential deductions.'
		},
		{
			title: 'Review Withholding Annually',
			description: 'Check your W-4 each year to ensure proper withholding and avoid surprises at tax time.'
		},
		{
			title: 'Document Home Office Use',
			description: 'If you work from home, measure your dedicated workspace for the home office deduction.'
		}
	];
</script>

<svelte:head>
	<title>Tax Center - Greenfield & Associates CPA</title>
	<meta name="description" content="Tax resources, deadlines, and helpful information to keep you informed and prepared." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden">
	<div class="absolute inset-0 chart-grid opacity-10"></div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl">
			<span class="inline-flex items-center gap-2 text-amber-300 font-semibold text-sm uppercase tracking-wider mb-4">
				<Calendar class="h-4 w-4" />
				Tax Center
			</span>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
				Tax Resources & Deadlines
			</h1>
			<p class="text-xl text-background/80 mb-8">
				Explore a sample calendar layout and official IRS resource links. Dates and copy are illustrative; verify current requirements with a qualified professional.
			</p>
			<Button size="lg" class="gold-gradient text-foreground hover:opacity-90" href={base + "/contact"}>
				Schedule Tax Consultation
				<ArrowRight class="ml-2 h-5 w-5" />
			</Button>
		</div>
	</div>
</section>

<!-- Upcoming Deadlines -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="flex items-center gap-3 mb-8">
			<AlertTriangle class="h-6 w-6 text-accent" />
			<h2 class="text-2xl lg:text-3xl font-bold text-foreground">
				Sample Tax Calendar
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each upcomingDeadlines as deadline}
				<TaxDeadlineCard {...deadline} />
			{/each}
		</div>

		<div class="mt-8 p-6 bg-secondary/50 rounded-xl">
			<p class="text-muted-foreground text-sm">
				<strong>Note:</strong> Deadlines may vary for fiscal year filers or based on specific circumstances.
				If a deadline falls on a weekend or holiday, it typically moves to the next business day.
				Contact us for personalized deadline information.
			</p>
		</div>
	</div>
</section>

<!-- Resources -->
<section class="py-16 lg:py-24 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Resources</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
				Helpful Tax Resources
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each resources as resource}
				<Card.Root class="p-6 hover:shadow-lg transition-all group">
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
							<resource.icon class="h-6 w-6 text-primary" />
						</div>
						<div class="flex-1">
							<div class="flex items-center justify-between mb-2">
								<h3 class="font-semibold text-foreground">{resource.title}</h3>
								<span class="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{resource.type}</span>
							</div>
							<p class="text-sm text-muted-foreground mb-4">{resource.description}</p>
							<a href={resource.href} class="inline-flex items-center gap-2 text-primary font-medium text-sm hover:text-primary/80 transition-colors">
								Read {resource.title}
								{#if resource.type === 'PDF Download'}
									<Download class="h-4 w-4" />
								{:else}
									<ExternalLink class="h-4 w-4" />
								{/if}
							</a>
						</div>
					</div>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- Tax Tips -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Tips & Strategies</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
				Tax Saving Tips
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each taxTips as tip, index}
				<div class="flex items-start gap-4 p-6 bg-secondary/30 rounded-xl">
					<div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold flex-shrink-0">
						{index + 1}
					</div>
					<div>
						<h3 class="font-semibold text-foreground mb-2">{tip.title}</h3>
						<p class="text-sm text-muted-foreground">{tip.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- External Links -->
<section class="py-16 lg:py-24 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Quick Links</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
				Helpful External Resources
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{#each externalLinks as link}
				<a href={templateHref(link.href)} target="_blank" rel="noopener noreferrer" class="p-4 bg-background rounded-xl hover:shadow-md transition-all group">
					<div class="flex items-center justify-between mb-2">
						<h3 class="font-semibold text-foreground group-hover:text-primary transition-colors">{link.name}</h3>
						<ExternalLink class="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
					</div>
					<p class="text-sm text-muted-foreground">{link.description}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-24 financial-gradient text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl lg:text-4xl font-bold mb-4">
			Need Help With Your Taxes?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
			Our experienced tax professionals are ready to help you navigate complex tax situations and maximize your savings.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button size="lg" class="bg-white text-primary hover:bg-white/90" href={base + "/contact"}>
				Get Started Today
			</Button>
			<Button size="lg" variant="outline" class="bg-transparent border-white/60 text-white hover:bg-white/10 hover:text-white" href="tel:555-234-8200">
				Call (555) 234-8200
			</Button>
		</div>
	</div>
</section>
