import Image from "next/image";

export function DecideursLogo() {
  return (
    <div className="relative py-16">
      <Image
        src="/images/fond-decideurs.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/20" />
      <div className="relative z-10 flex items-center justify-center">
        <a href="https://www.decideurs-magazine.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/decideurs.jpg" alt="Décideurs Magazine 2025" width={500} height={250} className="object-contain" />
        </a>
      </div>
    </div>
  )
}