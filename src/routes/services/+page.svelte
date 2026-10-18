<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import {
		FileText,
		BookOpen,
		Users,
		Shield,
		Briefcase,
		TrendingUp,
		Calculator,
		Building,
		Wallet,
		Scale,
		ArrowRight,
		Check
	} from 'lucide-svelte';

	const services = [
		{
			title: 'Tax Preparation & Planning',
			description: 'Comprehensive tax preparation for individuals and businesses. We maximize your deductions and ensure compliance with all federal, state, and local requirements.',
			icon: FileText,
			features: ['Individual Tax Returns', 'Business Tax Returns', 'Multi-State Filing', 'IRS Representation', 'Tax Planning Strategies', 'Estimated Tax Payments'],
			featured: true
		},
		{
			title: 'Bookkeeping Services',
			description: 'Accurate, timely bookkeeping services to keep your finances organized and your business running smoothly. We handle the numbers so you can focus on growth.',
			icon: BookOpen,
			features: ['Monthly Bookkeeping', 'Financial Statements', 'Accounts Payable', 'Accounts Receivable', 'Bank Reconciliation', 'QuickBooks Setup']
		},
		{
			title: 'Payroll Services',
			description: 'Complete payroll solutions including processing, tax deposits, and year-end reporting. Stay compliant and keep your employees happy.',
			icon: Users,
			features: ['Payroll Processing', 'Federal/State Tax Deposits', 'W-2/1099 Preparation', 'Direct Deposit', 'New Hire Reporting', 'Year-End Reports']
		},
		{
			title: 'Audit & Assurance',
			description: 'Independent audit and assurance services to give stakeholders confidence in your financial statements. Comprehensive reviews and compilations.',
			icon: Shield,
			features: ['Financial Statement Audits', 'Review Engagements', 'Compilation Services', 'Agreed-Upon Procedures', 'Internal Audits', 'Compliance Audits']
		},
		{
			title: 'Business Advisory',
			description: 'Strategic guidance to help your business grow, improve profitability, and achieve your goals. Partner with us for your success.',
			icon: Briefcase,
			features: ['Business Planning', 'Cash Flow Analysis', 'Succession Planning', 'M&A Support', 'Entity Selection', 'Financial Projections']
		},
		{
			title: 'CFO Services',
			description: 'Part-time CFO services providing executive-level financial leadership without the full-time cost. Get strategic insights when you need them.',
			icon: TrendingUp,
			features: ['Financial Strategy', 'Budget Development', 'KPI Tracking', 'Board Reporting', 'Banking Relationships', 'Growth Planning']
		},
		{
			title: 'Estate & Trust Planning',
			description: 'Comprehensive estate and trust planning services to protect your wealth and ensure smooth transfer to future generations.',
			icon: Scale,
			features: ['Estate Tax Planning', 'Trust Administration', 'Gift Tax Returns', 'Charitable Planning', 'Wealth Transfer', 'Family Business Succession']
		},
		{
			title: 'Entity Formation',
			description: 'Expert guidance on choosing the right business structure and handling all formation requirements to set you up for success.',
			icon: Building,
			features: ['LLC Formation', 'S-Corp Election', 'Partnership Agreements', 'Nonprofit Setup', 'Operating Agreements', 'State Registrations']
		},
		{
			title: 'Financial Planning',
			description: 'Holistic financial planning services to help individuals and families achieve their financial goals and secure their future.',
			icon: Wallet,
			features: ['Retirement Planning', 'Investment Analysis', 'Tax Optimization', 'Insurance Review', 'College Planning', 'Debt Management']
		}
	];

	const process = [
		{
			step: 1,
			title: 'Initial Consultation',
			description: 'We meet to understand your needs, goals, and current situation. This free consultation helps us determine how we can best serve you.'
		},
		{
			step: 2,
			title: 'Proposal & Agreement',
			description: 'Based on our consultation, we provide a detailed proposal with transparent pricing and scope of services.'
		},
		{
			step: 3,
			title: 'Information Gathering',
			description: 'We collect the necessary documents and information using our secure client portal and proven processes.'
		},
		{
			step: 4,
			title: 'Execution & Delivery',
			description: 'Our team completes your work with meticulous attention to detail and delivers results on time.'
		},
		{
			step: 5,
			title: 'Review & Follow-Up',
			description: 'We review our work with you, answer questions, and provide ongoing support as needed.'
		}
	];
</script>

<svelte:head>
	<title>Our Services - Greenfield & Associates CPA</title>
	<meta name="description" content="Comprehensive accounting, tax, and advisory services for individuals and businesses. Expert CPAs ready to help you succeed." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden">
	<div class="absolute inset-0 chart-grid opacity-10"></div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl">
			<span class="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
				<Calculator class="h-4 w-4" />
				Our Services
			</span>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
				Comprehensive Financial Services
			</h1>
			<p class="text-xl text-background/80 mb-8">
				From tax preparation to strategic advisory, we provide the full spectrum of accounting services to help you achieve your financial goals.
			</p>
			<Button size="lg" class="gold-gradient text-white hover:opacity-90" href={base + "/contact"}>
				Schedule Free Consultation
				<ArrowRight class="ml-2 h-5 w-5" />
			</Button>
		</div>
	</div>
</section>

<!-- Services Grid -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each services as service}
				<ServiceCard {...service} />
			{/each}
		</div>
	</div>
</section>

<!-- Our Process -->
<section class="py-16 lg:py-24 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">How We Work</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
				Our Process
			</h2>
			<p class="text-muted-foreground">
				We've refined our approach over 40 years to ensure a smooth, efficient experience for every client.
			</p>
		</div>

		<div class="relative">
			<!-- Connection Line -->
			<div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>

			<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
				{#each process as item}
					<div class="relative">
						<Card.Root class="text-center p-6 relative z-10 h-full">
							<div class="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
								{item.step}
							</div>
							<h3 class="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
							<p class="text-sm text-muted-foreground">{item.description}</p>
						</Card.Root>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-24 financial-gradient text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl lg:text-4xl font-bold mb-4">
			Ready to Experience the Greenfield Difference?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
			Let's discuss how our services can help you achieve your financial goals. Your first consultation is free.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button size="lg" class="bg-white text-primary hover:bg-white/90" href={base + "/contact"}>
				Get Started Today
			</Button>
			<Button size="lg" variant="outline" class="border-white/30 text-white hover:bg-white/10" href="tel:555-234-8200">
				Call (555) 234-8200
			</Button>
		</div>
	</div>
</section>
