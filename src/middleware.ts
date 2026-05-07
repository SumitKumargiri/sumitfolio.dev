import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware for request handling, authentication, and redirects
 */
export function middleware(_request: NextRequest) {
  // Example: Redirect old routes to new ones
  // const pathname = request.nextUrl.pathname;
  // if (pathname.startsWith('/old-route')) {
  //   return NextResponse.redirect(new URL('/new-route', request.url));
  // }

  // Example: Check authentication for protected routes
  // const token = request.cookies.get('token');
  // if (pathname.startsWith('/admin') && !token) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
