import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchImages } from '../api/unsplashApi';
import { useImageStore } from '../store/useImageStore';
import { useEffect, useRef } from 'react';
import ImageItem from './ImageItem';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ImageGrid() {
  const query = useImageStore((state) => state.query);
  const loader = useRef();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['images', query],
    queryFn: ({ pageParam = 1 }) => fetchImages({ pageParam, query }),
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loader, fetchNextPage, hasNextPage]);

  if (isLoading) return <p className="text-center text-white">Loading images...</p>;

  return (
    <>
      <div className="row g-4">
        {data?.pages.map((group) =>
          group.map((img) => (
            <div key={img.id} className="col-6 col-sm-4 col-md-3 col-lg-3">
              <ImageItem image={img} />
            </div>
          ))
        )}
      </div>

      <div ref={loader} className="text-center my-4">
        {isFetchingNextPage && <p className="text-white">Loading more...</p>}
      </div>
    </>
  );
}
