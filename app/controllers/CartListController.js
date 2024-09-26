export const CreateCart=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const ReadCartList=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const RemoveCart=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}


export const UpdateCart=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}
