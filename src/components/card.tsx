import type { ReactNode } from 'react';

export default function Card({
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex h-60 items-center justify-center">Card Form</div>
      <div className="mx-auto max-w-md text-center"></div>
    </div>
  );
}
