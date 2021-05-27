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

	//Cluster state management
	const [clusters, setClusters] = useState([]);
	const [currentClusterPage, setCurrentClusterPage] = useState(1);
	const [clustersPerPage] = useState(10);

	//Pagination Helpers
	const lastCluster = currentClusterPage * clustersPerPage;
	const firstCluster = lastCluster - clustersPerPage;

	//search state management
	const [searchTerm, setSearchTerm] = useState('');

	const searchClusters = (clusters) => {
		const term = searchTerm.toLowerCase();

		return clusters.filter(
			(cluster) =>
				cluster.name.toLowerCase().includes(term) ||
				cluster.os.toLowerCase().includes(term),
			//include search within label and namespace arrays
		);
	};

	return (
		<div>
			<Nav />
			<Table
				clusters={searchClusters(clusters)}
				firstCluster={firstCluster}
				lastCluster={lastCluster}
			/>
			<Pagination />
		</div>
	);
};

export default App;
