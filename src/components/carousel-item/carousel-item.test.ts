import '../../awc.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<awc-carousel-item>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <awc-carousel-item></awc-carousel-item> `);

    expect(el).to.exist;
  });

  it('should pass accessibility tests', async () => {
    // Arrange
    const el = await fixture(html` <div role="list"><awc-carousel-item></awc-carousel-item></div> `);

    // Assert
    await expect(el).to.be.accessible();
  });
});
