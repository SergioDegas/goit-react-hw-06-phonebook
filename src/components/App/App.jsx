import { GlobalStyle } from '../GlobalStyle';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Form from '../Form';
import { Container, H2, H1 } from './App.styled';






export const App = () => {
    return (
      <>
       <Container>
         <H1>Phonebook</H1>
          <Form  />
          <H2>Contacts</H2>
          <Filter />
          <ContactList/>
        </Container>
        <GlobalStyle />
      </>
    );
  }

