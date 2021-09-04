import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Starting.css';
import './button.css';
import transitionVariants from './transitionVariants';

export const Starting = () => {
	return (
		<motion.div
			className='starting-box modal'
			variants={transitionVariants}
			initial='hidden'
			animate='visible'
			exit='hidden'>
			<h1>World Flag Quiz Test</h1>
			<Link to='/instructions'>
				<button className='btn'>
					<span>Start Quiz</span>
				</button>
			</Link>
		</motion.div>
	);
};
