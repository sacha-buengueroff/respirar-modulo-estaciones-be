import ApplicationsFactoryDAO from '../model/DAO/applicationFactory.js'
import config from '../config.js'
import Mailer from '../libraries/mailer.js'
class ApiApplication {
    constructor() {
        this.applicationsModel = ApplicationsFactoryDAO.get(config.MODO_PERSISTENCIA)
    }   
    getApplications = async id => {
        return id? await this.applicationsModel.findApplication(id) : await this.applicationsModel.findApplications()
    }
    postApplication = async application => {
        return await this.applicationsModel.saveApplication(application)
    }  
    updateApplication = async (application, id) => {
        return await this.applicationsModel.updateApplication(application, id)
    }   
    rejectApplication = async id => {
        let application = await this.applicationsModel.deleteApplication(id)
        await Mailer.sendRefusalMail(application.message.email)
        return application
    }
    deleteApplication = async id => {
        let application = await this.applicationsModel.deleteApplication(id)
        return application
    }
}
export default ApiApplication