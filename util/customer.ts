const handleCustomerFile = async (customers) => {
    try {
        const file = {
            customerImg: [],
            images: [],
            citizenCardImg: [],
            companyCertificate: [],
            wordMap20: []
        }
        customers.map((item) => {
            let { type, filePath } = item
            if (type === 'customerImg') file.customerImg.push(filePath)
            if (type === 'images') file.images.push(filePath)
            if (type === 'citizenCardImg') file.citizenCardImg.push(filePath)
            if (type === 'companyCertificate') file.companyCertificate.push(filePath)
            if (type === 'wordMap20') file.wordMap20.push(filePath)
        })
        return file
    } catch (error) {
        return false
    }
}

export { handleCustomerFile }