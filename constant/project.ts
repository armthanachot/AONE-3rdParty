const PROJECT_ACTIVE = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    DELETED: "DELETED",
}
const PROJECT_TYPE = {
    PROJECT_TOWNHOME: "PROJECT TOWNHOME",
    APARTMENT: "APARTMENT",
    CONDO: "CONDO",
    BUILDING: "BUILDING",
}
const ESTIMATE_STATUS = {
    PRESENTS: "PRESENT",
    QT: "QT",
    FEEDBACK: "FEEDBACK",
    PO: "PO",
    AMOUNT: "AMOUNT",
    PENDING: "PENDING"
}
const PROJECT_SOURCE = {
    OWN: "OWN",
    SHOP: "SHOP",
    OTHER: "OTHER",
}

const SALE_STATUS = {
    DONE: "DONE",
    OFFER: "OFFER",
    ALL_CLOSED: "ALL CLOSED",
    PARTIALLY_CLOSED: "PARTIALLY CLOSED",
    FAILED: "FAILED"
}

const PRODUCT_BUSINESS = {
    A: "A",
    B: "B",
    C: "C"
}

const CONSTRUCTIONS = {
    SPEC_PREPARE: "PREPARE THE SPECS",
    SUMMARY: "SUMMARY OF DRAWING AND PROCUREMENT OF MATERIALS",
    AUCTION: "AUCTION",
    AUCTION_RESULT: "AUCTION RESULT",
    UNDER_CONSTRUCTION: "UNDER CONSTRUCTION",
    CLOSE_THE_PROJECT: "CLOSE THE PROJECT"
}

const SUB_CONSTRUCTIONS = {
    PREPARE_AREA_LAYOUT: "PREPARE THE AREA AND BUILDING LAYOUT",
    PILLING: "PILLING",
    GROUND_FLOOR_FOUNDATION: "FOUNDATION WORK FOR GROUND FLOOR STRUCTION",
    SANITARY: "SANITARY SYSTEM STRUCTURE WORK",
    SECOND_FLOOR_ROOF_STRUCTURE: "SECOND FLOOR STRUCTURE WORK, ROOK STRUCTURE",
    ROOFING_STAIR_CONSTRUCTION: "ROOFING AND STAIR CONSTRUCTION",
    WALL_DOOR_FRAME_ELECTRICT_WATER: "WALL CONSTRUCTION, DOOR FRAME, ELECTRICITY AND WATER SUPPLY",
    WALL_PLATER_CEILING_INSTALLATION: "WALL PLASTERING AND CEILING INSTALLATION",
    WALL_MATERIAL_TILE_SANITARY: "WALL DECORATION MATERIALS, TILES, SANITARY WARE",
    CLEAN_KEEP_TIDY: "CLEAN, KEEP TIDY"
}
const FILE_FIELDS = {
    projectImg: [],
    photos: []
}
const PROJECT_TEMPLATE = {
    project: {},
    projectContact: [],
    estimate: {},
    file: []
}

const FILE_TOPIC = "projects"

const FILE_TYPE = {
    PROFILE: "PROFILE",
    IMAGES: "IMAGES"
}
export {
    PROJECT_ACTIVE, PROJECT_TYPE, ESTIMATE_STATUS, PROJECT_SOURCE, SALE_STATUS, PRODUCT_BUSINESS, CONSTRUCTIONS, SUB_CONSTRUCTIONS, FILE_FIELDS, PROJECT_TEMPLATE, FILE_TOPIC, FILE_TYPE
}