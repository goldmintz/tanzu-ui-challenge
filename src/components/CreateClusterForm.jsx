import React, { useState } from 'react';
import '../styles.css';

const CreateClusterForm = ({ toggleClusterForm, addNewCluster }) => {
	const [clusterFields, setClusterFields] = useState({
		name: '',
		os: '',
		cores: '-',
		pods: '-',
		nodes: '-',
		total_memory_gb: '-',
		labels: [],
		namespaces: [],
	});

	const {
		name,
		os,
		cores,
		pods,
		total_memory_gb: total_memory,
		labels,
		namespaces,
	} = clusterFields;

	const handleSubmit = (e, clusterFields) => {
		e.preventDefault();
		addNewCluster(clusterFields);
		toggleClusterForm(false);
	};

	const handleChange = (e) => {
		if (e.target.name === 'labels' || e.target.name === 'namespaces') {
			let newArray = e.target.value.split(',');
			setClusterFields({
				...clusterFields,
				[e.target.name]: newArray,
			});
		} else {
			setClusterFields({ ...clusterFields, [e.target.name]: e.target.value });
		}
	};

	console.log(clusterFields);

	return (
		<div className='form-wrapper'>
			<form
				className='new-cluster-form'
				onSubmit={(e) => handleSubmit(e, clusterFields)}>
				<div className='form-header'>
					{' '}
					<h2>Add New Cluster</h2>
					<button
						className='btn-secondary '
						onClick={() => toggleClusterForm(false)}>
						close
					</button>
				</div>
				<hr style={{ width: '100%' }}></hr>
				<div className='form-input-wrapper'>
					{' '}
					<label>
						Name
						<input
							name='name'
							type='text'
							value={name}
							onChange={handleChange}
							required
						/>
					</label>
					<label>
						OS
						<input name='os' type='text' value={os} onChange={handleChange} />
					</label>
					<label>
						Labels
						<input
							name='labels'
							type='text'
							value={labels}
							onChange={handleChange}
						/>
					</label>
					<label>
						Cores
						<input
							name='cores'
							type='number'
							min='1'
							max='10'
							value={cores}
							onChange={handleChange}
						/>
					</label>
					<label>
						Pods
						<input
							name='pods'
							type='number'
							min='1'
							max='10'
							value={pods}
							onChange={handleChange}
						/>
					</label>
					<label>
						Namespaces
						<input
							name='namespaces'
							type='text'
							value={namespaces}
							onChange={handleChange}
						/>
					</label>
				</div>
				<input
					type='submit'
					value='Submit'
					className='btn-primary'
					id='btn-form-submit'
				/>{' '}
			</form>
		</div>
	);
};

export default CreateClusterForm;
