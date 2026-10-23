/** Accent dot with a soft radar ping. */
export function LiveDot() {
  return (
    <span aria-hidden className="relative inline-block size-2 flex-none rounded-full bg-primary">
      <span className="absolute inset-0 rounded-full bg-primary motion-safe:animate-ping-soft" />
    </span>
  )
}
