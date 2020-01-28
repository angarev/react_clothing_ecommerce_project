import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ hanldeChange, label, ...otherProps }) => {
	return (
		<div className='group'>
			<input className='form-input' onChange={hanldeChange} {...otherProps} />
			{label ? (
				<label
					className={`${
						otherProps.value.length ? 'shrink' : ''
					} form-input__label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
