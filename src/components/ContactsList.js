import React from 'react';
import ContactListItem from "./ContactListItem";

const ContactsList = ({search, contacts, onDelete}) => {
    const filteredSearch = contacts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="shadow overflow-y-scroll h-96">
            {
                filteredSearch.map(user => <ContactListItem user={user} key={user.id} oneDelete={onDelete}/>)}
        </div>
    );
};

export default ContactsList;