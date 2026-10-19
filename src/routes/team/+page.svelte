<script lang="ts">
	import { base } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';
	import { Users, ArrowRight, Award, GraduationCap, Heart } from 'lucide-svelte';

	const leadership = [
		{
			name: 'Robert Greenfield',
			title: 'Managing Partner',
			credentials: ['CPA', 'CFP', 'PFS'],
			imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
			bio: 'Robert founded Greenfield & Associates in 1985 with a vision of providing personalized, proactive accounting services. With over 40 years of experience, he continues to lead the firm\'s strategic direction and serves many of our most valued clients.',
			email: 'robert@greenfieldcpa.com',
			specialties: ['Tax Strategy', 'Business Advisory', 'Estate Planning']
		},
		{
			name: 'Margaret Greenfield',
			title: 'Partner',
			credentials: ['CPA', 'MBA'],
			imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
			bio: 'Margaret joined the firm in 1990 and became partner in 2000. She oversees our audit and assurance practice and brings extensive experience in financial statement preparation and internal controls.',
			email: 'margaret@greenfieldcpa.com',
			specialties: ['Audit & Assurance', 'Nonprofit Accounting', 'Internal Controls']
		}
	];

	const directors = [
		{
			name: 'Sarah Chen',
			title: 'Tax Director',
			credentials: ['CPA', 'MST'],
			imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
			bio: 'Sarah leads our tax practice with expertise in individual and corporate taxation. She specializes in multi-state tax compliance and tax planning for high-net-worth individuals.',
			email: 'sarah@greenfieldcpa.com',
			specialties: ['Tax Planning', 'Multi-State Tax', 'High-Net-Worth']
		},
		{
			name: 'Michael Torres',
			title: 'Audit Manager',
			credentials: ['CPA', 'CMA'],
			imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
			bio: 'Michael leads our audit engagements with a focus on manufacturing and distribution companies. He brings 15 years of experience in financial statement audits.',
			email: 'michael@greenfieldcpa.com',
			specialties: ['Financial Audits', 'Manufacturing', 'Internal Controls']
		},
		{
			name: 'Jennifer Williams',
			title: 'Advisory Director',
			credentials: ['CPA', 'CGMA'],
			imageUrl: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400',
			bio: 'Jennifer heads our business advisory services, helping clients with strategic planning, M&A transactions, and operational improvements.',
			email: 'jennifer@greenfieldcpa.com',
			specialties: ['Business Advisory', 'M&A', 'Strategic Planning']
		}
	];

	const staff = [
		{
			name: 'David Park',
			title: 'Senior Tax Manager',
			credentials: ['CPA'],
			imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
			bio: 'David specializes in small business taxation and helps entrepreneurs navigate the complexities of business ownership.',
			email: 'david@greenfieldcpa.com',
			specialties: ['Small Business', 'S-Corps', 'Partnerships']
		},
		{
			name: 'Emily Rodriguez',
			title: 'Senior Accountant',
			credentials: ['CPA'],
			imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
			bio: 'Emily provides bookkeeping and payroll services to our small business clients. She\'s a QuickBooks ProAdvisor and helps clients optimize their accounting systems.',
			email: 'emily@greenfieldcpa.com',
			specialties: ['Bookkeeping', 'QuickBooks', 'Payroll']
		},
		{
			name: 'James Thompson',
			title: 'Tax Accountant',
			credentials: ['CPA'],
			imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
			bio: 'James prepares individual and business tax returns with a focus on accuracy and maximizing deductions for our clients.',
			email: 'james@greenfieldcpa.com',
			specialties: ['Tax Preparation', 'Individual Returns', 'Schedule C']
		},
		{
			name: 'Lisa Chang',
			title: 'Staff Accountant',
			credentials: ['CPA Candidate'],
			imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
			bio: 'Lisa supports our audit and assurance team. She\'s currently pursuing her CPA license and brings fresh perspectives to our engagements.',
			email: 'lisa@greenfieldcpa.com',
			specialties: ['Audit Support', 'Bookkeeping', 'Financial Analysis']
		}
	];

	const values = [
		{
			icon: Award,
			title: 'Excellence',
			description: 'We strive for excellence in everything we do, maintaining the highest standards of quality and professionalism.'
		},
		{
			icon: Heart,
			title: 'Client First',
			description: 'Our clients\' success is our success. We build lasting relationships based on trust and mutual respect.'
		},
		{
			icon: GraduationCap,
			title: 'Continuous Learning',
			description: 'We invest in ongoing education to stay current with ever-changing tax laws and accounting standards.'
		}
	];
</script>

<svelte:head>
	<title>Our Team - Greenfield & Associates CPA</title>
	<meta name="description" content="Meet our team of experienced CPAs and accounting professionals dedicated to your financial success." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden">
	<div class="absolute inset-0 chart-grid opacity-10"></div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl">
			<span class="inline-flex items-center gap-2 text-amber-300 font-semibold text-sm uppercase tracking-wider mb-4">
				<Users class="h-4 w-4" />
				Our Team
			</span>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
				Meet the Experts Behind Your Success
			</h1>
			<p class="text-xl text-background/80 mb-8">
				Our team combines decades of experience with a passion for helping clients achieve their financial goals.
			</p>
		</div>
	</div>
</section>

<!-- Our Values -->
<section class="py-12 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each values as value}
				<div class="flex items-start gap-4">
					<div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
						<value.icon class="h-6 w-6 text-primary" />
					</div>
					<div>
						<h3 class="font-semibold text-foreground mb-1">{value.title}</h3>
						<p class="text-sm text-muted-foreground">{value.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Leadership -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Leadership</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
				Partners
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each leadership as member}
				<TeamMemberCard {...member} />
			{/each}
		</div>
	</div>
</section>

<!-- Directors -->
<section class="py-16 lg:py-24 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Management</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
				Directors & Managers
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each directors as member}
				<TeamMemberCard {...member} />
			{/each}
		</div>
	</div>
</section>

<!-- Staff -->
<section class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2">
				Professional Staff
			</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each staff as member}
				<TeamMemberCard {...member} />
			{/each}
		</div>
	</div>
</section>

<!-- Join Our Team CTA -->
<section class="py-16 lg:py-24 financial-gradient text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl lg:text-4xl font-bold mb-4">
			Join Our Team
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
			We're always looking for talented professionals who share our values and commitment to excellence.
		</p>
		<Button size="lg" class="bg-white text-primary hover:bg-white/90" href={base + "/contact"}>
			View Open Positions
			<ArrowRight class="ml-2 h-5 w-5" />
		</Button>
	</div>
</section>
