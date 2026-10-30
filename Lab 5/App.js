import React, { useState } from "react";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (!title) return;
    
    const newMovie = {
      id: Date.now(),
      title: title,
      comment: comment,
      rating: Number(rating)
    };
    
    setMovies([...movies, newMovie]);
    setTitle("");
    setComment("");
    setRating(1);
  };

  return (
    <div className="newStyle1">
      <table style={{ borderColor: "#000000", borderWidth: 0, width: "100%", borderSpacing: 0 }} align="center" cellPadding="2" cellSpacing="0">
        <tbody>
          <tr>
            <td style={{ textAlign: "left", color: "#FFFFFF", fontFamily: "'Instrument Serif'", fontSize: "120px", paddingLeft: "15px", lineHeight: "1.2", height: "100px", width: "1296px" }}>
              Movies<em>WatchList</em>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ padding: 0, height: 3 }}>
              <div className="horizon-line" style={{ marginBottom: "0px", textAlign: "center" }}></div>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: "center", paddingTop: "20px", paddingLeft: "10px", fontSize: "15px" }}>
              <form onSubmit={handleAddMovie}>
                <input 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  style={{ width: "630px", height: "38px", marginBottom: "10px" }} 
                  type="text" 
                  placeholder="Enter Movie Title..." 
                />
                <br />
                <input 
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)} 
                  style={{ width: "630px", height: "38px", marginBottom: "10px" }} 
                  type="text" 
                  placeholder="Enter Comment..." 
                />
                <br />
                <input 
                  type="Number"
                  value={rating} 
                  onChange={(e) => setRating(e.target.value)} 
                  min="1"
                  max="5"
                  style={{ width: "630px", height: "38px", marginBottom: "10px" }}
                  placeholder="Enter Number of Stars (1-5)..."
                />
                <br />
                <button className="button" type="submit" style={{ height: "38px", width: "100px" }}>Add Movie</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        {movies.map((movie) => (
          <div key={movie.id} className="list">
            <h1>{movie.title} {"⭐".repeat(movie.rating)}</h1>
            <p>{movie.comment}</p>
            <p> <b>___________________________________________________________________ </b></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;