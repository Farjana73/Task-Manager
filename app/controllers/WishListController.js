export const CreateWish=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const ReadWishList=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const RemoveWish=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}
