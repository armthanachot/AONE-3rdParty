import {stringToArray} from "./app"
const handleProductEstimate = async(project_code,product_estimate)=>{
    try {
        
        let estimate = []
        const result = []
        await Object.keys(product_estimate).map(async (key)=>{
            product_estimate[key] = await stringToArray(product_estimate[key])
        })
        const {estimate_status,product_business_id,product_code,product_id,product_amount,total} = product_estimate
        await product_id.map((item,index)=>{
            estimate.push(project_code,item,estimate_status[index],product_business_id[index],product_code[index],product_amount[index],total[index])
            result.push(estimate)
            estimate = []
        })
        console.log(result);
        return result
    } catch (error) {
        console.log(error.message);
        return false
        
    }
}

const handleProjectFile = async (fields,projects) => {
    try {
        const key = Object.keys(fields)
        projects.map((item,index) => {
            let { type, filePath } = item
            if (type === key[index]) fields[key[index]].push(filePath)
        })
        return fields
    } catch (error) {
        console.log(error.message);
        return false
    }
}

export {handleProductEstimate,handleProjectFile}