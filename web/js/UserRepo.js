/** Repositorio de datos de usuarios */
class UserRepo {

    /** Crea un usuario a través de la API */
    async insertUser(data) {
        let response = await fetch("https://localhost:5001/api/users/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        //return await response.json();
    }

    /** Crea un usuario a través de la API */
    async updateUser(data) {
        let response = await fetch("https://localhost:5001/api/users/", {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        //return await response.json();
    }

    /** Elimina un usuario a través de la API */
    async deleteUser(username) {
        let response = await fetch("https://localhost:5001/api/users/" + username, {
            method: 'DELETE'
        });

        //return await response.json();
    }

    /** Obtiene los usuarios de la API y los envía a la vista */
    async getUsers() {
        let response = await fetch("https://localhost:5001/api/users/", {
            method: 'GET'
        });
        
        return await response.json();            
    }

    /** Obtiene los datos de un usuario de la API y los envía a la vista */
    async getUser(username) {
        let response = await fetch("https://localhost:5001/api/users/" + username, {
            method: 'GET'
        }); 
        return await response.json();            
    }
}