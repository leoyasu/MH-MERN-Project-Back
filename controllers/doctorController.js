const doctors = ['Ramirez','Alvarez','Perez']

const Doctors = require('../models/doctorModel')

const doctorController = {
    getAllDoctors: async(req,res) => {
        try {
            const foundDoctors = await Doctors.find()
            return res.status(200).json({sucess:true,message: "All doctors",doctor: foundDoctors})
        } catch (error) {
            return res.status(500).json({sucess:false})
        }
    },
    getDoctor: async(req,res) => {
        try {
            const foundDoctor = await Doctors.findOneAndUpdate({ _id:req.params.id})
            return res.status(200).json({sucess:true, doctor: foundDoctor,message: "The doctor has beeb found"})
        } catch (error) {
            return res.status(500).json({sucess:false})
        }
    },
    addDoctor: async (req,res) => {

        try {
            const newDoctor = await Doctors.create(req.body)
            return res.status(201).json({sucess:true, doctor: newDoctor,message: "A doctor has been created"})
        } catch (error) {
            return res.status(500).json({sucess:false})
        }
    },
    updateDoctor: async(req,res) => {
        try {
            const updatedDoctor = await Doctors.findOneAndUpdate({ _id:req.params.id}, req.body, {new:true})
            return res.status(200).json({sucess:true, doctor: updatedDoctor,message: "The doctor has been updated"})
        } catch (error) {
            return res.status(500).json({sucess:false})
        }
    },
    deleteDoctor: async(req,res) => {
        try {
            const updatedDoctor = await Doctors.findOneAndRemove({ _id:req.params.id})
            return res.status(200).json({sucess:true, message: "The doctor has been removed"})
        } catch (error) {
            return res.status(500).json({sucess:false})
        }
    }
}

module.exports = doctorController