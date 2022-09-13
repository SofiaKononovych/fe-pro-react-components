import React from 'react';
import Article from './Article';

const Content = () => {
  const articleContent = [
    {
      articleName: '15 полезных однострочных выражений JavaScript',
      articleText:
        'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
      id: 1,
    },
    {
      articleName: 'Полиморфизм простыми словами',
      articleText:
        'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
      id: 2,
    },
    {
      articleName: 'Начало работы с Node.js',
      articleText: 'Node Hero: Глава 1',
      id: 3,
    },
    {
      articleName:
        'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
      articleText:
        'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
      id: 4,
    },
    {
      articleName:
        '8 практичных хитростей веб-разработчика применить немедленно!',
      articleText:
        'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
      id: 5,
    },
    {
      articleName: 'Насколько JavaScript сильный?',
      articleText:
        'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
      id: 6,
    },
    {
      articleName: 'Изучите CSS-переменные за 5 минут',
      articleText:
        'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
      id: 7,
    },
    {
      articleName: 'Создание MEVN-приложения (Часть 1/2)',
      articleText:
        'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
      id: 8,
    },
    {
      articleName: 'Реактивность Vue.js',
      articleText:
        'Реактивность фреймворка Vue.js и использование метода Vue.set',
      id: 9,
    },
    {
      articleName: 'Микроптимизации производительности и JavaScript',
      articleText:
        'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
      id: 10,
    },
    {
      articleName: 'Девшахта-подкаст',
      articleText:
        '#108: Производительность кода — это важнейший критерий качества?',
      id: 11,
    },
    {
      articleName: 'Одна из самых красивых идей в информатике: Y-Combinator',
      articleText:
        'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
      id: 12,
    },
  ];
  const articles = articleContent.map(({ articleName, articleText, id }) => {
    return (
      <Article articleName={articleName} articleText={articleText} key={id} />
    );
  });

  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>Posts</h1>
          <ul className="list">{articles}</ul>
        </div>
      </section>
    </main>
  );
};

export default Content;
