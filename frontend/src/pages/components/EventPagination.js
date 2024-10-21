import React from "react";
import { Pagination } from "react-bootstrap";

const EventPagination = ({ totalPages, currentPage, onPageChange }) => (
  <Pagination className="justify-content-center mt-4">
    {Array.from({ length: totalPages }, (_, index) => (
      <Pagination.Item
        key={index + 1}
        active={index + 1 === currentPage}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </Pagination.Item>
    ))}
  </Pagination>
);

export default EventPagination;
