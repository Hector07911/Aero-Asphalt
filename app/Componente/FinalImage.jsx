'use client';

import Image from 'next/image';

export default function FinalImage() {
  return (
    <section className="w-full bg-black relative aspect-[21/9]">
      <Image 
        src="/img-final.png" 
        alt="Final image" 
        fill
        sizes="100vw"
        className="object-cover"
        loading="lazy"
      />
    </section>
  );
}
