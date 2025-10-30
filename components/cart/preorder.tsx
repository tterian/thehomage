import { ClockIcon } from "@heroicons/react/24/outline";

export function Preorder() {
    return (
        <button
        aria-label="Preorder"
        className='relative flex w-full items-center justify-center rounded-full bg-yellow-200 p-4 tracking-wide text-black hover:bg-yellow-300'
    >
        <div className="absolute left-0 ml-4">
            <ClockIcon className="h-5 text-black" />
        </div>
        Preorder
    </button>
  );
}