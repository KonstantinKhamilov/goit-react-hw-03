import css from "./contact.module.css";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactlistUl}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
