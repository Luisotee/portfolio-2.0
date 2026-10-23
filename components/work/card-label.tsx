/** Small uppercase label used inside project and GitHub cards. */
export function CardLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 font-mono text-xs tracking-widest text-faint uppercase">{children}</p>
}
