import { newE2EPage } from '@stencil/core/testing';

describe('device-frame', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<device-frame></device-frame>');

    const element = await page.find('device-frame');
    expect(element).toHaveClass('hydrated');
  });
});
