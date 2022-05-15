export const sortByTitle = (arr, sort, setSort) => {
    setSort(!sort)
    return [...arr].sort((a, b) => {
        a = a.title.toLowerCase();
        b = b.title.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    })
}

export const descSortByTitle = (arr, sort, setSort) => {
    setSort(!sort)
    return [...arr].sort((a, b) => {
        a = a.title.toLowerCase();
        b = b.title.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    }).reverse()
}

export const sortByBody = (arr, sort, setSort) => {
    setSort(!sort)
    return [...arr].sort((a, b) => {
        a = a.body.toLowerCase();
        b = b.body.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    })
}

export const descSortByBody = (arr, sort, setSort) => {
    setSort(!sort)
    return [...arr].sort((a, b) => {
        a = a.body.toLowerCase();
        b = b.body.toLowerCase();

        return a < b ? -1 : a > b ? 1 : 0;
    }).reverse()
}

export const sortByID = (arr, sort, setSort) => {
    setSort(!sort)
    return [...arr].sort((a, b) => {
        return a.id - b.id
    })
}

export const descSortByID = (arr, sort, setSort) => {
    setSort(!sort)
    return [...arr].sort((a, b) => {
        return a.id - b.id
    }).reverse()
}