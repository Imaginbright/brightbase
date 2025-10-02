import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section>
      {/* Profile Header */}
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Skeleton className="size-[140px] rounded-full" />

          <div className="mt-3 space-y-3">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-5 w-32" />

            <div className="mt-5 flex flex-wrap items-center gap-5">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-5 w-24" />
              ))}
            </div>

            <Skeleton className="mt-8 h-16 w-[300px]" />
          </div>
        </div>

        <Skeleton className="h-12 w-44 rounded-md" />
      </div>

      {/* Stats Section */}
      <div className="mt-10">
        <Skeleton className="h-8 w-32" />
        <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-28 w-full rounded-md" />
          ))}
        </div>
      </div>

      {/* Posts Section */}
      <div className="mt-10 flex gap-10">
        <div className="flex-[2]">
          <Skeleton className="h-10 w-40" />
          <div className="mt-5 flex flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))}
          </div>
        </div>

        {/* Sidebar Tags */}
        <div className="flex w-full min-w-[250px] flex-1 flex-col max-lg:hidden">
          <Skeleton className="h-7 w-32" />
          <div className="mt-7 flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-10 w-full rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
