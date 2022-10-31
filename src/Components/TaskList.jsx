import React from 'react';
import tw from 'tailwind-styled-components';

function TaskList() {
	return (
		<div className='w-5/12'>
			<ul className='px-28 text-lg font-normal flex flex-col gap-2 uppercase'>
				<Li className=''>first</Li>
			</ul>
		</div>
	);
}

const Li = tw.li`
border px-4 py-1 text-gray-800 bg-yellow-50 border-yellow-200 border-x-0
`;

export default TaskList;
