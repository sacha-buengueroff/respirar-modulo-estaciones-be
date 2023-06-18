export const schema_solicitud = {
    name: value => !!value && value.trim() != "" ? true :  "El parametro nombre de usuario se encuentra vacio o nulo",
    coordinates: value => !!value && value.length === 2 ? true : "El parametro coordenadas es invalido",
    addStreet: value => !!value && value.trim() != "" ? true : "El parametro calle se encuentra vacio o nulo",
    addLocaly: value => !!value && value.trim() != "" ? true : "El parametro localidad se encuentra vacio o nulo",
    addRegion: value => !!value && value.trim() != "" ? true: "El parametro region se encuentra vacio o nulo",
    external: value => value === true ? true : "El parametro external vacio o no corresponde el tipo",
    email: value => !!value && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(value) ? true : "El parametro email vacio o invalido"
}

export const schema_estacion = {
    name: value => !!value && value.trim() != "" ? true :  "El parametro nombre de usuario se encuentra vacio o nulo",
    coordinates: value => !!value && value.length === 2 ? true : "El parametro coordenadas es invalido",
    addStreet: value => !!value && value.trim() != "" ? true : "El parametro calle se encuentra vacio o nulo",
    addLocaly: value => !!value && value.trim() != "" ? true : "El parametro localidad se encuentra vacio o nulo",
    addRegion: value => !!value && value.trim() != "" ? true: "El parametro region se encuentra vacio o nulo",
    external: value => value != undefined && typeof value === "boolean" ? true : "El parametro external vacio o no corresponde el tipo"
}

export const validate = (object, schema) => {
    let response = {}

    let schema_keys = Object.keys(schema)
    let object_keys = Object.keys(object)
    let i = 0
    let key

    if (schema_keys.length < object_keys.length) {
        response.status = 404
        response.message = "El formulario cuenta con un campo extra"
    }

    while (i < schema_keys.length && Object.keys(response).length === 0) {
        key = schema_keys[i]
        
        if (!(schema[key](object[key]) === true)) {
            response.status = 404
            response.message = schema[key](object[key])
        }
        i += 1
    }

    return response
}