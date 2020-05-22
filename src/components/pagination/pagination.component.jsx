import React from 'react';
import './pagination.styles.scss';


const Pagination = ({ postsPerPage, totalPosts, paginate }) =>{
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
      <div className="pagination">
            <div>
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number} >
                             <a onClick={() => paginate(number)} href='javascript:void(0)' className='page-link'>
                            {number}
                             </a>
                        </li>
                    ))}
                </ul>
            </div>
      </div>
    )
}

export default Pagination;