import { useParams } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import { lazy, Suspense } from 'react';

function Day01() {
  const { day, name } = useParams();

  const capital = name.charAt(0).toUpperCase() + name.slice(1);

  const AsyncPage = lazy(() =>
    import(/* @vite-ignore */ `../components/${day}/${capital}/${capital}.jsx`)
  );

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <AsyncPage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Day01;
