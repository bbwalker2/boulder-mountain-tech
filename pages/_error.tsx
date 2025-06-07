import { NextPage } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center text-white bg-black">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg text-gray-400">
        {statusCode
          ? `An error ${statusCode} occurred on the server.`
          : 'An error occurred on the client.'}
      </p>
    </div>
  );
};

// SSR-compatible way to capture error codes
ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default ErrorPage;