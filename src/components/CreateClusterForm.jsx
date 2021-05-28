import React, { useState } from 'react';
import '../styles.css';

const CreateClusterForm = ({ toggleClusterForm, addNewCluster }) => {
	const [clusterFields, setClusterFields] = useState({
		name: '',
		os: '',
		cores: '',
		pods: '',
		nodes: '',
		total_memory_gb: '',
		labels: [],
		namespaces: [],
	});

	const {
		name,
		os,
		cores,
		pods,
		// total_memory_gb: total_memory,
		labels,
		namespaces,
	} = clusterFields;

	const handleSubmit = (e, clusterFields) => {
		e.preventDefault();
		addNewCluster(clusterFields);
		toggleClusterForm(false);
	};

	const handleChange = (e) => {
		if (e.target.name === 'namespaces' || e.target.name === 'labels') {
			let newNameSpaces = e.target.value.split(',');
			setClusterFields({
				...clusterFields,
				[e.target.name]: newNameSpaces,
			});
		}
		// if (e.target.name === 'labels') {
		// 	console.log(e.target.value);
		// 	let newLabels = Array.from(e.target.value, (value) => value);
		// 	setClusterFields({
		// 		...clusterFields,
		// 		[e.target.name]: e.target.value,
		// 	});
		// 	console.log(clusterFields);
		else {
			setClusterFields({ ...clusterFields, [e.target.name]: e.target.value });
		}
	};

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
						<select name='os' value={os} onChange={handleChange}>
							<option value=''></option>
							<option value='fedora'>fedora</option>
							<option value='suse'>suse</option>
							<option value='ubuntu'>ubuntu</option>
						</select>
					</label>
					{/* <label>
						Labels
						<select
							name='labels'
							multiple={true}
							onChange={handleChange}
							value={labels}>
							<option value='zen'>Zen</option>
							<option value='ana'>Ana</option>
							<option value='junk'>Junk</option>
						</select>
					</label> */}
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
					value='Create New Cluster'
					className='btn-primary'
					id='btn-form-submit'
				/>{' '}
			</form>
		</div>
	);
};

export default CreateClusterForm;
