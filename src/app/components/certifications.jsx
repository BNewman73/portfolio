const certs = [
  {
    src: "/certs/aws-certified-cloud-practitioner.png",
    alt: "AWS Certified Cloud Practitioner",
  },
  {
    src: "/certs/aws-certified-solutions-architect-associate.png",
    alt: "AWS Certified Solutions Architect – Associate",
  },
  {
    src: "certs/OCAJSE8.png",
    alt: "Oracle Certified Associate Java SE 8",
  },
  {
    src: "/certs/JAVA8OJA.png",
    alt: "Oracle Java 8 Associate",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Industry credentials I&apos;ve earned along the way.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
          {certs.map((cert) => (
            <div key={cert.alt} className="flex items-center justify-center">
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-40 w-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
