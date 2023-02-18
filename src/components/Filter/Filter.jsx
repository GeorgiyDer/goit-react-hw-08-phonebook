import { useSelector, useDispatch } from 'react-redux';
import * as SC from './Filter.styled';
import { Box } from 'Utils/Box';
import { filterContact, getFilter } from '../../Redux/contacts/filterSlice';
import { AddContactButton } from 'components/AddContactButton/AddContactButton';
import { FcSearch } from 'react-icons/fc';

export const Filter = () => {
  const filterList = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <SC.Title>
          <FcSearch size="24px" />
        </SC.Title>
        <SC.FindArea
          type="text"
          name="filter"
          value={filterList}
          autoComplete="off"
          placeholder="Name"
          onChange={evt => dispatch(filterContact(evt.target.value))}
        />
      </Box>
      <AddContactButton />
    </Box>
  );
};