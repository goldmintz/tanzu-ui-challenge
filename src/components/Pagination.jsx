import React from 'react';
import '../styles.css';

const Pagination = ({
	setCurrentClusterPage,
	currentClusterPage,
	lastCluster,
	firstCluster,
	totalClusters,
}) => {
	const changeClusterPage = (direction) => {
		direction === 'back'
			? setCurrentClusterPage(currentClusterPage - 1)
			: setCurrentClusterPage(currentClusterPage + 1);
	};

	return (
		<div className='pagination-wrapper'>
			<div className='pagination-controls'>
				<button
					disabled={currentClusterPage === 1}
					className='btn-pagination'
					onClick={() => changeClusterPage('back')}>
					<i className='fas fa-chevron-left' />
				</button>

				<span className='pagination-title'>
					{firstCluster + 1} to {lastCluster} of {totalClusters} Clusters
				</span>

				<button
					disabled={lastCluster >= totalClusters}
					className='btn-pagination'
					onClick={() => changeClusterPage('fwd')}>
					<i className='fas fa-chevron-right' />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
