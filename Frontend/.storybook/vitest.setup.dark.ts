import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/sveltekit';
import * as projectAnnotations from './preview';
import { visAnnotations, vis } from 'storybook-addon-vis/vitest-setup';

vis.setup({ auto: true });

setProjectAnnotations([
    a11yAddonAnnotations,
    visAnnotations,
    projectAnnotations,
    { initialGlobals: { theme: 'dark' } }
]);
