import React from 'react';
import { Container, Input, InputLeftElement, InputGroup } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons';


const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<Container>
				<InputGroup>
					<InputLeftElement children={<SearchIcon color='blue.500' />} />

					<Input
						onChange={(event) =>
							handleSearchNote(event.target.value)
						}
						type='text'
						placeholder='type to search...'
					/>

				</InputGroup>
			</Container>
		</div>
	);
};

export default Search;