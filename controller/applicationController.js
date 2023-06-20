import ApiApplication from '../api/apiApplication.js'
import { validate, schema_application } from './schemas.js'

class ApplicationController {
    constructor() {
        this.apiApplication = new ApiApplication()
    }
    postApplication = async (req,res) => {
        const application = req.body
        let response = validate(application, schema_application)
        if (Object.keys(response).length === 0) {
            response = await this.apiApplication.postApplication(application)
        }
        res.status(response.status).json(response.message)
    }
    getApplications = async (req,res) => {
        const { idSolicitud } = req.params
        let response = await this.apiApplication.getApplications(idSolicitud)
        res.status(response.status).json(response.message)
    }
    rejectApplication = async (req,res) =>{
        const { idSolicitud } = req.params
        let response = await this.apiApplication.rejectApplication(idSolicitud)
        res.status(response.status).json(response.message)
    }
    deleteApplication = async (req,res) =>{
        const { idSolicitud } = req.params
        let response = await this.apiApplication.deleteApplication(idSolicitud)
        res.status(response.status).json(response.message)
    }
}
export default ApplicationController