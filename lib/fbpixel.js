export const FB_PIXEL_ID = '576043718512204';

export const pageview = () => {
  window.fbq('track', 'PageView');
};

export const event = (name, options = {}) => {
  window.fbq('track', name, options);
};
