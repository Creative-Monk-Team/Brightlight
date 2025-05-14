 

// pages/404.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage after 0 milliseconds
    router.replace('/');
  }, [router]);

  return null; // or a loader/spinner if you want
}
