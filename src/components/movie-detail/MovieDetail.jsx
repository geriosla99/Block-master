import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { filter } from 'dom-helpers';

const MovieDetail = (props) => {
  const { title, overview, release_date, genre_ids } = props.selectedMovie;
  const [genre, setGenre] = useState([]);

  const fetchGenreMovie = async () => {
    const response = await axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=a5b6e4573766eddddb44bea3d3bfa64e&language=es-CO'
      )
      .catch((err) => {
        console.log('Error', err);
      });
    const { data } = response;

    console.log(data);

    // const genres = data.filter(
    //   (gen) => gen.id === genre_ids[0] || gen.id === genre_ids[1]
    // );

    // setGenre(genres);
  };

  useEffect(() => {
    fetchGenreMovie();
  }, []);

  const year = release_date ? release_date.split('-')[0] : '';
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <h4>{title}</h4>
        <p>{overview}</p>
        <div>
          <span>{year}</span>
          <span>Género</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetail;
