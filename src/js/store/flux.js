const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:null,
			dataForm:{
				name: null,
				email: null,
				phone: null,
				address: null
			}
		},
		actions: {
			
			createNewAgenda: async () =>{
				try{
					await fetch('https://playground.4geeks.com/contact/agendas/Javier',{
						method: 'POST',
						headers:{
							'Content-Type': 'application/json'
						},
						body: JSON.stringify()
					})
				} catch(error){
					console.log(error)
				}
			},

			getContacts: async () =>{
				try{
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/Javier/contacts')
					const data = await resp.json()
					setStore({contacts: data.contacts})
				} catch(error){
					console.log(error)
				}
			},
			
			createContact: async (dataForm) => {
				const payload = {
					"name": dataForm.name,
					"phone": dataForm.phone,
					"email": dataForm.email,
					"address": dataForm.address
				  }
				try {
					//no estamos teniendo const resp y const data porque no estamos usando sus valores para nada en estas funciones.
					await fetch('https://playground.4geeks.com/contact/agendas/Javier/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(payload) //para POST y PUT
					})
					//no pasamos nada al store aqui porque la respuesta del fetch es solo el todo que se crea, no el listado de todos
					//por eso llamamos a getUsersTodos() pra traernos la lista actualizada
					//getActions() -> nos permite ejecutar otra funcion de actions
					//getUsersTodos(user) -> funcion que se trae el listado de todos del usuario, pero necesita el nombre del usuario que lo recibe como parametro
					//getStore().selected -> nos permite acceder a la variable selected que esta dentro del store
					//getUsersTodos(getStore().selected) ---> accedemos al store, tomamos el valor de la variable selected y se lo pasamos a getUsersTodos() 
					getActions().getContacts()
				} catch (error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;
