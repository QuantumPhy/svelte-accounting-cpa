<script lang="ts">
	import { Calculator, Phone, Mail, MapPin, Clock, Linkedin, Facebook, Award, ShieldCheck, Calendar } from 'lucide-svelte';
</script>

<footer class="bg-foreground text-background">
	<!-- Decorative Top -->
	<div class="relative h-8 -mb-1">
		<svg class="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 32">
			<path
				fill="currentColor"
				class="text-foreground"
				d="M0 32V16C240 0 480 0 720 16C960 32 1200 32 1440 16V32H0Z"
			/>
		</svg>
	</div>

	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
			<!-- Brand -->
			<div class="space-y-4">
				<a href="/" class="flex items-center gap-3">
					<div class="bg-gradient-to-br from-primary to-primary/80 p-2 rounded-xl">
						<Calculator class="h-8 w-8 text-white" />
					</div>
					<div class="flex flex-col">
						<span class="text-xl font-bold text-white">Greenfield & Associates</span>
						<span class="text-sm text-background/70 -mt-1">Certified Public Accountants</span>
					</div>
				</a>
				<p class="text-background/70 text-sm leading-relaxed">
					Trusted financial partners since 1985. We provide comprehensive accounting, tax, and advisory services to individuals and businesses.
				</p>
				<!-- Certifications -->
				<div class="flex flex-wrap gap-3 mt-4">
					<div class="flex items-center gap-1.5 bg-background/10 px-3 py-1.5 rounded-full">
						<Award class="h-4 w-4 text-accent" />
						<span class="text-xs font-medium text-background/80">CPA Certified</span>
					</div>
					<div class="flex items-center gap-1.5 bg-background/10 px-3 py-1.5 rounded-full">
						<ShieldCheck class="h-4 w-4 text-accent" />
						<span class="text-xs font-medium text-background/80">QuickBooks ProAdvisor</span>
					</div>
				</div>
				<div class="flex gap-4 mt-4">
					<a href="#" class="text-background/70 hover:text-accent transition-colors">
						<Linkedin class="h-5 w-5" />
					</a>
					<a href="#" class="text-background/70 hover:text-accent transition-colors">
						<Facebook class="h-5 w-5" />
					</a>
				</div>
			</div>

			<!-- Services -->
			<div>
				<h3 class="text-lg font-semibold mb-4 text-white">Our Services</h3>
				<ul class="space-y-3">
					<li>
						<a href="/services" class="text-background/70 hover:text-accent transition-colors text-sm">
							Tax Preparation & Planning
						</a>
					</li>
					<li>
						<a href="/services" class="text-background/70 hover:text-accent transition-colors text-sm">
							Bookkeeping Services
						</a>
					</li>
					<li>
						<a href="/services" class="text-background/70 hover:text-accent transition-colors text-sm">
							Payroll Management
						</a>
					</li>
					<li>
						<a href="/services" class="text-background/70 hover:text-accent transition-colors text-sm">
							Audit & Assurance
						</a>
					</li>
					<li>
						<a href="/services" class="text-background/70 hover:text-accent transition-colors text-sm">
							Business Advisory
						</a>
					</li>
					<li>
						<a href="/services" class="text-background/70 hover:text-accent transition-colors text-sm">
							CFO Services
						</a>
					</li>
				</ul>
			</div>

			<!-- Tax Deadlines -->
			<div>
				<h3 class="text-lg font-semibold mb-4 text-white flex items-center gap-2">
					<Calendar class="h-5 w-5 text-accent" />
					Tax Deadlines
				</h3>
				<ul class="space-y-3">
					<li class="bg-background/5 rounded-lg p-3">
						<p class="text-accent font-semibold text-sm">January 15</p>
						<p class="text-background/70 text-xs">Q4 Estimated Tax Payment</p>
					</li>
					<li class="bg-background/5 rounded-lg p-3">
						<p class="text-accent font-semibold text-sm">April 15</p>
						<p class="text-background/70 text-xs">Individual Tax Returns Due</p>
					</li>
					<li class="bg-background/5 rounded-lg p-3">
						<p class="text-accent font-semibold text-sm">March 15</p>
						<p class="text-background/70 text-xs">S-Corp & Partnership Returns</p>
					</li>
				</ul>
				<a href="/tax-center" class="inline-flex items-center gap-1 text-accent hover:text-accent/80 text-sm font-medium mt-3 transition-colors">
					View Full Calendar
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="text-lg font-semibold mb-4 text-white">Contact Us</h3>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<MapPin class="h-5 w-5 text-accent mt-0.5" />
						<span class="text-background/70 text-sm">
							456 Financial District<br />
							Suite 200<br />
							Metropolitan City, NY 10001
						</span>
					</li>
					<li class="flex items-center gap-3">
						<Phone class="h-5 w-5 text-accent" />
						<a href="tel:555-234-8200" class="text-background/70 hover:text-accent transition-colors text-sm">
							(555) 234-8200
						</a>
					</li>
					<li class="flex items-center gap-3">
						<Mail class="h-5 w-5 text-accent" />
						<a href="mailto:info@greenfieldcpa.com" class="text-background/70 hover:text-accent transition-colors text-sm">
							info@greenfieldcpa.com
						</a>
					</li>
					<li class="flex items-start gap-3">
						<Clock class="h-5 w-5 text-accent mt-0.5" />
						<span class="text-background/70 text-sm">
							Mon-Fri: 8:00 AM - 6:00 PM<br />
							Sat: By Appointment<br />
							Extended hours during tax season
						</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
			<p class="text-background/50 text-sm">
				&copy; {new Date().getFullYear()} Greenfield & Associates CPA. All rights reserved.
			</p>
			<div class="flex gap-6 text-sm">
				<a href="#" class="text-background/50 hover:text-accent transition-colors">Privacy Policy</a>
				<a href="#" class="text-background/50 hover:text-accent transition-colors">Terms of Service</a>
				<a href="#" class="text-background/50 hover:text-accent transition-colors">Client Portal</a>
			</div>
		</div>
	</div>
</footer>
