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
		// split the namespace string entry into lowercase array
		if (e.target.name === 'namespaces') {
			let newNameSpaces = e.target.value.toLowerCase().split(',');
			setClusterFields({
				...clusterFields,
				[e.target.name]: newNameSpaces,
			});
		}
		//create an array from label multi-select selectedOptions
		if (e.target.name === 'labels') {
			let newLabels = Array.from(
				e.target.selectedOptions,
				(option) => option.value,
			);
			setClusterFields({
				...clusterFields,
				[e.target.name]: newLabels,
			});
			//everyone else, just set their state value to the entered value
		} else if (e.target.name !== 'labels' && e.target.name !== 'namespaces') {
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
				<hr></hr>
				<div className='form-input-wrapper'>
					<section className='form-row'>
						{' '}
						<label>
							Name
							<input
								name='name'
								type='text'
								//format entry to lowecase on update
								value={name.toLowerCase()}
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
					</section>

					<section className='form-row'>
						<label>
							Namespaces
							<input
								name='namespaces'
								type='text'
								value={namespaces}
								onChange={handleChange}
								placeholder='Please separate namespaces with commas'
							/>
						</label>

						<label>
							Labels
							<select
								id='labels-multiselect'
								name='labels'
								multiple={true}
								onChange={handleChange}
								value={labels}>
								<option value='britney'>britney</option>
								<option value='ariana'>ariana</option>
								<option value='christina'>christina</option>
							</select>
						</label>
					</section>
					<section className='form-row'>
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
					</section>
					<hr></hr>
					<input
						type='submit'
						value='Create New Cluster'
						className='btn-primary'
						id='btn-form-submit'
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateClusterForm;
