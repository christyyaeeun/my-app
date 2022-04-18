// // Posts.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { format } from 'date-fns';
// import { Text } from '@chakra-ui/react';

// function PostList({ posts = [] }) {
//     return (
//       <>
//         <div className="timeline">
//           {posts.map(item => (
//             <Link to={`/item/${item.id}`} key={item.id}>
//               <div key={item.id}>
//                 <h1 className="title">{item.name}</h1>
//                 <img alt="post" id="post-img" src={item.image} />
//                 <p>@{item.owner}</p>
//                 <p>{item.description}</p>
//                 <Text color={'gray.500'}>
//                   {format(new Date(item.createdAt), 'MM/dd/yyyy')}
//                 </Text>

//               </div>
//             </Link>
//           ))}
//         </div>
//       </>
//     );
// };

// export default PostList