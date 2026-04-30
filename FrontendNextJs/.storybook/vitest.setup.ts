import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/nextjs-vite';
import * as projectAnnotations from './preview';
import { visAnnotations, vis } from 'storybook-addon-vis/vitest-setup';
import { page, isSnapshotEnabled } from 'storybook-addon-vis';

// Disable the auto-snapshot afterEach hook — we fire it manually below
// so we can capture both light and dark in a single project pass.
vis.setup({ auto: false });

function applyTheme(dark: boolean) {
	if (typeof document === 'undefined') return;
	document.documentElement.classList.toggle('dark', dark);
	document.body.style.backgroundColor = dark ? '#020617' : '#ffffff';
}

setProjectAnnotations([
	a11yAddonAnnotations,
	visAnnotations,
	projectAnnotations,
	{
		async afterEach(ctx) {
			if (!isSnapshotEnabled(ctx.tags)) return;

			// Light theme snapshot
			applyTheme(false);
			await page.toMatchImageSnapshot({ snapshotKey: 'light' });

			// Dark theme snapshot
			applyTheme(true);
			await page.toMatchImageSnapshot({ snapshotKey: 'dark' });

			// Restore to default so subsequent renders start clean
			applyTheme(false);
		}
	}
]);
