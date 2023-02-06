"use strict";
exports.__esModule = true;
exports.ORDERBY = exports.CALENDAR_SORT = exports.PRODUCT_SORT = exports.AGENT_SORT = exports.PROJECT_SORT = exports.CUSTOMER_SORT = exports.SORT = exports.PAGE_START = exports.PAGE_LIMIT = exports.PER_PAGE = void 0;
var PER_PAGE = 10;
exports.PER_PAGE = PER_PAGE;
var PAGE_LIMIT = 100;
exports.PAGE_LIMIT = PAGE_LIMIT;
var PAGE_START = 1;
exports.PAGE_START = PAGE_START;
var SORT = {
    DESC: "DESC",
    ASC: "ASC"
};
exports.SORT = SORT;
var CUSTOMER_SORT = {
    CREATEDAT: "customers.createdAt"
};
exports.CUSTOMER_SORT = CUSTOMER_SORT;
var PROJECT_SORT = {
    CREATEDAT: "projects.createdAt"
};
exports.PROJECT_SORT = PROJECT_SORT;
var AGENT_SORT = {
    CREATEDAT: "agents.createdAt"
};
exports.AGENT_SORT = AGENT_SORT;
var CALENDAR_SORT = {
    CREATEDAT: "calendars.createdAt"
};
exports.CALENDAR_SORT = CALENDAR_SORT;
var PRODUCT_SORT = {
    CREATEDAT: "products.createdAt"
};
exports.PRODUCT_SORT = PRODUCT_SORT;
var ORDERBY = function (SORT_SET, SORT_BY, SORTING) {
    if (!SORT_SET[SORT_BY])
        SORT_BY = SORT_SET.CREATED_AT;
    else
        SORT_BY = SORT_SET[SORT_BY];
    if (!SORT[SORTING])
        SORTING = SORT.ASC;
    else
        SORTING = SORT[SORTING];
    return { SORT_BY: SORT_BY, SORT: SORTING };
};
exports.ORDERBY = ORDERBY;
