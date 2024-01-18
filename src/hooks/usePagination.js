import { useState, useEffect } from 'react';

const usePagination = (initialList) => {
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ pageRangeDisplayed, setPageRangeDisplayed ] = useState(3);

    const itemsPerPage = 12;
    const itemsViewed = pageNumber * itemsPerPage;

    const handlePageClick = (data) => {
        setPageNumber(data.selected);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            setPageRangeDisplayed(windowWidth < 900 ? 3 : 5);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.addEventListener('resize', handleResize);
        }
    }, []);

    const paginatedList = () => {
        const displayItems = initialList.slice( itemsViewed, itemsViewed + itemsPerPage );
        return displayItems;
    };

    return {
        itemsPerPage,
        pageNumber,
        pageRangeDisplayed,
        handlePageClick,
        paginatedList
    }
};

export default usePagination;