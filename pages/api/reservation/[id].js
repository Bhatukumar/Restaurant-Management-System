import Reservation from "../../../models/Reservation";
import dbConnect from "../../../util/dbConnect";

const handler = async(req,res)=>{
    await dbConnect();
    const {method,query:{id},} = req;

    if(method === "GET"){
        try{
            const reservation = await Reservation.findById(id);
            res.status(200).json(reservation);
        } catch(err){
            console.log(err);
        }
    }

    if (method === "DELETE"){
        // console.log("string here"+req.body);
        try{
            const newReservation = await Reservation.findByIdAndDelete(id);
            res.status(200).json(newReservation);
            res.send();
        } catch(err){
            console.log(err);
            res.status(500);
            res.send("Request Failed");
        }
    }
};

export default handler;