'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  }, {
    /* tableName: 'books' */
    
  });

  return Book;
}

/* Model.findAll({
  attributes: ['foo', 'bar']
}); */
