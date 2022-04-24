import React from 'react'
import { connect } from 'react-redux'
import { addMembers } from '../store/people/actions'

function AddPersonForm(props) {
    const [ person, setPerson ] = React.useState({})
    
    function handleChange(event) {
        let newMember= { 
            name: event.target.value 
        }
        setPerson(newPerson)
    }
    
    function handleSubmit(event) {
        // Prevents the default behavior of the submit event (refreshes page)
        event.preventDefault()
        
        props.boundAddPerson(person) 
        setPerson({ name: "" })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={person.name} />
            <button type="submit">Submit</button>
        </form>    
    )
}

const mapDipatchToProps = {
  boundAddPerson: addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)

Reagieren von 'reagieren' importieren
importiere {connect} aus 'react-redux'
importiere { addMembers } aus '../store/people/actions'

Funktion AddPersonForm(Requisiten) {
     const [ person, setPerson ] = React.useState({})
    
     Funktion handleChange (Ereignis) {
         let newMember= {
             Name: Ereignis.Zielwert.Wert
         }
         setPerson(neuePerson)
     }
    
     Funktion HandleSubmit(Ereignis) {
         // Verhindert das Standardverhalten des Submit-Ereignisses (aktualisiert die Seite)
         event.preventDefault()
        
         props.boundAddPerson(Person)
         setPerson({ name: "" })
     }
     Rückkehr (
         <form onSubmit={handleSubmit}>
             <input type="text" onChange={handleChange} value={person.name} />
             <button type="submit">Senden</button>
         </form>
     )
}

const mapDipatchToProps = {
   gebundenAddPerson: addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm)

/*
Reagieren von 'reagieren' importieren
importiere {connect} aus 'react-redux'
importiere { addMembers } aus '../store/people/actions'

Funktion AddPersonForm(Requisiten) {
     const [ person, setPerson ] = React.useState({})
    
     Funktion handleChange (Ereignis) {
         let newMember= {
             Name: Ereignis.Zielwert.Wert
         }
         setPerson(neuePerson)
     }
    
     Funktion HandleSubmit(Ereignis) {
         // Verhindert das Standardverhalten des Submit-Ereignisses (aktualisiert die Seite)
         event.preventDefault()
        
         props.boundAddPerson(Person)
         setPerson({ name: "" })
     }
     Rückkehr (
         <form onSubmit={handleSubmit}>
             <input type="text" onChange={handleChange} value={person.name} />
             <button type="submit">Senden</button>
         </form>
     )
}

const mapDipatchToProps = {
   gebundenAddPerson: addPerson
}

export default connect(null, mapDipatchToProps)(AddPersonForm) */
