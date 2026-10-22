import { resolve } from '$app/paths';

// Preserve the configured static mount prefix while using the supported Kit API.
export const base = resolve('/').replace(/\/$/, '');
