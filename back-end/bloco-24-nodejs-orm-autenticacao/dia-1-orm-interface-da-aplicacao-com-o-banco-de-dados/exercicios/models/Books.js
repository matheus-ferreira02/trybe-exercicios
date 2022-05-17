'use strict';

const Book = (sequelize, dataType) => {
  const Book = sequelize.define('Book', {
    title: dataType.STRING,
    author: dataType.STRING,
    pageQuantity: dataType.INTEGER, 
  }, {
    underscored: true,
    tableName: 'Books'
  });

  return Book;
}

module.exports = Book;
