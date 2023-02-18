import { ContactList } from '../../components/ContactList/ContactList';
import { Filterr } from '../../components/Filter/Filterr';
import { MaineTitle } from './PhoneBook.styled';

export const PhoneBookPage = () => {
  return (
    <>
      <MaineTitle>Easy manage your contacts</MaineTitle>
      <Filterr />
      <ContactList />
    </>
  );
};