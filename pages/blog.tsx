import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Blog = () => {
  const router = useRouter();

  useEffect(() => {
    const destination = 'https://blog.apurvashah.org'; // Replace this with the desired external URL
    window.location.href = destination;
  }, []);

  return (
    <div>
      Redirecting...
    </div>
  );
};

export default Blog;