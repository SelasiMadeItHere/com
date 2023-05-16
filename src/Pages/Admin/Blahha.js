// import React, { useState } from 'react';
// import { Button } from '@mui/material';
// import AnotherComponent from './AnotherComponent';

// function MainComponent() {
//   const [selectedEntry, setSelectedEntry] = useState(null);

//   const handleEntryClick = (entry) => {
//     setSelectedEntry(entry);
//   };

//   return (
//     <div>
//       {/* Render your entries list */}
//       {entries.map((entry) => (
//         <div key={entry.id}>
//           <p>{entry.title}</p>
//           <Button onClick={() => handleEntryClick(entry)}>Send to Another Component</Button>
//         </div>
//       ))}

//       {/* Render the AnotherComponent and pass the selected entry */}
//       {selectedEntry && <AnotherComponent entry={selectedEntry} />}
//     </div>
//   );
// }

// export default MainComponent;
