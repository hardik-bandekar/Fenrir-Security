export default function LeftSection() {
  return (
    <div className="hidden md:flex w-1/2 relative overflow-hidden text-white p-16 items-center">
      <div className="relative z-10 max-w-lg">
        <h1 className="text-4xl font-semibold leading-tight">
          Expert level Cybersecurity <br />
          in <span className="text-teal-400">hours</span> not weeks.
        </h1>

        <div className="mt-8 space-y-4 text-gray-300">
          <p className="flex items-start gap-3">
            <span className="text-emerald-400 mt-1">✔</span>
            Effortlessly spider and map targets to uncover hidden security flaws
          </p>
          <p className="flex items-start gap-3">
            <span className="text-emerald-400 mt-1">✔</span>
            Deliver high-quality, validated findings in hours, not weeks.
          </p>
          <p className="flex items-start gap-3">
            <span className="text-emerald-400 mt-1">✔</span>
            Generate professional, enterprise-grade security reports
            automatically.
          </p>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          <span className="text-green-500">★</span> Trustpilot <br />
          Rated 4.5/5.0{" "}
          <span className="text-[11px] text-gray-500">(100k+ reviews)</span>
        </div>
      </div>
    </div>
  );
}
