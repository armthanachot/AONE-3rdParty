const STORE_TYPE = {
    MATERIAL: "MATERIAL"
}
const USELESSKEY = {
    FINDBYID: {
        AGENT: ["agentContactId", "agentContactCode", "contactName", "positionId", "contactPhone", "line", "email", "citizenId", "contactNickname", "dateOfBirth", "spouseName", "spouseDateOfBirth", "numberOfChild", "favorite", "unfavorite", "characteristic"],
        ADDRESS: ["addressType", "address", "road", "soi", "provinceId", "districtId", "subDistrictId", "zipcode", "latitude", "longitude"]
    }
}

const FILE_TOPIC = "agent"
const SUB_FILE_TOPIC = "contact"
const STORE_FILE_TYPE = {
    CERTIFICATE: "CERTIFICATE",
    WORDMAP20: "WORDMAP20",
    PROFILE: "PROFILE"
}
const CONTACT_FILE_TYPE = {
    CITIZENID: "CITIZENID"
}
export {
    STORE_TYPE,
    USELESSKEY,
    FILE_TOPIC,
    SUB_FILE_TOPIC,
    STORE_FILE_TYPE,
    CONTACT_FILE_TYPE
}