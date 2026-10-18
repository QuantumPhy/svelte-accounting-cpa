import { base } from '$app/paths';

// Keep local navigation inside a nested static preview; preserve anchors and external links.
export function templateHref(href: string): string {
	return href.startsWith('/') && !href.startsWith('//') ? base + href : href;
}
