import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="space-y-6">
      {/* Header: Title + Ask Button */}
      <div className="flex w-full flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-10 w-full max-w-xs sm:w-48 rounded-md" />{" "}
        {/* Title */}
        <Skeleton className="h-12 w-full max-w-xs sm:w-36 rounded-md" />{" "}
        {/* Ask Button */}
      </div>

      {/* Search + Filter */}
      <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <Skeleton className="h-14 w-full sm:flex-1 rounded-md" /> {/* Search */}
        <Skeleton className="h-14 w-full sm:w-44 rounded-md" /> {/* Filter */}
      </div>

      {/* HomeFilter placeholder */}
      <div className="mt-6">
        <Skeleton className="h-12 w-full rounded-md" />
      </div>

      {/* Question List */}
      <div className="mt-10 flex flex-col gap-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>
    </section>
  );
};

export default Loading;
