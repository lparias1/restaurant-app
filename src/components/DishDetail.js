// src/components/DishDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { categoryTranslations, areaTranslations } from '../utils/translations';
import './DishDetail.css';

const DishDetail = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setDish(response.data.meals[0]);
      } catch (err) {
        setError('Error al cargar los detalles del plato.');
      } finally {
        setLoading(false);
      }
    };

    fetchDish();
  }, [id]);

  if (loading) return <div className="loading">Cargando detalles...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!dish) return <div className="error">Plato no encontrado</div>;

  return (
    <div className="dish-detail-container">
      <div className="back-link">
        <Link to="/menu">← Volver al Menú</Link>
      </div>
      
      <div className="dish-header">
        <img src={dish.strMealThumb} alt={dish.strMeal} />
        <div>
          <h2>{dish.strMeal}</h2>
          <p><strong>Categoría:</strong> {categoryTranslations[dish.strCategory] || dish.strCategory}</p>
          <p><strong>Área:</strong> {areaTranslations[dish.strArea] || dish.strArea}</p>
        </div>
      </div>
      
      <div className="ingredients">
        <h3>Ingredientes</h3>
        <ul>
          {Object.keys(dish)
            .filter(key => key.startsWith('strIngredient') && dish[key])
            .map(key => (
              <li key={key}>
                {dish[key]} - {dish[`strMeasure${key.slice(13)}`]}
              </li>
            ))}
        </ul>
      </div>
      
      <div className="instructions">
        <h3>Instrucciones</h3>
        <p>{dish.strInstructions}</p>
      </div>
      
      <div className="video-section">
        {dish.strYoutube && (
          <div>
            <h3>Video Tutorial</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${dish.strYoutube.slice(-11)}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishDetail;