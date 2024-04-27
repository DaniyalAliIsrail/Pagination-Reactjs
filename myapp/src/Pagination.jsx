import React from 'react';

const Pagination = ({totalposts,postsPerPage,setCurrentPage,currentPage}) => {
 
  let pages = [];
  console.log(pages);

  for (let i = 1; i <= Math.ceil(totalposts / postsPerPage); i++) {
    console.log(i);
      pages.push(i);
  }


  return (
    <div className="pagination">
      {
        pages.map((page,index) => {
          console.log(page);
          return (
            <button key={index} onClick={()=> setCurrentPage(page)}
            className={page == currentPage ? "active" : ""} >
              {page}
            </button>
          )
        })
      }

    </div>
  )
}

export default Pagination