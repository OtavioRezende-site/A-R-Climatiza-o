import { useEffect } from 'react';
import { GHL_WIDGET_ID } from '../config/siteConfig';

export default function GHLChatWidget() {
  useEffect(() => {
    // Check if script is already present
    const existing = document.querySelector('script[data-widget-id="6abe750893bdc8881e8ca6ba"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', GHL_WIDGET_ID);
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
