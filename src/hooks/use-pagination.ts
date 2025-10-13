import { set_item_offset } from "@/redux/features/filter";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

type PaginationResult<T> = {
  currentItems: T[];
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};

function usePagination<T>(items: T[], itemsPerPage: number): PaginationResult<T> {
  const {itemOffset} = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    dispatch(set_item_offset(newOffset));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    currentItems,
    pageCount,
    handlePageClick,
  };
}

export default usePagination;
