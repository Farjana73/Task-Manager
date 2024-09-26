

export const Login=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}


export const VerifyLogin=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const CreateUserProfile=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const UpdateUserProfile=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}

export const ReadUserProfile=async(req,res)=>{
    try {
        return res.json({status:"success","Message":""})
    }
    catch (e) {
        return res.json({status:"fail","Message":e.toString()})
    }
}





