<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
	import TaxDeadlineCard from '$lib/components/TaxDeadlineCard.svelte';
	import {
		Calculator,
		FileText,
		Users,
		Briefcase,
		TrendingUp,
		Shield,
		Building2,
		Stethoscope,
		ShoppingCart,
		Factory,
		Home,
		Utensils,
		ChevronRight,
		Quote,
		Star,
		ArrowRight,
		Clock,
		CheckCircle,
		DollarSign,
		BookOpen,
		PiggyBank
	} from 'lucide-svelte';

	const services = [
		{
			title: 'Tax Preparation',
			description: 'Comprehensive tax preparation for individuals and businesses. We maximize your deductions and ensure compliance.',
			icon: FileText,
			features: ['Individual Returns', 'Business Returns', 'Multi-State Filing', 'IRS Representation'],
			featured: true
		},
		{
			title: 'Bookkeeping',
			description: 'Accurate, timely bookkeeping services to keep your finances organized and your business running smoothly.',
			icon: BookOpen,
			features: ['Monthly Reconciliation', 'Financial Reports', 'Accounts Payable/Receivable', 'Bank Reconciliation']
		},
		{
			title: 'Payroll Services',
			description: 'Complete payroll solutions including processing, tax deposits, and year-end reporting.',
			icon: Users,
			features: ['Payroll Processing', 'Tax Deposits', 'W-2/1099 Prep', 'Direct Deposit']
		},
		{
			title: 'Audit & Assurance',
			description: 'Independent audit and assurance services to give stakeholders confidence in your financial statements.',
			icon: Shield,
			features: ['Financial Audits', 'Review Services', 'Compilations', 'Agreed-Upon Procedures']
		},
		{
			title: 'Business Advisory',
			description: 'Strategic guidance to help your business grow, improve profitability, and achieve your goals.',
			icon: Briefcase,
			features: ['Business Planning', 'Cash Flow Analysis', 'Succession Planning', 'M&A Support']
		},
		{
			title: 'CFO Services',
			description: 'Part-time CFO services providing executive-level financial leadership without the full-time cost.',
			icon: TrendingUp,
			features: ['Financial Strategy', 'Budget Development', 'KPI Tracking', 'Board Reporting']
		}
	];

	const industries = [
		{ icon: Building2, name: 'Real Estate' },
		{ icon: Stethoscope, name: 'Healthcare' },
		{ icon: ShoppingCart, name: 'Retail' },
		{ icon: Factory, name: 'Manufacturing' },
		{ icon: Home, name: 'Construction' },
		{ icon: Utensils, name: 'Restaurants' }
	];

	const teamHighlights = [
		{
			name: 'Robert Greenfield',
			title: 'Managing Partner',
			credentials: ['CPA', 'CFP'],
			imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
			bio: 'Over 30 years of experience in public accounting, specializing in tax strategy and business advisory services.',
			email: 'robert@greenfieldcpa.com',
			linkedin: '#',
			specialties: ['Tax Strategy', 'Business Advisory']
		},
		{
			name: 'Sarah Chen',
			title: 'Tax Director',
			credentials: ['CPA', 'MST'],
			imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
			bio: 'Expert in individual and corporate taxation with a focus on tax planning and multi-state compliance.',
			email: 'sarah@greenfieldcpa.com',
			linkedin: '#',
			specialties: ['Tax Planning', 'Multi-State Tax']
		},
		{
			name: 'Michael Torres',
			title: 'Audit Manager',
			credentials: ['CPA', 'CMA'],
			imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
			bio: 'Leads our audit practice with extensive experience in financial statement audits and internal controls.',
			email: 'michael@greenfieldcpa.com',
			linkedin: '#',
			specialties: ['Financial Audits', 'Internal Controls']
		}
	];

	const upcomingDeadlines = [
		{
			title: 'Q4 Estimated Tax Payment',
			date: 'Jan 15',
			description: 'Fourth quarter estimated tax payment due for individuals and businesses.',
			category: 'quarterly' as const,
			daysUntil: 13,
			urgent: true
		},
		{
			title: 'W-2 and 1099 Distribution',
			date: 'Jan 31',
			description: 'Deadline to provide W-2s to employees and 1099s to contractors.',
			category: 'payroll' as const,
			daysUntil: 29
		},
		{
			title: 'S-Corp & Partnership Returns',
			date: 'Mar 15',
			description: 'Form 1120-S and Form 1065 filing deadline.',
			category: 'business' as const,
			daysUntil: 73
		}
	];

	const testimonials = [
		{
			name: 'Jennifer Walsh',
			role: 'CEO, Walsh Industries',
			image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
			content: 'Greenfield & Associates has been instrumental in our company\'s growth. Their strategic tax planning saved us over $200,000 last year.',
			rating: 5
		},
		{
			name: 'David Kim',
			role: 'Owner, Kim\'s Restaurant Group',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
			content: 'As a restaurant owner, I need an accountant who understands my industry. The team here gets it and provides invaluable advice.',
			rating: 5
		},
		{
			name: 'Maria Santos',
			role: 'Real Estate Investor',
			image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
			content: 'They handle all my property accounting and tax planning. Professional, responsive, and always looking out for my best interests.',
			rating: 5
		}
	];

	const whyChooseUs = [
		{
			icon: Clock,
			title: 'Responsive Service',
			description: 'Quick response times and proactive communication. We\'re here when you need us.'
		},
		{
			icon: CheckCircle,
			title: 'Accuracy Guaranteed',
			description: 'Meticulous attention to detail. We stand behind our work with a satisfaction guarantee.'
		},
		{
			icon: DollarSign,
			title: 'Tax Savings Focus',
			description: 'We proactively identify tax-saving opportunities to keep more money in your pocket.'
		},
		{
			icon: PiggyBank,
			title: 'Fixed Fee Pricing',
			description: 'Transparent, upfront pricing with no surprises. Know your costs before we begin.'
		}
	];
