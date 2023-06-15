import AgentUlHttp from '../httpMethods/agentUlHttp.js' 
import CbHttp from '../httpMethods/cbHttp.js';

class ApiCheck { 
    
    constructor(){
       this.agentHttp = new AgentUlHttp() 
       this.cbHttp  = new CbHttp()
    }

    async checkAgentUl(){
        // Check if docker is up
        await this.agentHttp.getAgentStatus()

        // Check if service group exist, else create it
        await this.agentHttp.checkService()
    }

    async checkCb(){
        if(await this.cbHttp.getCbStatus() != 200){
            throw new Error('Context Broker no disponible');
        }

        //Chequea que la Subscripción  a draco este creada, si no la crea
        await this.cbHttp.checkSuscripcionDraco()
    } 
}
export default ApiCheck