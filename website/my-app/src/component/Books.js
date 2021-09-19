import React from "react";
import { useState, useEffect } from "react";
import "./Box.css"
import { Card } from "react-bootstrap";
import { Button} from 'react-bootstrap';




const Books = () => {
  const bookInfo = [
    {image: "https://images-na.ssl-images-amazon.com/images/I/51rPnZPg0hL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg", title: "Math", text: "Atlanta"},
    {image: "https://images-na.ssl-images-amazon.com/images/I/51+lRfZDOSL._SX373_BO1,204,203,200_.jpg", title: "Science", text: "Alpharetta"},
    {image: "https://images-na.ssl-images-amazon.com/images/I/51wQ3CPl6qL._SX393_BO1,204,203,200_.jpg", title: "History", text: "Frisco"},
    {image: "https://images-na.ssl-images-amazon.com/images/I/41fRAMCMu1L._SX258_BO1,204,203,200_.jpg", title: "Computer Science", text: "Atlanta"},
  ];
  const [q, setQ] = useState(""); 
  const [searchParam] = useState(["title"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const renderBook = (book, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index} className="box">
  <Card.Img variant="top" src="holder.js/100px180" src={book.image} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>
      {book.text}
    </Card.Text>
    <Button variant="primary">Details</Button>
  </Card.Body>
</Card>
    )
  }
  function search(books) {
    return books.filter((book) => {
 /*
 // in here we check if our region is equal to our c state
 // if it's equal to then only return the items that match
 // if not return All the countries
 */
    if (book.text == filterParam) {
        return searchParam.some((newBook) => {
          return (
            book[newBook]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
                     );
                 });
             } else if (filterParam == "All") {
                 return searchParam.some((newBook) => {
                     return (
                         book[newBook]
                             .toString()
                             .toLowerCase()
                             .indexOf(q.toLowerCase()) > -1
                     );
                 });
             }
         });
     }
    return <div>
      <input type = "text" id = "searchBar" value = {q} onChange={(e) => setQ(e.target.value)} placeholder = "Search for a book here"></input> 
      <select id = "selectBar"
                            /* 
//                         here we create a basic select input
//                     we set the value to the selected value 
//                     and update the setC() state every time onChange is called
                    */
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Filter Countries By Countries"
                        >
                            <option value="All">Filter By Region</option>
                            <option value="Alpharetta">Alpharetta</option>
                            <option value="Atlanta">Atlanta</option>
                            <option value="Frisco">Frisco</option>
                        </select>
                        <div className="grid">
      
        {search(bookInfo).map(renderBook)}
    </div>
    </div>
}

export default Books;