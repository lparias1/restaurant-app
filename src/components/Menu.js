// src/components/Menu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { categoryTranslations, areaTranslations } from '../utils/translations';
import './Menu.css';

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setDishes(response.data.meals || []);
      } catch (err) {
        setError('Error al cargar el menú. Inténtelo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  if (loading) return <div className="loading">Cargando menú...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="menu-container">
      <h2>Nuestro Menú</h2>
      
      <div className="menu-layout">
        <div className="dishes-grid">
          {dishes.map(dish => (
            <div 
              key={dish.idMeal} 
              className={`dish-card ${selectedDish?.idMeal === dish.idMeal ? 'selected' : ''}`}
              onClick={() => handleDishClick(dish)}
            >
              <img src={dish.strMealThumb} alt={dish.strMeal} />
              <h3>{dish.strMeal}</h3>
              <p>{categoryTranslations[dish.strCategory] || dish.strCategory}</p>
              <Link to={`/dish/${dish.idMeal}`} className="detail-link">Ver detalles</Link>
            </div>
          ))}
        </div>
        
        {selectedDish && (
          <div className="dish-description">
            <h3>{selectedDish.strMeal}</h3>
            <div className="description-content">
              <img src={selectedDish.strMealThumb} alt={selectedDish.strMeal} />
              <div>
                <p><strong>Categoría:</strong> {categoryTranslations[selectedDish.strCategory] || selectedDish.strCategory}</p>
                <p><strong>Área:</strong> {areaTranslations[selectedDish.strArea] || selectedDish.strArea}</p>
                <p><strong>Descripción:</strong></p>
                <p>{selectedDish.strInstructions ? selectedDish.strInstructions.substring(0, 300) + '...' : 'Descripción no disponible'}</p>
                <Link to={`/dish/${selectedDish.idMeal}`} className="view-full-link">Ver receta completa</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;