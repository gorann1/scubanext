import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <header className="body-font text-blue-800 ">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row ">
          <a className="title-font mb-4 flex items-center font-medium md:mb-0">
            <span className="ml-3 text-xl"> Windicss + Nextjs</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a className="mr-5 text-blue-800 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Blog</a>
            <a className="mr-5 hover:text-gray-900">About us</a>
            <a className="mr-5 hover:text-gray-900">Contact us</a>
          </nav>
          <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 py-1 px-3 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <h2 className="text-2xl font-bold">
        Boilerplate code for your Nextjs project with Tailwind CSS
      </h2>
      <h3 className="text-lg font-semibold">Next js Boilerplate Features</h3>
      <p>Built-in feature from Next.js:</p>
    </Main>
  );
};

export default Index;
