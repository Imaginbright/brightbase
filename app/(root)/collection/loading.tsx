import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      {/* Page Title */}

      {/* Search + Filter */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <Skeleton className="h-14 flex-1" />
        <Skeleton className="h-14 w-44" />
      </div>

      {/* Question List */}
      <div className="mt-10 flex w-full flex-col gap-6">
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
