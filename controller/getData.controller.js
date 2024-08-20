export const getData=async(req,res)=>{
    try {
        res.status(200).send({message:"Data fetched successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"something went wrong"}); 
    }
}