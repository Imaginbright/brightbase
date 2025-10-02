import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="space-y-6">
      {/* Author + Avatar + Votes + Save */}
      <div className="flex w-full flex-col-reverse justify-between gap-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" /> {/* Avatar */}
          <Skeleton className="h-4 w-24" /> {/* Author name */}
        </div>

        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-20 rounded-md" /> {/* Votes placeholder */}
          <Skeleton className="h-8 w-20 rounded-md" /> {/* Save button */}
        </div>
      </div>

      {/* Title */}
      <Skeleton className="h-8 w-3/4 mt-2 rounded-md" />

      {/* Metrics */}
      <div className="flex flex-wrap gap-4 mt-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-24" />
      </div>

      {/* Content Preview */}
      <Skeleton className="h-40 w-full mt-4 rounded-md" />

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-6 w-16 rounded-full" />
        ))}
      </div>

      {/* Answers List */}
      <div className="mt-6 space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-24 w-full rounded-lg" />
        ))}
      </div>

      {/* Answer Form */}
      <Skeleton className="h-40 w-full mt-6 rounded-lg" />
    </section>
  );
};

export default Loading;
