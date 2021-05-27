import React, { useEffect, useState } from 'react';
import './styles.css';

//import children
import Nav from './components/Nav';
import Table from './components/Table';
import Pagination from './components/Pagination';

export const App = () => {
	//Fetch clusters on load
	//If clusters are in local storage, use those
	//Local storage used for updated array, including newly created cluster records
	useEffect(() => {
		const getClusters = () => {
			const localStClusters = localStorage.getItem('clusters');
			fetch('clusters.json', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					if (localStClusters) {
						setClusters(JSON.parse(localStorage.getItem('clusters')));
					} else {
						localStorage.setItem('clusters', JSON.stringify(data));
						setClusters(data);
					}
				});
		};
		getClusters();
	}, []);

	//cluster state management
	const [clusters, setClusters] = useState([]);

	//search state management

	

	return (
		<div>
			<Nav />
			<Table />
			<Pagination />
		</div>
	);
};

export default App;
