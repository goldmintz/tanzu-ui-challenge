import React from 'react';
import '../styles.css';

const TableControls = ({
	totalClustersCount,
	filteredClustersCount,
	searchTerm,
	setSearchTerm,
	clearSearchTerm,
}) => {
	const clusterCountHeading =
		filteredClustersCount === totalClustersCount
			? `${totalClustersCount} Total Clusters`
			: `${filteredClustersCount} of ${totalClustersCount} Clusters`;

	return (
		<div className='cluster-cntrl-wrapper'>
			<div className='cluster-cntrl-group'>
				<div className='cluster-cntrl-header'>
					<h1>Clusters</h1>
					<div id='cluster-count'>{clusterCountHeading}</div>
				</div>
			</div>

			<div>
				<input
					className='search-input'
					type='text'
					placeholder='Search by name or OS'
					value={searchTerm}
					onChange={setSearchTerm}
				/>
				<button
					className='btn-secondary'
					onClick={clearSearchTerm}
					//disable search unless user enters term (otherwise click resets currentClustersPage to 1)
					disabled={searchTerm === ''}>
					Clear search
				</button>
			</div>
		</div>
	);
};

export default TableControls;
