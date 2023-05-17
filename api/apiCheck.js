import AgentUlHttp from '../httpMethods/agentUlHttp.js' 
import CbHttp from '../httpMethods/cbHttp.js';

class ApiCheck { 
    
    constructor(){
       this.agentHttp = new AgentUlHttp() 
       this.cbStatus  = new CbHttp()
    }

    async checkAgentUl(){
        // Chequea que este corriendo imagen
        if(await this.agentHttp.getAgentStatus() != 200){
            throw new Error('IotAgent no esta disponible');
        }

        // Chequea que el serviceGroup este creado , si no lo crea
        this.agentHttp.createService()
    }

    async checkCb(){
        if(await this.cbStatus.getCbStatus() != 200){
            throw new Error('Context Broker no disponible');
        }
    } 
}
export default ApiCheck