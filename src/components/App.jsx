import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import notes from "../notes"; 
import Note from "./Note";



function App(){
      return (
    <div>
      <Header />
{notes.map(noteItem =>(
   <Note key={noteItem.key}
  title={noteItem.title}
  content={noteItem.content} />
)
)}      
<Footer />
    </div>

  );

}

export default App;