import ContactItem from 'components/ContactList/ContactItem';
import { getContacts, getFilterByName } from 'components/redux/selectors';

import { useSelector } from 'react-redux';
import { Item } from './ContactList.styled';


const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterByName = useSelector(getFilterByName);

  const contactFilter = () => {
    const lowerRegister = filterByName.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerRegister)
    );
  };
  return (
    <ul>
      {contactFilter().map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactItem
              name={name}
              id={id}
              number={number}
            
            />
          </Item>
        );
      })}
    </ul>
  );
};



export default ContactList;