</script>

<!-- Hero Section -->
<HeroSection />

<!-- Why Choose Us Section -->
<section class="py-16 lg:py-24 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
				The Greenfield Difference
			</h2>
			<p class="text-muted-foreground">
				We're not just accountants - we're trusted advisors dedicated to your financial success.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each whyChooseUs as feature}
				<Card.Root class="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all group">
					<div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-4 group-hover:scale-110 transition-transform">
						<feature.icon class="h-8 w-8 text-primary" />
					</div>
					<h3 class="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
					<p class="text-sm text-muted-foreground">{feature.description}</p>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
			<div>
				<span class="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
				<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
					Comprehensive Financial Services
				</h2>
			</div>
			<Button variant="outline" class="self-start lg:self-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground" href={base + "/services"}>
				View All Services
				<ChevronRight class="ml-2 h-4 w-4" />
			</Button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each services as service}
				<ServiceCard {...service} />
			{/each}
		</div>
	</div>
</section>

<!-- Industries Section -->
<section class="py-16 lg:py-24 bg-foreground text-background relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 ledger-pattern opacity-30"></div>

	<div class="container mx-auto px-4 relative z-10">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<span class="text-accent font-semibold text-sm uppercase tracking-wider">Industry Expertise</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
				Specialized Industry Knowledge
			</h2>
			<p class="text-background/70">
				We serve clients across diverse industries, bringing specialized knowledge and insights to each engagement.
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
			{#each industries as industry}
				<div class="flex flex-col items-center p-6 rounded-xl bg-background/5 hover:bg-background/10 transition-colors group cursor-pointer">
					<div class="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
						<industry.icon class="h-8 w-8 text-accent" />
					</div>
					<span class="text-white font-medium text-sm text-center">{industry.name}</span>
				</div>
			{/each}
		</div>

		<div class="text-center mt-10">
			<Button class="gold-gradient text-white hover:opacity-90" href={base + "/industries"}>
				Explore All Industries
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
		</div>
	</div>
</section>

<!-- Team Highlights Section -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
			<div>
				<span class="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
				<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
					Meet Our Leadership
				</h2>
			</div>
			<Button variant="outline" class="self-start lg:self-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground" href={base + "/team"}>
				View Full Team
				<ChevronRight class="ml-2 h-4 w-4" />
			</Button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each teamHighlights as member}
				<TeamMemberCard {...member} />
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="py-16 lg:py-24 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
				What Our Clients Say
			</h2>
			<p class="text-muted-foreground">
				Hear from our clients about their experience working with Greenfield & Associates.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each testimonials as testimonial}
				<Card.Root class="p-6 border-0 shadow-md relative">
					<Quote class="absolute top-4 right-4 h-8 w-8 text-primary/10" />
					<div class="flex items-center gap-4 mb-4">
						<img
							src={testimonial.image}
							alt={testimonial.name}
							class="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
						/>
						<div>
							<h4 class="font-semibold text-foreground">{testimonial.name}</h4>
							<p class="text-sm text-muted-foreground">{testimonial.role}</p>
						</div>
					</div>
					<div class="flex gap-1 mb-3">
						{#each Array(testimonial.rating) as _}
							<Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
						{/each}
					</div>
					<p class="text-muted-foreground text-sm leading-relaxed">
						"{testimonial.content}"
					</p>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- Tax Deadline Countdown Section -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
			<div>
				<span class="text-primary font-semibold text-sm uppercase tracking-wider">Stay Informed</span>
				<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
					Upcoming Tax Deadlines
				</h2>
			</div>
			<Button variant="outline" class="self-start lg:self-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground" href={base + "/tax-center"}>
				View Tax Center
				<ChevronRight class="ml-2 h-4 w-4" />
			</Button>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each upcomingDeadlines as deadline}
				<TaxDeadlineCard {...deadline} />
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-24 financial-gradient text-white relative overflow-hidden">
	<div class="absolute inset-0 chart-grid opacity-10"></div>

	<div class="container mx-auto px-4 relative z-10 text-center">
		<h2 class="text-3xl lg:text-5xl font-bold mb-4">
			Ready to Get Started?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
			Schedule a free consultation to discuss your accounting and tax needs. Let us show you how we can help.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button size="lg" class="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6" href={base + "/contact"}>
				Free Consultation
			</Button>
			<Button size="lg" variant="outline" class="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6" href={base + "/services"}>
				Explore Services
			</Button>
		</div>
	</div>
</section>
