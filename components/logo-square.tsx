import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <Image src="/logo.png" alt="The Homage" width={42} height={42} />
  );
}
