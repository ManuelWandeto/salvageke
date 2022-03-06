import {Pagination as BootrapPagination} from 'react-bootstrap'
import { useEffect, useState } from 'react';

const Pagination = ({onPageChange, totalPages, className}) => {
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        onPageChange(activePage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage])

    const createPagination = (totalPages) => {
        let pageItems = [];
        for (let i = 1; i <= totalPages; i++) {
          pageItems.push(
            <BootrapPagination.Item
              key={i}
              active={i === activePage}
              onClick={() => setActivePage(i)}
            >
              {i}
            </BootrapPagination.Item>
          );
        }
        return pageItems;
    };
    return ( 
        <BootrapPagination className={className}>
            <BootrapPagination.First
            onClick={() => setActivePage(1)}
            disabled={
                totalPages === 1 || activePage === 1
            }
            />
            <BootrapPagination.Prev
            onClick={() =>
                setActivePage((prev) => prev - 1)
            }
            disabled={
                totalPages === 1 || activePage === 1
            }
            />
            {totalPages <= 4 ? (
            createPagination(totalPages)
            ) : (
            <>
                {createPagination(2)}
                {activePage > 2 &&
                activePage < totalPages && (
                    <>
                    <BootrapPagination.Item
                        key={activePage}
                        active={true}
                    >
                        {activePage}
                    </BootrapPagination.Item>
                    </>
                )}
                <BootrapPagination.Ellipsis />
                <BootrapPagination.Item
                key={totalPages}
                active={totalPages === activePage}
                onClick={() =>
                    setActivePage(totalPages)
                }
                >
                {totalPages}
                </BootrapPagination.Item>
            </>
            )}
            <BootrapPagination.Next
            onClick={() =>
                setActivePage((prev) => prev + 1)
            }
            disabled={
                totalPages === 1 ||
                activePage === totalPages
            }
            />
            <BootrapPagination.Last
            onClick={() => setActivePage(totalPages)}
            disabled={
                totalPages === 1 ||
                activePage === totalPages
            }
            />
        </BootrapPagination>
    );
}
 
export default Pagination;