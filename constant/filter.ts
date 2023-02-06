const PER_PAGE = 10
const PAGE_LIMIT = 100
const PAGE_START = 1
const SORT = {
    DESC: `DESC`,
    ASC: `ASC`
}
const CUSTOMER_SORT = {
    CREATEDAT: "customers.createdAt"
}
const PROJECT_SORT = {
    CREATEDAT: "projects.createdAt"
}

const AGENT_SORT = {
    CREATEDAT: "agents.createdAt"
}

const CALENDAR_SORT = {
    CREATEDAT: "calendars.createdAt"
}

const PRODUCT_SORT = {
    CREATEDAT: "products.createdAt"
}
const ORDERBY = (SORT_SET, SORT_BY, SORTING) => {
    if (!SORT_SET[SORT_BY]) SORT_BY = SORT_SET.CREATED_AT
    else SORT_BY = SORT_SET[SORT_BY]

    if (!SORT[SORTING]) SORTING = SORT.ASC
    else SORTING = SORT[SORTING]
    return { SORT_BY, SORT: SORTING }
}
export {

    PER_PAGE, PAGE_LIMIT, PAGE_START, SORT, CUSTOMER_SORT, PROJECT_SORT, AGENT_SORT,PRODUCT_SORT, CALENDAR_SORT, ORDERBY
}