import React, { useState } from 'react';
import '../styles.css';

const Table = ({ clusters, firstCluster, lastCluster }) => {
	let sortedClusters = [...clusters];

	//Sorting parameters
	const [sortParams, setSortParams] = useState({
		field: null,
		direction: null,
	});

	//destructure sorting params
	const { field, direction } = sortParams;

	//sort setup - look for a sort field and direction, then sort array accordingly
	if (field !== null) {
		sortedClusters.sort((a, b) => {
			if (a[field] < b[field]) {
				return direction === 'ascending' ? -1 : 1;
			}
			if (a[field] > b[field]) {
				return direction === 'ascending' ? 1 : -1;
			}
			return 0;
		});
	}

	// Toggle Sort
	const toggleSort = (field) => {
		let direction = 'ascending';
		if (sortParams.field === field && sortParams.direction === 'ascending') {
			direction = 'descending';
		}
		setSortParams({ field, direction });
	};

	//Display icon based on default, ascending, or descending selection
	const sortIcon = (name) => {
		if (name !== sortParams.field) {
			return <i className='fas fa-sort'></i>;
		}
		return sortParams.field === name && sortParams.direction === 'ascending' ? (
			<i className='fas fa-sort-up'></i>
		) : sortParams.field === name && sortParams.direction === 'descending' ? (
			<i className='fas fa-sort-down'></i>
		) : undefined;
	};

	//Clear sort from array and reset
	const clearSort = () => {
		setSortParams({ field: null, direction: null });
	};

	return (
		<table className='table-wrapper'>
			<thead>
				<tr>
					<th>
						<span onClick={() => clearSort()}>Cluster Name</span>
						<button
							type='button'
							className='sort-icon'
							onClick={(e) => {
								toggleSort('name');
							}}>
							{sortIcon('name')}
						</button>
					</th>
					<th>
						<span onClick={() => clearSort()}>OS</span>
						<button
							type='button'
							className='sort-icon'
							onClick={() => toggleSort('os')}>
							{sortIcon('os')}
						</button>
					</th>
					<th>
						<span onClick={() => clearSort()}>Cores</span>
						<button
							type='button'
							className='sort-icon'
							onClick={() => toggleSort('cores')}>
							{sortIcon('cores')}
						</button>
					</th>
					<th>Pods</th>
					<th>Nodes</th>
					<th>Memory</th>
					<th>Labels</th>
					<th>Namespaces</th>
				</tr>
			</thead>
			<tbody>
				{sortedClusters
					.slice(firstCluster, lastCluster)
					.map(
						({
							name,
							os,
							cores,
							pods,
							nodes,
							total_memory_gb: total_memory,
							labels,
							namespaces,
						}) => (
							<tr key={name}>
								<td className='cluster-name'>{name.replace('-cluster', '')}</td>
								{os.length > 0 && <td>{os}</td>}
								<td>{cores}</td>
								<td>{pods}</td>
								<td>{nodes}</td>
								<td>{total_memory.toLocaleString('en')}%</td>
								<td className='list-col'>
									<span className='btn-labels'>{labels.length}</span>{' '}
									{labels.join(', ')}
								</td>
								<td className='list-col namespaces'>{namespaces.join(',')}</td>
							</tr>
						),
					)}
			</tbody>
		</table>
	);
};

export default Table;
