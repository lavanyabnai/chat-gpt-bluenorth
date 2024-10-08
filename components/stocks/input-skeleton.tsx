export const InputDashboardSkeleton = () => {
  return (
    <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 ">
      <div className="float-right inline-block w-fit rounded-full bg-zinc-300 px-2 py-1 text-xs text-transparent">
        xxxxxxx
      </div>
      <div className="mb-1 w-fit rounded-md bg-zinc-100 text-lg text-transparent">
        xxxx
      </div>
      <div className="w-fit rounded-md bg-zinc-100 text-3xl font-bold text-transparent">
        xxxx
      </div>
      <div className="text mt-1 w-fit rounded-md bg-zinc-100 text-xs text-transparent">
        xxxxxx xxx xx xxxx xx xxx
      </div>

      <div className="relative -mx-4 cursor-col-resize">
        <div style={{ height: 300 }}></div>
      </div>
    </div>
  )
}
