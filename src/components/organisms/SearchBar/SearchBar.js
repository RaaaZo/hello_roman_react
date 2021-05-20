import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import { useState } from 'react';
import {
  SearchBarWrapper,
  SearchResults,
  SearchResultsItem,
  SearchWrapper,
  StatusInfo,
} from 'components/organisms/SearchBar/SearchBar.styles';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" id="Search" />

        <SearchResults
          isVisible={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
        >
          {isOpen &&
            matchingStudents.map((student, index) => (
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ item: student, index })}
                key={student.id}
              >
                {student.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
export default SearchBar;
