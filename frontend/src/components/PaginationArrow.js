import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from "../css/PaginationArrow.module.css";

export default function PaginationArrow() {
    const [page, setPage] = useState(1);
    const maxPage = 4;
    const handleNextPage = () => {
        setPage(page + 1);
    };
    const handlePreviousPage = () => {
        setPage(page - 1);
    };

        return(
            <div className={styles.pagination}>
                <button className={styles.pagination__button} onClick={handlePreviousPage} disabled={page === 1}>
                    <IoIosArrowBack size={100} />
                </button>
                <button className={styles.pagination__button} onClick={handleNextPage} disabled={page === maxPage}>
                    <IoIosArrowForward size={100} />
                </button>
            </div> 
        )
}