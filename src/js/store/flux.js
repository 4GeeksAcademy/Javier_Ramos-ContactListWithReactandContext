const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:null,
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
				  };
				try {
					await fetch('https://playground.4geeks.com/contact/agendas/Javier/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(payload)
					})
					getActions().getContacts()
					alert("Usuario creado con éxito")
				} catch (error) {
					console.log("error al crear contacto", error)
					alert("Error al crear contacto")
				}
			},

			deleteContact: async (id) => {
				try {
					await fetch('https://playground.4geeks.com/contact/agendas/Javier/contacts/'+id, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						},
					})
					getActions().getContacts()
				} catch (error) {
					console.log(error)
					alert("Error al borrar contacto")
				}
			}, 

			editContact: async (id) => {
				const payload = {
					"name": dataForm.name,
					"phone": dataForm.phone,
					"email": dataForm.email,
					"address": dataForm.address
				  };
				try {
					await fetch('https://playground.4geeks.com/contact/agendas/Javier/contacts/'+id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(payload)
					})
					getActions().getContacts()
					alert("Usuario creado con éxito")
				} catch (error) {
					console.log("error al crear contacto", error)
					alert("Error al crear contacto")
				}
			},
		}
	};
};

export default getState;
