import React from "react";

function Paginationdiv({ page, setPage, totalPages }) {

  const getPages = () => {
    let pages = [];
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="container mx-auto flex justify-center items-center gap-2 mt-8 flex-wrap">

      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-3 py-1 border rounded-4xl bg-gray-800 text-white disabled:opacity-40"
      >
        Prev
      </button>

      {/* First Page */}
      {page > 3 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="px-3 py-1 border rounded-4xl"
          >
            1
          </button>
          <span>...</span>
        </>
      )}

      {/* Sliding Pages */}
      {getPages().map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 border rounded-4xl transition ${
            p === page ? "bg-white text-black font-semibold rounded-4xl" : "hover:bg-gray-700"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Last Page */}
      {page < totalPages - 2 && (
        <>
          <span>...</span>
          <button
            onClick={() => setPage(totalPages)}
            className="px-3 py-1 border rounded-4xl"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded-4xl bg-gray-800 text-white disabled:opacity-40"
      >
        Next
      </button>

    </div>
  );
}

export default Paginationdiv;