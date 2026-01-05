<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import {
		Calculator,
		Phone,
		Mail,
		MapPin,
		Clock,
		Send,
		MessageSquare,
		Calendar,
		FileText,
		Building,
		User
	} from 'lucide-svelte';

	const contactInfo = [
		{
			icon: Phone,
			title: 'Phone',
			value: '(555) 234-8200',
			description: 'Mon-Fri, 8:00 AM - 6:00 PM',
			action: 'tel:555-234-8200'
		},
		{
			icon: Mail,
			title: 'Email',
			value: 'info@greenfieldcpa.com',
			description: 'We respond within 24 hours',
			action: 'mailto:info@greenfieldcpa.com'
		},
		{
			icon: MapPin,
			title: 'Location',
			value: '456 Financial District, Suite 200',
			description: 'Metropolitan City, NY 10001',
			action: '#map'
		},
		{
			icon: Clock,
			title: 'Hours',
			value: 'Extended Tax Season Hours',
			description: 'Mon-Fri: 8AM-6PM, Sat: By Appt',
			action: null
		}
	];

	const quickLinks = [
		{
			icon: Calendar,
			title: 'Schedule Consultation',
			description: 'Book a free meeting with a CPA',
			href: '#form'
		},
		{
			icon: FileText,
			title: 'Client Portal',
			description: 'Access your documents securely',
			href: '#'
		},
		{
			icon: MessageSquare,
			title: 'Tax Questions',
			description: 'Get answers from our experts',
			href: '/tax-center'
		}
	];

	const serviceOptions = [
		{ value: 'tax-prep', label: 'Tax Preparation' },
		{ value: 'bookkeeping', label: 'Bookkeeping' },
		{ value: 'payroll', label: 'Payroll Services' },
		{ value: 'audit', label: 'Audit & Assurance' },
		{ value: 'advisory', label: 'Business Advisory' },
		{ value: 'cfo', label: 'CFO Services' },
		{ value: 'other', label: 'Other' }
	];

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		company: '',
		subject: '',
		message: ''
	});

	let isSubmitting = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));
		isSubmitting = false;
		// Reset form
		formData = { name: '', email: '', phone: '', company: '', subject: '', message: '' };
		alert('Thank you for your inquiry! We will contact you within 24 hours.');
	}
</script>

<svelte:head>
	<title>Contact Us - Greenfield & Associates CPA</title>
	<meta name="description" content="Get in touch with our team of CPAs for a free consultation. We're here to help with all your accounting and tax needs." />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden">
	<div class="absolute inset-0 chart-grid opacity-10"></div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl">
			<span class="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
				<MessageSquare class="h-4 w-4" />
				Contact Us
			</span>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
				Let's Start a Conversation
			</h1>
			<p class="text-xl text-background/80">
				Whether you have questions about our services or want to schedule a free consultation, we're here to help.
			</p>
		</div>
	</div>
</section>

