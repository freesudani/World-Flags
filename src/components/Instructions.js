import React from 'react';
import './Instructions.css';
import './button.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import transitionVariants from './transitionVariants';

export const Instructions = () => {
	return (
		<motion.div
			className='instructions-box modal'
			variants={transitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'>
			<h1>Please Read Below Instructions</h1>
			<div>
				<p>1. You will presented with 5 different flags</p>
				<p>2. Please choose the correct flag out of the options</p>
				<p>3. You can Exit the Quize at any stage</p>
			</div>
			<div className='button-container'>
				<Link to='/Question1'>
					<button className='btn'>Proceed</button>
				</Link>

				<Link to='/'>
					<button className='btn'>Exit</button>
				</Link>
			</div>
		</motion.div>
	);
};
