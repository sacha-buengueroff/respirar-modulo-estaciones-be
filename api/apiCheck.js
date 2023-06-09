import AgentUlHttp from '../httpMethods/agentUlHttp.js' 
import CbHttp from '../httpMethods/cbHttp.js';

class ApiCheck { 
    
    constructor(){
       this.agentHttp = new AgentUlHttp() 
       this.cbHttp  = new CbHttp()
    }

    async checkAgentUl(){
        // Chequea que este corriendo imagen
        if(await this.agentHttp.getAgentStatus() != 200){
            throw new Error('IotAgent no esta disponible');
        }

        // Chequea que el serviceGroup este creado , si no lo crea
        this.agentHttp.checkService()
    }

    async checkCb(){
        if(await this.cbHttp.getCbStatus() != 200){
            throw new Error('Context Broker no disponible');
        }

        //Chequea que la Subscripción  a draco este creada, si no la crea
        this.cbHttp.checkSubscripcionDraco()
    } 
}
export default ApiCheck