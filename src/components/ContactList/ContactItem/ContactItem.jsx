import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, TextStyled } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const contactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <p>{name}</p>
      <TextStyled>{number}</TextStyled>
      <Button
        type="button"
        onClick={() => {
          contactDelete(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
