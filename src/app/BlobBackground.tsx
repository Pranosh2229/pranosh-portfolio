export default function BlobBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--surface), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 -right-32 h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #f97316, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--accent-soft), transparent 70%)",
        }}
      />
    </div>
  );
}
