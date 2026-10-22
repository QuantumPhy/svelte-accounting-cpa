<script lang="ts">
	import * as Card from '#lib/components/ui/card/index.js';
	import { Badge } from '#lib/components/ui/badge/index.js';
	import { Mail } from 'lucide-svelte';
import { Linkedin } from '../icons/cocoding-brands/index.js';

	interface Props {
		name: string;
		title: string;
		credentials: string[];
		imageUrl: string;
		bio: string;
		email?: string;
		linkedin?: string;
		specialties?: string[];
	}

	let { name, title, credentials, imageUrl, bio, email, linkedin, specialties = [] }: Props = $props();
</script>

<Card.Root class="overflow-hidden group hover:shadow-xl transition-all duration-300">
	<div class="relative aspect-[4/5] overflow-hidden">
		<img
			src={imageUrl}
			alt={name}
			class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
		/>
		<!-- Gradient overlay -->
		<div class="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>

		<!-- Credentials badges -->
		<div class="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end max-w-[60%]">
			{#each credentials as credential}
				<Badge class="bg-accent text-white border-0 text-xs font-semibold">
					{credential}
				</Badge>
			{/each}
		</div>

		<!-- Name and title on image -->
		<div class="absolute bottom-0 left-0 right-0 p-4 text-white">
			<h3 class="text-xl font-bold">{name}</h3>
			<p class="text-white/80 text-sm">{title}</p>
		</div>
	</div>

	<Card.Content class="p-4">
		<p class="text-muted-foreground text-sm leading-relaxed line-clamp-3">
			{bio}
		</p>

		{#if specialties.length > 0}
			<div class="flex flex-wrap gap-1.5 mt-3">
				{#each specialties as specialty}
					<span class="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
						{specialty}
					</span>
				{/each}
			</div>
		{/if}
	</Card.Content>

	<Card.Footer class="px-4 pb-4 pt-0 flex gap-2">
		{#if email}
			<a
				href="mailto:{email}"
				class="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
			>
				<Mail class="h-4 w-4" />
				Email
			</a>
		{/if}
		{#if linkedin && linkedin !== '#'}
			<a
				href={linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#0077b5]/10 text-[#005582] hover:bg-[#0077b5] hover:text-white transition-colors text-sm font-medium"
			>
				<Linkedin class="h-4 w-4" />
				LinkedIn
			</a>
		{/if}
	</Card.Footer>
</Card.Root>
