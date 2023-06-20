import AgentUlHttp from '../httpMethods/agentUlHttp.js' 
import CbHttp from '../httpMethods/cbHttp.js';

class ApiCheck {  
    constructor() {
       this.agentHttp = new AgentUlHttp() 
       this.cbHttp  = new CbHttp()
    }
    async checkAgentUl() {
        // Check if Agent Ul Docker is up
        await this.agentHttp.getAgentStatus()
        // Check if service group exist, else create it
        await this.agentHttp.checkService()
    }
    async checkCb() {
        // Check if Context Broker Docker is up
        await this.cbHttp.getCbStatus()       
        // Check if Draco subscription exist, else create it
        await this.cbHttp.checkDracoSubscription()
    } 
}
export default ApiCheck