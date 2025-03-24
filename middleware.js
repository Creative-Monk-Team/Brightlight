import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  
  // Check if the hostname is the non-www version
  if (url.hostname === 'brightlightimmigration.ca') {
    // Redirect to the www version
    url.hostname = 'www.brightlightimmigration.ca';
    return NextResponse.redirect(url.toString(), 301); // 301 for permanent redirect
  }

  return NextResponse.next();
}

// Optional: Restrict middleware to specific paths (e.g., all pages)
export const config = {
  matcher: '/:path*',
};