<!-- Contact Info Cards -->
<section class="py-12 -mt-8">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each contactInfo as info}
				<Card.Root class="p-6 border-0 shadow-lg hover:shadow-xl transition-all group">
					{#if info.action}
						<a href={info.action} class="block">
							<div class="flex items-start gap-4">
								<div class="w-12 h-12 rounded-xl financial-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
									<info.icon class="h-6 w-6 text-white" />
								</div>
								<div>
									<h3 class="font-semibold text-foreground mb-1">{info.title}</h3>
									<p class="text-primary font-medium text-sm">{info.value}</p>
									<p class="text-sm text-muted-foreground">{info.description}</p>
								</div>
							</div>
						</a>
					{:else}
						<div class="flex items-start gap-4">
							<div class="w-12 h-12 rounded-xl financial-gradient flex items-center justify-center flex-shrink-0">
								<info.icon class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="font-semibold text-foreground mb-1">{info.title}</h3>
								<p class="text-primary font-medium text-sm">{info.value}</p>
								<p class="text-sm text-muted-foreground">{info.description}</p>
							</div>
						</div>
					{/if}
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Form & Map -->
<section id="form" class="py-16 lg:py-24">
	<div class="container mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<h2 class="text-2xl lg:text-3xl font-bold text-foreground mb-2">
					Request a Free Consultation
				</h2>
				<p class="text-muted-foreground mb-8">
					Fill out the form below and one of our CPAs will contact you within 24 hours to discuss your needs.
				</p>

				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div class="space-y-2">
							<Label for="name" class="flex items-center gap-2">
								<User class="h-4 w-4 text-muted-foreground" />
								Full Name *
							</Label>
							<Input
								id="name"
								bind:value={formData.name}
								placeholder="John Smith"
								required
							/>
						</div>
						<div class="space-y-2">
							<Label for="email" class="flex items-center gap-2">
								<Mail class="h-4 w-4 text-muted-foreground" />
								Email Address *
							</Label>
							<Input
								id="email"
								type="email"
								bind:value={formData.email}
								placeholder="john@example.com"
								required
							/>
						</div>
					</div>

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div class="space-y-2">
							<Label for="phone" class="flex items-center gap-2">
								<Phone class="h-4 w-4 text-muted-foreground" />
								Phone Number
							</Label>
							<Input
								id="phone"
								type="tel"
								bind:value={formData.phone}
								placeholder="(555) 123-4567"
							/>
						</div>
						<div class="space-y-2">
							<Label for="company" class="flex items-center gap-2">
								<Building class="h-4 w-4 text-muted-foreground" />
								Company Name
							</Label>
							<Input
								id="company"
								bind:value={formData.company}
								placeholder="Your Company Inc."
							/>
						</div>
					</div>

					<div class="space-y-2">
						<Label for="subject" class="flex items-center gap-2">
							<FileText class="h-4 w-4 text-muted-foreground" />
							Service Interested In
						</Label>
						<Select.Root type="single" onValueChange={(v) => formData.subject = v || ''}>
							<Select.Trigger>
								<span>{formData.subject ? serviceOptions.find(o => o.value === formData.subject)?.label : 'Select a service...'}</span>
							</Select.Trigger>
							<Select.Content>
								{#each serviceOptions as option}
									<Select.Item value={option.value} label={option.label}>
										{option.label}
									</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root>
					</div>

					<div class="space-y-2">
						<Label for="message" class="flex items-center gap-2">
							<MessageSquare class="h-4 w-4 text-muted-foreground" />
							Your Message *
						</Label>
						<Textarea
							id="message"
							bind:value={formData.message}
							placeholder="Tell us about your accounting needs, questions, or how we can help..."
							rows={6}
							required
						/>
					</div>

					<div class="bg-secondary/50 rounded-lg p-4">
						<p class="text-sm text-muted-foreground">
							By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
						</p>
					</div>

					<Button
						type="submit"
						size="lg"
						class="w-full sm:w-auto gold-gradient text-white hover:opacity-90"
						disabled={isSubmitting}
					>
						{#if isSubmitting}
							Sending...
						{:else}
							Submit Request
							<Send class="ml-2 h-5 w-5" />
						{/if}
					</Button>
				</form>
			</div>

			<!-- Map & Quick Links -->
			<div class="space-y-8">
				<!-- Map -->
				<Card.Root class="overflow-hidden border-0 shadow-lg">
					<div class="aspect-video bg-secondary relative">
						<img
							src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
							alt="Financial district office building"
							class="w-full h-full object-cover"
						/>
					</div>
					<div class="p-4 bg-secondary/30">
						<div class="flex items-center gap-3">
							<MapPin class="h-5 w-5 text-primary" />
							<div>
								<p class="font-medium text-foreground">456 Financial District, Suite 200</p>
								<p class="text-sm text-muted-foreground">Metropolitan City, NY 10001</p>
							</div>
						</div>
					</div>
				</Card.Root>

				<!-- Quick Links -->
				<div>
					<h3 class="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
					<div class="space-y-4">
						{#each quickLinks as link}
							<a href={link.href} class="block group">
								<Card.Root class="p-4 border-0 shadow-md hover:shadow-lg transition-all">
									<div class="flex items-center gap-4">
										<div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
											<link.icon class="h-5 w-5 text-primary group-hover:text-white" />
										</div>
										<div>
											<h4 class="font-medium text-foreground group-hover:text-primary transition-colors">
												{link.title}
											</h4>
											<p class="text-sm text-muted-foreground">{link.description}</p>
										</div>
									</div>
								</Card.Root>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-16 lg:py-24 bg-secondary/30">
	<div class="container mx-auto px-4">
		<div class="text-center max-w-3xl mx-auto mb-12">
			<span class="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
			<h2 class="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
				Frequently Asked Questions
			</h2>
		</div>

		<div class="max-w-3xl mx-auto space-y-4">
			<Card.Root class="p-6 border-0 shadow-md">
				<h3 class="font-semibold text-foreground mb-2">What should I bring to our first meeting?</h3>
				<p class="text-muted-foreground text-sm">
					For an initial consultation, bring any relevant financial documents such as prior year tax returns, recent financial statements, or specific questions you have. We'll let you know if anything else is needed.
				</p>
			</Card.Root>

			<Card.Root class="p-6 border-0 shadow-md">
				<h3 class="font-semibold text-foreground mb-2">Do you offer virtual consultations?</h3>
				<p class="text-muted-foreground text-sm">
					Yes! We offer video consultations via Zoom or Microsoft Teams for clients who prefer remote meetings. We also have a secure client portal for document sharing.
				</p>
			</Card.Root>

			<Card.Root class="p-6 border-0 shadow-md">
				<h3 class="font-semibold text-foreground mb-2">How quickly can you start working on my return?</h3>
				<p class="text-muted-foreground text-sm">
					Once we receive all necessary documents, we typically begin work within 3-5 business days. During tax season, we prioritize based on deadline urgency.
				</p>
			</Card.Root>

			<Card.Root class="p-6 border-0 shadow-md">
				<h3 class="font-semibold text-foreground mb-2">What are your fees?</h3>
				<p class="text-muted-foreground text-sm">
					We provide transparent, fixed-fee pricing for most services. After our initial consultation, we'll provide a detailed quote based on your specific needs before any work begins.
				</p>
			</Card.Root>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-24 financial-gradient text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="text-3xl lg:text-4xl font-bold mb-4">
			Ready to Get Started?
		</h2>
		<p class="text-xl text-white/80 max-w-2xl mx-auto mb-8">
			Schedule a free consultation to discuss your accounting and tax needs. Let us show you how we can help.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button size="lg" class="bg-white text-primary hover:bg-white/90" href="#form">
				Request Consultation
			</Button>
			<Button size="lg" variant="outline" class="border-white/30 text-white hover:bg-white/10" href="tel:555-234-8200">
				Call (555) 234-8200
			</Button>
		</div>
	</div>
</section>
