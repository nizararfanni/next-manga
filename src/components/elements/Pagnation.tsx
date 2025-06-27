import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PagnationProps {
  page: number;
  setPage: (page: number) => void;
  newsManga?: {
    last_page?: number;
  };
}

const Pagnation = ({ page, setPage, newsManga }: PagnationProps) => {
  const visiblePages = Array.from({ length: 3 }, (_, i) => {
    const start = Math.max(
      1,
      Math.min(page - 1, (newsManga?.last_page ?? 1) - 2)
    );
    return start + i;
  });
  return (
    <div>
      {" "}
      <Pagination className="bg-gray-700">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setPage(Math.max(1, page - 1))}
            />
          </PaginationItem>

          {visiblePages.map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={() => setPage(p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                setPage(Math.min(page + 1, newsManga?.last_page ?? page + 1))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Pagnation;
