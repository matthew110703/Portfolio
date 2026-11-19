import { LoadingOutlined } from "@/components/icons";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3">
      <LoadingOutlined className="text-primary text-3xl" aria-hidden="true" />
      <p className="text-ink-muted font-mono text-xs tracking-widest uppercase">
        Loading...
      </p>
    </div>
  );
}
