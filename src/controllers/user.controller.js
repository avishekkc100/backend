import {asyncHandler} from '../utils/asyncHandler.js'

const registerUser = asyncHandler (async (req, res)=>{
    res.status(200).json({
        message:'ok'
    })
})
/*
const registerUser = async (req, res) => {
    try {

        // print incoming JSON data in terminal
        console.log(req.body);

        // send the same data back as response
        return res.status(200).json({
            message: "Data received successfully",
            data: req.body
        });

    } catch (error) {

        return res.status(500).json({
            message: "Error receiving data"
        });

    }
};
*/

export {registerUser}