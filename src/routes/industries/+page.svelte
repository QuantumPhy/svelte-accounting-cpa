<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import {
		Building2,
		Stethoscope,
		ShoppingCart,
		Factory,
		Home,
		Utensils,
		Briefcase,
		Truck,
		GraduationCap,
		Scale,
		Landmark,
		Users,
		ArrowRight,
		Check
	} from 'lucide-svelte';

	const industries = [
		{
			icon: Building2,
			name: 'Real Estate',
			description: 'Specialized accounting for property investors, developers, and management companies.',
			services: ['1031 Exchanges', 'Cost Segregation', 'Property Tax Appeals', 'Partnership Returns'],
			imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600'
		},
		{
			icon: Stethoscope,
			name: 'Healthcare',
			description: 'Compliance-focused accounting for medical practices, clinics, and healthcare providers.',
			services: ['Practice Management', 'HIPAA Compliance', 'Medical Billing Analysis', 'Entity Structuring'],
			imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600'
		},
		{
			icon: ShoppingCart,
			name: 'Retail',
			description: 'Multi-location retail accounting, inventory management, and sales tax compliance.',
			services: ['Inventory Accounting', 'Sales Tax Compliance', 'Multi-State Nexus', 'POS Integration'],
			imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600'
		},
		{
			icon: Factory,
			name: 'Manufacturing',
			description: 'Cost accounting, job costing, and financial management for manufacturers.',
			services: ['Cost Accounting', 'Job Costing', 'Inventory Valuation', 'Equipment Depreciation'],
			imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600'
		},
		{
			icon: Home,
			name: 'Construction',
			description: 'Project-based accounting, job costing, and contractor-specific tax strategies.',
			services: ['Percentage of Completion', 'Job Costing', 'Contractor Licensing', 'Bonding Support'],
			imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600'
		},
		{
			icon: Utensils,
			name: 'Restaurants & Hospitality',
			description: 'Industry-specific accounting for restaurants, hotels, and hospitality businesses.',
			services: ['Tip Reporting', 'Menu Costing', 'Multi-Unit Consolidation', 'Payroll Compliance'],
			imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600'
		},
		{
			icon: Briefcase,
			name: 'Professional Services',
			description: 'Accounting for law firms, consulting firms, and other professional service providers.',
			services: ['Trust Accounting', 'Partner Distributions', 'WIP Management', 'Client Billing'],
			imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600'
		},
		{
			icon: Truck,
			name: 'Transportation & Logistics',
			description: 'Fleet management accounting, fuel tax compliance, and logistics financial management.',
			services: ['Fuel Tax Reporting', 'Fleet Depreciation', 'DOT Compliance', 'Cost Per Mile Analysis'],
			imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600'
		},
		{
			icon: GraduationCap,
			name: 'Nonprofit Organizations',
			description: 'Fund accounting, grant management, and compliance for tax-exempt organizations.',
			services: ['Form 990 Preparation', 'Grant Compliance', 'Fund Accounting', 'Board Reporting'],
			imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600'
		},
		{
			icon: Scale,
			name: 'Legal',
			description: 'Trust accounting, partner compensation, and financial management for law firms.',
			services: ['Trust Accounting', 'Partner Compensation', 'IOLTA Compliance', 'Matter Profitability'],
			imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600'
		},
		{
			icon: Landmark,
			name: 'Financial Services',
			description: 'Regulatory compliance and specialized accounting for financial institutions.',
			services: ['Regulatory Reporting', 'Investment Accounting', 'Broker-Dealer Compliance', 'Fund Administration'],
			imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600'
		},
		{
			icon: Users,
			name: 'Technology & Startups',
			description: 'Venture-backed accounting, R&D credits, and growth-stage financial management.',
			services: ['R&D Tax Credits', 'Stock Option Accounting', 'Venture Reporting', 'SaaS Metrics'],
			imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600'
		}
	];
</script>

<svelte:head>
	<title>Industries We Serve - Greenfield & Associates CPA</title>
	<meta name="description" content="Specialized accounting and tax services for various industries including real estate, healthcare, retail, manufacturing, and more." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden">
	<div class="absolute inset-0 chart-grid opacity-10"></div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl">
			<span class="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
				<Building2 class="h-4 w-4" />
				Industry Expertise
			</span>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
				Industries We Serve
			</h1>
			<p class="text-xl text-background/80 mb-8">
				Every industry has unique accounting challenges. Our specialized teams bring deep knowledge of your sector's specific requirements, regulations, and opportunities.
			</p>
			<Button size="lg" class="gold-gradient text-white hover:opacity-90" href={base + "/contact"}>
				Discuss Your Industry Needs
				<ArrowRight class="ml-2 h-5 w-5" />
			</Button>
		</div>
	</div>
</section>

<!-- Industries Grid -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each industries as industry}
				<Card.Root class="overflow-hidden group hover:shadow-xl transition-all duration-300">
					<div class="relative h-48 overflow-hidden">
						<img
							src={industry.imageUrl}
							alt={industry.name}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
						<div class="absolute bottom-4 left-4 flex items-center gap-3">
							<div class="w-12 h-12 rounded-xl bg-accent/90 flex items-center justify-center">
								<industry.icon class="h-6 w-6 text-white" />
							</div>
							<h3 class="text-xl font-bold text-white">{industry.name}</h3>
						</div>
					</div>

					<Card.Content class="p-6">
						<p class="text-muted-foreground text-sm mb-4">
							{industry.description}
						</p>

						<div class="space-y-2">
							{#each industry.services as service}
								<div class="flex items-center gap-2 text-sm">
									<Check class="h-4 w-4 text-primary flex-shrink-0" />
									<span class="text-foreground">{service}</span>
								</div>
							{/each}
						</div>
					</Card.Content>

					<Card.Footer class="px-6 pb-6 pt-0">
						<Button variant="outline" class="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" href={base + "/contact"}>
							Learn More
							<ArrowRight class="ml-2 h-4 w-4" />
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-24 financial-gradient text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl lg:text-4xl font-bold mb-4">
			Don't See Your Industry?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
			We work with businesses across all sectors. Contact us to discuss how our expertise can benefit your specific situation.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button size="lg" class="bg-white text-primary hover:bg-white/90" href={base + "/contact"}>
				Contact Us Today
			</Button>
			<Button size="lg" variant="outline" class="border-white/30 text-white hover:bg-white/10" href={base + "/services"}>
				View All Services
			</Button>
		</div>
	</div>
</section>
