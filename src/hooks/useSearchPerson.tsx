import {useMemo} from "react";

export const useSearchPerson = (people, query) => {
	const searchedPeople = useMemo(() => {
		return people.filter(post => post.surname.toLowerCase().includes(query.toLowerCase()))
	},[query, people])
	return searchedPeople
}