import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../adam.jpeg';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image 
        src={logoPic}
        width={200}
        height={200}
        class="rounded-full"
      />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
