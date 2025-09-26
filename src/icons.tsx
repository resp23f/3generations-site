import React from 'react';
export const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" strokeWidth="2" />
  </svg>
);
export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.08 4.18 2 2 0 015.06 2h3a2 2 0 012 1.72c.12.89.3 1.76.54 2.6a2 2 0 01-.45 2.11L9 9a16 16 0 006 6l.57-1.15a2 2 0 012.11-.45c.84.24 1.71.42 2.6.54A2 2 0 0122 16.92z"/>
  </svg>
);
export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M4 4h16v16H4z" />
    <path strokeWidth="2" d="M22 6l-10 7L2 6" />
  </svg>
);
export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" d="M12 21s-7-4.35-7-10a7 7 0 1114 0c0 5.65-7 10-7 10z"/>
    <circle cx="12" cy="11" r="3" strokeWidth="2"/>
  </svg>
);
