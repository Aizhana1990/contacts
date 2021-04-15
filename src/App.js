import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import axios from "axios";
import AddForm from "./components/AddForm";

const App = () => {
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])
    const [isShowForm, setIsShowForm] = useState(false)
    useEffect(() =>{
        axios('https://605c24d16d85de00170d9543.mockapi.io/users')
            .then(({data}) => setContacts(data))
    },[])
    const deleteUser =(id) =>{
        axios.delete(`https://605c24d16d85de00170d9543.mockapi.io/users/${id}`)
            .then(({data}) => {
                setContacts(contacts.filter(el => el.id !== data.id))
            })
    }
    const addUser = (user) =>{
        axios.post('https://605c24d16d85de00170d9543.mockapi.io/users', user)
            .then(({data}) => setContacts([...contacts, data]))
    }
    return (
        <div className="w-1/3 mx-auto my-6">
            <Header setSearch={setSearch} setIsShowForm ={setIsShowForm}/>
            {isShowForm && <AddForm addUser={addUser} setIsShowFrom={setIsShowForm}/>}
            <ContactsList
                search={search}
                contacts={contacts}
                onDelete={deleteUser}
            />
        </div>
    );
};

export default App;
